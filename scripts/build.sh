#!/bin/bash

rm -rf dist
mkdir dist

dist="";

for entry in `ls ./src/components`; do
  dist+=$(cat ./src/components/$entry);
done

cat > ./dist/piq-ui.dist.js << EOL
$dist;
EOL

