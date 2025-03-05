---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: 首页
---

<div class="home-intro">
  <h2>欢迎来到我的技术博客</h2>
  
  <p>
    这是我的个人技术博客，主要分享编程技术、学习心得和知识总结。
    通过记录和分享，我希望能够不断提升自己，也希望这些内容对您有所帮助。
  </p>
  
  <div class="category-nav">
    <h3>博客分类</h3>
    <ul class="category-list">
      <li>
        <a href="{{ '/tech/' | relative_url }}" class="category-link tech">
          <span class="category-name">技术文章</span>
          <span class="category-desc">编程技术与实践</span>
        </a>
      </li>
      <li>
        <a href="{{ '/thoughts/' | relative_url }}" class="category-link thoughts">
          <span class="category-name">心得体会</span>
          <span class="category-desc">学习与成长经验</span>
        </a>
      </li>
    </ul>
  </div>
</div>

<hr class="section-divider" />

<h2 class="recent-posts-heading">最新文章</h2>

<style>
  .home-intro {
    margin-bottom: 40px;
  }
  
  .home-intro h2 {
    margin-bottom: 20px;
    color: #2a7ae2;
  }
  
  .home-intro p {
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 30px;
  }
  
  .category-nav {
    margin: 30px 0;
  }
  
  .category-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .category-link {
    display: block;
    padding: 15px 20px;
    background-color: #f8f9fa;
    border-radius: 5px;
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease;
    min-width: 200px;
    border-left: 5px solid #2a7ae2;
  }
  
  .category-link:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .category-link.tech {
    border-color: #2a7ae2;
  }
  
  .category-link.thoughts {
    border-color: #28a745;
  }
  
  .category-name {
    display: block;
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 5px;
  }
  
  .category-desc {
    font-size: 0.9em;
    color: #666;
  }
  
  .section-divider {
    margin: 40px 0;
    border: 0;
    height: 1px;
    background-color: #eee;
  }
  
  .recent-posts-heading {
    margin-bottom: 20px;
    font-size: 1.8em;
  }
</style>
