# 2026 现代化 UI 设计系统 - 使用指南

本文档提供你的技术博客新 UI 设计系统的完整使用说明。

## 📋 目录

1. [设计概览](#设计概览)
2. [颜色系统](#颜色系统)
3. [组件使用](#组件使用)
4. [布局模式](#布局模式)
5. [响应式断点](#响应式断点)
6. [自定义样式](#自定义样式)

---

## 🎨 设计概览

### 设计理念

- **现代渐变美学**：采用 2026 年流行的对角线渐变 (135deg)
- **微交互动画**：流畅的过渡效果提升用户体验
- **卡片式设计**：清晰的信息层次和视觉分组
- **性能优先**：CSS Containment 和选择性过渡优化
- **可访问性**：符合 WCAG 2.1 AA 标准

### 核心特性

✨ 渐变色彩系统 (4 种渐变)
🎯 15 个核心设计令牌
📱 完全响应式布局
🌓 完整的深色模式支持
♿ 可访问性优化
⚡ 性能优化 (CSS Containment)

---

## 🌈 颜色系统

### 渐变定义

```css
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
--gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
--gradient-success: linear-gradient(135deg, #10b981 0%, #059669 100%);
```

### 应用场景

| 渐变 | 用途 | 示例 |
|------|------|------|
| `--gradient-primary` | 主品牌色、按钮、链接 | Hero 背景、主要按钮 |
| `--gradient-secondary` | 强调色、特殊标记 | 通知徽章、特色内容 |
| `--gradient-accent` | 辅助色、装饰元素 | 卡片装饰、图标背景 |
| `--gradient-success` | 成功状态、确认操作 | 表单成功提示 |

### 实色定义

```css
--color-primary: #667eea;        /* 主色 */
--color-primary-hover: #764ba2;  /* 主色悬停 */
--color-accent: #4facfe;         /* 强调色 */
--color-success: #10b981;        /* 成功色 */
```

---

## 🧩 组件使用

### 1. Hero 区域

**结构：**
```html
<section class="hero-section">
  <div class="hero-content">
    <h1 class="hero-title">标题</h1>
    <p class="hero-description">描述文本</p>

    <!-- 按钮组 -->
    <div style="margin-top: 2rem;">
      <a href="#" class="btn btn-primary">主按钮</a>
      <a href="#" class="btn btn-secondary">次要按钮</a>
    </div>

    <!-- 分类卡片 -->
    <div class="category-grid">
      <a href="#" class="card category-card">...</a>
      <a href="#" class="card category-card">...</a>
    </div>
  </div>
</section>
```

**样式特点：**
- 全宽渐变背景
- 标题渐变文字效果
- 背景动画 (8s 循环)
- 内容淡入动画

### 2. 按钮

#### 主按钮 (btn-primary)
```html
<a href="#" class="btn btn-primary">开始探索</a>
<button class="btn btn-primary">提交</button>
```
- 白色渐变背景
- 主色文字
- 悬停：上移 2px + 缩放 1.05

#### 次要按钮 (btn-secondary)
```html
<a href="#" class="btn btn-secondary">了解更多</a>
```
- 半透明背景
- 毛玻璃效果 (backdrop-filter)
- 悬停：背景变深

### 3. 卡片

#### 通用卡片
```html
<div class="card">
  <h3>卡片标题</h3>
  <p>卡片内容</p>
</div>
```

#### Hero 区域分类卡片
```html
<a href="#" class="card category-card">
  <div class="card-icon">💻</div>
  <div class="card-title">技术文章</div>
  <div class="card-desc">编程技术与实践</div>
</a>
```
- 半透明白色背景
- 顶部装饰条 (悬停显示)
- 悬停：上移 8px + 缩放 1.02

#### 文章卡片
```html
<a href="#" class="post-card">
  <h2 class="post-title">文章标题</h2>
  <p class="post-excerpt">文章摘要...</p>
  <div class="post-meta">
    <span class="post-tag">标签</span>
    <span class="post-date">📅 2025-01-22</span>
  </div>
</a>
```
- 顶部渐变条 (悬停展开)
- 摘要限制 3 行
- 悬停：标题变为主色

### 4. 导航栏

```html
<header class="site-header">
  <nav class="site-nav">
    <a href="/">首页</a>
    <a href="/tech/">技术文章</a>
    <a href="/thoughts/">心得体会</a>
  </nav>
</header>
```

**特点：**
- 固定顶部 (sticky)
- 毛玻璃背景
- 悬停：浅色背景 + 主色文字

### 5. 区域标题

```html
<h2 class="section-title">最新文章</h2>
```

**效果：**
- 底部渐变装饰线 (60px 宽)
- 响应式字体大小

---

## 📐 布局模式

### 卡片网格

#### 自适应网格
```html
<div class="category-grid">
  <!-- 自动适应，最小 280px -->
</div>
```

#### 两列网格 (大屏)
```css
@media (min-width: 1200px) {
  .post-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### 文章列表

```html
<ul class="post-list">
  <li><a href="#" class="post-card">...</a></li>
  <li><a href="#" class="post-card">...</a></li>
</ul>
```

---

## 📱 响应式断点

| 断点 | 宽度 | 布局调整 |
|------|------|----------|
| 移动 | < 768px | 单列，全宽按钮 |
| 平板 | 768px - 1023px | 2 列网格 |
| 桌面 | ≥ 1024px | 3 列网格 |
| 大屏 | ≥ 1200px | 文章卡片 2 列 |

### 移动端优化

```css
@media (max-width: 767px) {
  /* 按钮全宽 */
  .btn { width: 100%; margin-bottom: 1rem; }

  /* 单列布局 */
  .category-grid { grid-template-columns: 1fr; }

  /* 减小间距 */
  --spacing-lg: 1.5rem;
}
```

---

## 🎯 自定义样式

### 修改主题色

在 `assets/css/main.scss` 中修改 CSS 变量：

```scss
:root {
  // 修改主渐变
  --gradient-primary: linear-gradient(135deg, #你的颜色1 0%, #你的颜色2 100%);

  // 修改主色
  --color-primary: #你的主色;
  --color-primary-hover: #你的悬停色;
}
```

### 自定义卡片样式

```scss
.post-card {
  // 修改圆角
  border-radius: 16px;

  // 修改阴影
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.15);

  // 修改悬停效果
  &:hover {
    transform: translateY(-12px);
  }
}
```

### 添加自定义动画

```scss
@keyframes yourAnimation {
  from { /* 初始状态 */ }
  to { /* 结束状态 */ }
}

.your-element {
  animation: yourAnimation 0.6s ease-out;
}
```

---

## 🔧 实用技巧

### 1. 创建渐变文字

```html
<h1 style="background: var(--gradient-primary);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;">
  渐变标题
</h1>
```

### 2. 添加毛玻璃效果

```css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### 3. 创建装饰条

```css
.decorative-bar {
  height: 4px;
  background: var(--gradient-primary);
  border-radius: 2px;
}
```

### 4. 悬停动画组合

```css
.hover-effect {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-effect:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--shadow-lg);
}
```

---

## ⚡ 性能优化

### CSS Containment

已应用 containment 的元素：
- `article`, `.page-content`
- `.site-header`
- `.card`, `.post-card`

### 选择性过渡

只对必要元素应用过渡：
```scss
.theme-transition {
  transition: background-color 0.3s ease,
              color 0.3s ease,
              border-color 0.3s ease;
}
```

### 尊重用户偏好

```scss
@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; }
}
```

---

## ♿ 可访问性

### 键盘导航

- 所有交互元素可键盘访问
- 焦点指示器：3px 实线轮廓
- 最小触摸目标：48x48px

### 对比度

- 正文文本：≥ 4.5:1 (WCAG AA)
- 大号文本：≥ 3:1
- 非文本元素：≥ 3:1

### 跳过导航

```html
<a href="#main-content" class="skip-link">跳到主内容</a>
```

---

## 📦 文件结构

```
blog/
├── assets/
│   └── css/
│       └── main.scss          # 主样式文件
├── _includes/
│   └── head.html              # 头部模板
├── _layouts/
│   ├── default.html           # 默认布局
│   └── post.html              # 文章布局
├── index.markdown             # 首页
└── _posts/                    # 文章目录
```

---

## 🚀 快速开始

### 1. 应用 Hero 区域

在 `index.markdown` 中添加：

```html
<section class="hero-section">
  <div class="hero-content">
    <h1 class="hero-title">你的标题</h1>
    <p class="hero-description">你的描述</p>
    <div class="category-grid">
      <a href="#" class="card category-card">...</a>
    </div>
  </div>
</section>
```

### 2. 创建文章卡片

在文章列表中使用：

```html
<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}" class="post-card">
        <h2 class="post-title">{{ post.title }}</h2>
        <p class="post-excerpt">{{ post.excerpt }}</p>
        <div class="post-meta">
          <span class="post-tag">{{ post.categories[0] }}</span>
          <span class="post-date">📅 {{ post.date | date: "%Y-%m-%d" }}</span>
        </div>
      </a>
    </li>
  {% endfor %}
</ul>
```

### 3. 自定义颜色

在 `main.scss` 顶部修改：

```scss
:root {
  --gradient-primary: linear-gradient(135deg, #你的颜色1 0%, #你的颜色2 100%);
}
```

---

## 📚 参考资源

- [Jekyll 官方文档](https://jekyllrb.com/docs/)
- [CSS Grid 布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)
- [CSS 渐变](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 📝 更新日志

### v2.0.0 (2025-01-22)

- ✨ 引入 2026 现代化设计系统
- 🎨 添加 4 种渐变色系
- 🧩 新增卡片组件系统
- 📱 完全响应式布局
- ⚡ 性能优化 (CSS Containment)
- ♿ 可访问性增强 (WCAG 2.1 AA)

---

## 💡 设计决策

### 为什么选择渐变？

1. **视觉吸引力**：2026 年设计趋势
2. **品牌识别**：独特的配色方案
3. **灵活性**：适用于多种元素

### 为什么使用 CSS 变量？

1. **可维护性**：集中管理设计令牌
2. **主题切换**：深色模式实现
3. **性能**：浏览器原生支持

### 为什么要微交互？

1. **用户体验**：流畅的反馈
2. **专业感**：精心的细节处理
3. **引导性**：指示可交互元素

---

**设计你的技术博客，展示你的专业！** 🚀
