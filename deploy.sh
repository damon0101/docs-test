#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
npm install
# 生成静态文件
npm run docs:build

# 进入生成的文件夹
 cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
git config --global user.name 'samzktube'
git config --global user.email 'sam@zktube.io'
 git init
 git add -A
 git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
 git push -f git@github.com:samzktube/docs-test.git master:gh-pages

cd -
