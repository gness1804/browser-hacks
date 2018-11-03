#!/usr/bin/env bash

# copy file contents to index.js
function copyFileToIndex ()
{
  cat scratchJS/$1 >> scratchJS/index.js
}

# find all files in the scratchJS dir except for index.js
files=$(ls scratchJS | grep -v index.js)

# clear the index.js file
echo '' > scratchJS/index.js

# add the boilerplate comment to the top of index.js
echo "
// the master JS file that I use with Scratch.js. It works on all relevant pages.
// this should always be up to date and kept in sync with ScratchJS in Chrome.
// To build this file. run npm run build:scratch.
// It should be auto-generated and not edited manually.
" > scratchJS/index.js

# iterate through all the files
for i in "${files[@]}"
do
  copyFileToIndex "$i"
done

