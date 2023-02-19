set -x
find . -name "*.html" -print0 | xargs -0 sed -i 's#https://storage\.googleapis\.com/cm-website-assets#assets#g'

