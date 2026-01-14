@echo off
call npm run build
cd dist
git init
git add -A
git commit -m "Deploy"
git push -f https://github.com/EmmanuelSeketi/Zed420Cars.git master:gh-pages
cd ..