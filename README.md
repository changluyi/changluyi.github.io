# 个人技术博客

这是一个基于Jekyll的个人技术博客，主要用于分享技术经验、学习心得和知识总结。

## 博客特点

- 简洁明了的设计
- 专注于技术内容的分享
- 支持Markdown格式编写文章
- 基于GitHub Pages托管，无需服务器成本

## 本地开发

如果你想在本地运行此博客，请按照以下步骤操作：

1. 确保你已安装Ruby和Bundler：
   ```bash
   ruby -v
   bundler -v
   ```

2. 克隆此仓库：
   ```bash
   git clone https://github.com/yourusername/yourblog.git
   cd yourblog
   ```

3. 安装依赖：
   ```bash
   bundle install
   ```

4. 启动本地服务器：
   ```bash
   bundle exec jekyll serve
   ```

5. 在浏览器中访问 `http://localhost:4000` 查看博客

## 写作新文章

在 `_posts` 目录中创建新的Markdown文件，文件名格式为：`YYYY-MM-DD-title.md`

文件开头需要包含以下格式的YAML头信息：

```yaml
---
layout: post
title: "文章标题"
date: YYYY-MM-DD HH:MM:SS +0800
categories: 分类1 分类2
tags: [标签1, 标签2]
---
```

## 部署到GitHub Pages

1. 创建一个GitHub仓库，命名为 `username.github.io`（将username替换为你的GitHub用户名）
2. 将此博客项目推送到该仓库：
   ```bash
   git remote set-url origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```
3. 在GitHub仓库设置中，启用GitHub Pages功能
4. 几分钟后，你的博客将可以通过 `https://username.github.io` 访问

## 自定义

你可以通过修改`_config.yml`文件来自定义博客的各种设置，包括标题、描述、社交媒体链接等。

## 许可

此博客内容采用[知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议](https://creativecommons.org/licenses/by-nc-sa/4.0/)进行许可。 