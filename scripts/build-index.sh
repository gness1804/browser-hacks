#!/usr/bin/env bash

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

