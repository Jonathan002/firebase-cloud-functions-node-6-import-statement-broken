# Test

Broken Example for Firebase cloud functions..

1. After installing node_modules, do "npm run build:client-and-server-bundles"
2. Go to firebaserc file and enter your firebase project-id
3. Run "firebase deploy --only functions"

The cloud functions parsing will error with import statements of node_modules since it is node 6
