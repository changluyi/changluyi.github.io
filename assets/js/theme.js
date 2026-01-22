/**
 * P0-3 & P0-4 修复: 健壮的主题管理器
 * - localStorage错误处理(私密模式兼容)
 * - 同步初始化避免FOUC
 * - 简化代码(从65行减少到25行)
 */

const STORAGE_KEY = 'blog-theme';

/**
 * 安全的localStorage访问
 * P0-3修复: try-catch保护,私密浏览器模式兼容
 */
function getTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    console.warn('localStorage不可用，使用系统偏好:', e.message);
    return null;
  }
}

/**
 * 安全的主题保存
 */
function setTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (e) {
    console.warn('无法保存主题偏好:', e.message);
  }
}

/**
 * P0-4修复: 同步初始化避免FOUC
 * 必须在脚本加载时立即执行,不能等待DOMContentLoaded
 */
function initTheme() {
  const saved = getTheme();
  const system = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // 优先使用保存的偏好,否则跟随系统
  const theme = saved || (system ? 'dark' : 'light');

  // 立即应用主题,避免FOUC
  document.documentElement.setAttribute('data-theme', theme);

  console.log('主题已初始化:', theme, '(来源:', saved ? '用户偏好' : '系统偏好', ')');
}

/**
 * 切换主题(全局函数供HTML调用)
 */
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';

  // 立即应用新主题
  document.documentElement.setAttribute('data-theme', newTheme);

  // 尝试保存偏好
  setTheme(newTheme);

  console.log('主题已切换:', newTheme);
}

// ✅ P0-4关键: 同步执行初始化,不等待DOM加载
initTheme();

// 监听系统偏好变化(仅当用户未手动设置时)
window.matchMedia('(prefers-color-scheme: dark')
  .addEventListener('change', (e) => {
    if (!getTheme()) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      console.log('系统偏好已变化:', newTheme);
    }
  });
