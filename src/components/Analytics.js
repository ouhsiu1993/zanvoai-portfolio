import React, { useEffect } from 'react';

// 定義全局 window.gtag 類型，避免 TypeScript 錯誤
const Analytics = () => {
  useEffect(() => {
    // 在組件載入時發送頁面瀏覽事件
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, []);

  return null; // 這是一個非視覺性組件，不渲染任何 UI
};

// 添加自定義事件追蹤函數
export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  } else {
    console.log('GA4 尚未初始化或在開發環境中');
  }
};

export default Analytics;