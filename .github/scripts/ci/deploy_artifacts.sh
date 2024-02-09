#/bin/bash

# set registry npmjs
pnpm config set registry=https://registry.npmjs.org/
pnpm config set //registry.npmjs.org/:_authToken $NPM_TOKEN

# publish
# pnpm run publish --access=public

echo "Reading branch $BRANCH_NAME"

if [ "$BRANCH_NAME" = "dev" ]; then
    pnpm run publish:dev --access=public --tag develop
else
    pnpm run publish --access=public
fi