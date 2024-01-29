#/bin/bash

# Loop dans tous les dossiers présents dans packages
# Si la version termine par -dev
# Ajouter .timestamp
for d in packages/*; do
    package="$d/package.json"
    version=$(grep -m1 '"version": ".*"' $package | awk -F '["]' '/"version":/{print $4}')
    echo "package=$package; version=$version"

    if [[ $version == *-dev ]]; then
        echo "suffixing version with timestamp"
        timestamp=$(date +%s)
        sed -i "s/\"version\": \"$version\"/\"version\": \"$version.$timestamp\"/g" $package
    fi
done