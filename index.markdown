---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: 首页
---

<!-- Hero 区域 -->
<section class="hero-section">
  <div class="hero-content">
    <h1 class="hero-title">欢迎来到我的技术博客</h1>
    <p class="hero-description">
      这是我的个人技术博客，主要分享编程技术、学习心得和知识总结。
      通过记录和分享，我希望能够不断提升自己，也希望这些内容对您有所帮助。
    </p>

    <div style="margin-top: 2rem;">
      <a href="#posts" class="btn btn-primary">开始探索</a>
      <a href="{{ '/about/' | relative_url }}" class="btn btn-secondary" style="margin-left: 1rem;">了解更多</a>
    </div>

    <!-- 分类卡片网格 -->
    <div class="category-grid">
      <a href="{{ '/categories/#tech' | relative_url }}" class="card category-card">
        <div class="card-icon">💻</div>
        <div class="card-title">技术文章</div>
        <div class="card-desc">编程技术与实践经验分享</div>
      </a>
      <a href="{{ '/categories/#thoughts' | relative_url }}" class="card category-card">
        <div class="card-icon">💡</div>
        <div class="card-title">心得体会</div>
        <div class="card-desc">学习成长与经验总结</div>
      </a>
    </div>
  </div>
</section>

<!-- 最新文章区域 -->
<hr class="section-divider" id="posts" />

<h2 class="section-title">最新文章</h2>
