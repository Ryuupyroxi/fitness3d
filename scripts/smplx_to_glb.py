#!/usr/bin/env python3
"""
SMPL-X to GLB Converter
Converts SMPL-X motion parameters (.npz) to animated GLB for Three.js

Requirements:
    pip install smplx torch numpy pygltflib

Usage:
    python smplx_to_glb.py --input motion.npz --output animation.glb --fps 30
"""

import argparse
import numpy as np
import torch
import smplx
from pygltflib import GLTF2, Scene, Node, Mesh, Primitive, Buffer, BufferView, Accessor, Animation, AnimationChannel, AnimationSampler, Asset, Image, Texture, Sampler, Material, PBRMetallicRoughness
import os
import json

def load_smplx_model(gender='neutral', model_path='models/smplx'):
    """Load SMPL-X model"""
    model = smplx.create(
        model_path,
        model_type='smplx',
        gender=gender,
        use_face_contour=False,
        num_betas=10,
        num_expression_coeffs=10,
        ext='npz'
    )
    return model

def create_smplx_mesh(model, betas=None, transl=None):
    """Generate SMPL-X mesh vertices and faces"""
    if betas is None:
        betas = torch.zeros(1, 10)
    if transl is None:
        transl = torch.zeros(1, 3)
    
    output = model(
        betas=betas,
        transl=transl,
        return_verts=True
    )
    
    vertices = output.vertices.detach().numpy()[0]
    faces = model.faces
    
    return vertices, faces

def create_animated_glb(
    model,
    poses,
    betas,
    transl,
    fps=30,
    output_path='output.glb'
):
    """
    Create animated GLB from SMPL-X pose sequence
    
    Args:
        model: SMPL-X model
        poses: (N, 165) pose parameters (54 joints * 3)
        betas: (10,) shape parameters
        transl: (N, 3) translation per frame
        fps: frames per second
        output_path: output GLB path
    """
    N = len(poses)
    
    # Generate mesh for each frame
    vertices_list = []
    joints_list = []
    
    for i in range(N):
        pose = torch.tensor(poses[i:i+1], dtype=torch.float32)
        beta = torch.tensor(betas, dtype=torch.float32).unsqueeze(0)
        tr = torch.tensor(transl[i:i+1], dtype=torch.float32)
        
        output = model(
            global_orient=pose[:, :3],
            body_pose=pose[:, 3:66],
            jaw_pose=pose[:, 66:69],
            leye_pose=pose[:, 69:72],
            reye_pose=pose[:, 72:75],
            left_hand_pose=pose[:, 75:120],
            right_hand_pose=pose[:, 120:165],
            betas=beta,
            transl=tr,
            return_verts=True
        )
        
        vertices_list.append(output.vertices.detach().numpy()[0])
        joints_list.append(output.joints.detach().numpy()[0])
    
    # For GLB, we'll export the first frame as mesh + animation tracks
    # This is a simplified version - full implementation would bake vertex positions
    
    vertices = vertices_list[0]
    faces = model.faces
    
    # Create GLB structure
    gltf = GLTF2(
        asset=Asset(version="2.0", generator="smplx-to-glb"),
        scenes=[Scene(nodes=[0])],
        nodes=[Node(mesh=0, name="SMPLX")],
        meshes=[Mesh(
            primitives=[Primitive(
                attributes={"POSITION": 0},
                indices=1,
                material=0
            )]
        )],
        materials=[Material(
            pbrMetallicRoughness=PBRMetallicRoughness(
                baseColorFactor=[0.8, 0.6, 0.5, 1.0],
                metallicFactor=0.0,
                roughnessFactor=0.8
            ),
            name="skin"
        )],
        buffers=[],
        bufferViews=[],
        accessors=[]
    )
    
    # TODO: Add animation tracks for joints
    # This requires creating KeyframeTracks for each joint's rotation
    
    gltf.save(output_path)
    print(f"Saved GLB to {output_path}")
    print(f"Frames: {N}, FPS: {fps}, Duration: {N/fps:.2f}s")
    print(f"Vertices: {len(vertices)}, Faces: {len(faces)}")
    print(f"Joints: {len(joints_list[0])}")

def main():
    parser = argparse.ArgumentParser(description='Convert SMPL-X to animated GLB')
    parser.add_argument('--input', type=str, help='Input .npz file')
    parser.add_argument('--output', type=str, default='output.glb', help='Output GLB file')
    parser.add_argument('--fps', type=int, default=30, help='Frames per second')
    parser.add_argument('--gender', type=str, default='neutral', help='Model gender')
    parser.add_argument('--model-path', type=str, default='models/smplx', help='SMPL-X model path')
    
    args = parser.parse_args()
    
    if args.input:
        # Load motion data
        data = np.load(args.input)
        poses = data['poses']
        betas = data['betas']
        transl = data['transl']
    else:
        # Generate test motion (walking in place)
        N = 100
        poses = np.zeros((N, 165))
        betas = np.zeros(10)
        transl = np.zeros((N, 3))
        
        # Simple leg motion
        for i in range(N):
            t = i / N
            # Left hip
            poses[i, 3:6] = [np.sin(t * 2 * np.pi) * 0.3, 0, 0]
            # Right hip
            poses[i, 6:9] = [np.sin(t * 2 * np.pi + np.pi) * 0.3, 0, 0]
    
    # Load model
    model = load_smplx_model(args.gender, args.model_path)
    
    # Create GLB
    create_animated_glb(model, poses, betas, transl, args.fps, args.output)

if __name__ == '__main__':
    main()
