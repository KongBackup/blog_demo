#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf src/.vuepress/dist

# 生成静态文件
npm run build

# 进入生成的文件夹
cd src/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git remote add github git@github.com:mojiaying/mojiaying.github.io.git
# git push --set-upstream -f github master
# git push -f git@github.com:mojiaying/mojiaying.github.io.git master


# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -