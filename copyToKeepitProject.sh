#!/bin/bash

# 
# This script copies all files from {WebComponentsDir}/dist/ to {keepit project}/dist/keepit-web-components/
# And as option adds commit to git of keepit project
#

currentFold=${PWD##*/}
foundFolders=0

# Finding derectory with Keepit project
cd ..
for dir in `ls -d *`; do
    if [[ $dir == "work_keepit" || $dir == "WebClient" || $dir == "keepit" ]]; then
        finalFold=$dir
        foundFolders=$((foundFolders + 1))
    fi
done

# If found 0 or more then 1 derectory, user should type name of folder
if [[ $foundFolders > 1 || $foundFolders == 0 ]]; then
    echo -n 'Folder collision, please type folder name where your Keepit project: '
    read finalFold
fi

# Copying folders and files from Stencil project to Keepit
cd $currentFold
cp -avr dist/* ../$finalFold/dist/keepit-web-components/

echo "Components already copied to "$finalFold

# If present flag "f" it makes commit with comment to keepit git
cd ../$finalFold
if [[ "$1" == "f" ]]; then
    git add .
    git commit -m "$2"
fi
echo "--------------------------------------"

