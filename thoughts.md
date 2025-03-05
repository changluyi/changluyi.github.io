---
layout: page
title: 心得体会
permalink: /thoughts/
---

<div class="thoughts-articles">
  <h2>个人心得与体会</h2>
  
  <p>这里记录了我在学习和实践过程中的思考、体会和经验总结，分享我的成长历程和认知变化。</p>
  
  <div class="article-list">
    {% for post in site.categories["心得"] %}
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