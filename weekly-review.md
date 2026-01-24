---
layout: page
title: 周报review
permalink: /weekly-review/
---

<div class="category-page">
  <header class="category-header">
    <h2>周报review</h2>
    <p>记录每周目标、进展、问题与改进点。</p>
  </header>

  {% assign posts = site.categories["周报review"] %}
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
  <p class="category-empty">暂无周报，先从本周开始。</p>
  {% endif %}
</div>
