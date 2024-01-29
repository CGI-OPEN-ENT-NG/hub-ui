#/bin/bash

# set registry npmjs
pnpm config set registry=https://registry.npmjs.org/
pnpm config set //registry.npmjs.org/:_authToken $NPM_TOKEN

# publish
pnpm run publish --access=public