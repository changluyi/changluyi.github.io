---
layout: page
title: 技术文章
permalink: /tech/
---

<div class="tech-articles">
  <h2>所有技术文章</h2>
  
  <p>这里汇集了我所有关于技术的文章，包括编程语言、开发工具、最佳实践和项目经验等。</p>
  
  <div class="article-list">
    {% for post in site.categories["技术"] %}
    <div class="article-item">
      <h3>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      <a href="{{ post.url | relative_url }}" class="read-more">阅读全文 &raquo;</a>
      {% if post.tags.size > 0 %}
      <div class="post-tags">
        <span>标签:</span>
        {% for tag in post.tags %}
        <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
    </div>
    {% endfor %}
  </div>
</div>

<style>
  .article-item {
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  
  .post-date {
    color: #828282;
    font-size: 0.9em;
  }
  
  .post-tags {
    margin-top: 10px;
  }
  
  .tag {
    display: inline-block;
    background-color: #f1f1f1;
    padding: 2px 8px;
    margin-right: 5px;
    border-radius: 3px;
    font-size: 0.8em;
  }
  
  .read-more {
    display: inline-block;
    margin-top: 8px;
    font-weight: bold;
  }
</style> 