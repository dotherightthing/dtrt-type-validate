#!/bin/bash

# File: ./scripts/dist.sh
#
# Note:
# chmod a+x = Change access permissions of this file, to 'e[x]ecutable' for '[a]ll users'
#
# Example:
# ---
# chmod a+x scripts/*.sh
# ---

# e: exit the script if any statement returns a non-true return value
# v: print shell input lines as they are read (including all comments!)
set -e

mjsImportStart="export default"
mjsImportDependencyStart="import stringUtils from '"
mjsImportDependencyEnd=".mjs';"
mjsFileComment=".mjs"

cjsImportStart="module.exports ="
cjsImportDependencyStart="const stringUtils = require('"
cjsImportDependencyEnd=".cjs');"
cjsFileComment=".cjs"

cd $INIT_CWD \
&& mkdir -p 'dist' \
&& cat ./src/dtrt-type-validate.mjs > dist/dtrt-type-validate.mjs \
&& cat ./src/dtrt-type-validate.mjs > dist/dtrt-type-validate.cjs \
&& sed -i '' "s/$mjsImportStart/${cjsImportStart}/g" dist/dtrt-type-validate.cjs \
&& sed -i '' "s/$mjsImportDependencyStart/${cjsImportDependencyStart}/g" dist/dtrt-type-validate.cjs \
&& sed -i '' "s/$mjsImportDependencyEnd/${cjsImportDependencyEnd}/g" dist/dtrt-type-validate.cjs \
&& sed -i '' "s/$mjsFileComment/${cjsFileComment}/g" dist/dtrt-type-validate.cjs
