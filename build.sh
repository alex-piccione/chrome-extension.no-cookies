# cleanup
rm -r dist

# install dependencies
npm install

# build
npm run build

# prepare required files
cp -r manifest.json dist/
mkdir -p dist/pages && cp -r pages/* dist/pages/
mkdir -p dist/images && cp -r images/* dist/images/
