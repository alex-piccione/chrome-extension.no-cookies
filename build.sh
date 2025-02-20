# cleanup
rm -r dist

# echo build
npm run build

# echo prepare required files
cp -r manifest.json dist/
mkdir -p dist/pages && cp -r pages/* dist/pages/
mkdir -p dist/images && cp -r images/* dist/images/
