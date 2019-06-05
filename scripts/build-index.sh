#!/usr/bin/env bash

os=$(uname -s)

# clear the index.js file
echo '' > scratchJS/index.js

# add the boilerplate comment to the top of index.js
echo "
// the master JS file that I use with Scratch.js. It works on all relevant pages.
// this should always be up to date and kept in sync with ScratchJS in Chrome.
// To build this file. run npm run build:scratch.
// It should be auto-generated and not edited manually.
" > scratchJS/index.js

## add the contents of each page to the master index.js
cat scratchJS/chineseForUs.js >> scratchJS/index.js
echo '' >> scratchJS/index.js
cat scratchJS/gitlab.js >> scratchJS/index.js
echo '' >> scratchJS/index.js
cat scratchJS/sympli.js >> scratchJS/index.js
echo '' >> scratchJS/index.js
cat scratchJS/stackOverflow.js >> scratchJS/index.js
echo '' >> scratchJS/index.js

## copy contents to clipboard for macOS
if test $os == 'Darwin' ; then
  pbcopy < scratchJS/index.js
  echo 'Copied contents of index.js file to clipboard.'
fi

echo 'Finished building scratchJS/index.js.'

