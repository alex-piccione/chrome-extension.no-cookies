# cleanup
rm -r dist

# install dependencies
npm install

# build
npm run build

# prepare required files
cp -r manifest.json dist/
sed -i 's/__VERSION__/0.0.0/g' dist/manifest.json
mkdir -p dist/pages && cp -r pages/* dist/pages/
mkdir -p dist/images && cp -r images/* dist/images/
