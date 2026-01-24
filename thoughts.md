---
layout: page
title: 生活杂谈
permalink: /life/
---

<div class="category-page">
  <header class="category-header">
    <h2>生活杂谈</h2>
    <p>记录日常的观察与随手思考，保持对生活的敏感度。</p>
  </header>

  {% assign posts = site.categories["生活杂谈"] %}
  {% if posts and posts.size > 0 %}
  <div class="category-list">
    {% for post in posts %}
    <div class="category-item">
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
  {% else %}
  <p class="category-empty">暂无文章，先从最新文章开始吧。</p>
  {% endif %}
</div>
