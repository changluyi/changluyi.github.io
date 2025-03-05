#!/bin/bash

# 部署博客到GitHub Pages的脚本

# 确保脚本出错时停止执行
set -e

# 构建网站
echo "开始构建网站..."
bundle exec jekyll build

# 切换到_site目录
cd _site

# 初始化git仓库
echo "初始化Git仓库..."
git init
git add -A
git commit -m "部署更新 $(date '+%Y-%m-%d %H:%M:%S')"

# 推送到GitHub Pages
# 请将下面的URL替换为你的GitHub仓库URL
echo "推送到GitHub Pages..."
git push -f git@github.com:yourusername/yourusername.github.io.git main

cd ..
echo "部署完成！" 