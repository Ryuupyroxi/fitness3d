npm test
npm run lint
expo start --clear
eas build --platform android

# Production build
eas build --platform android --profile production

# Development build
eas build --platform android --profile development