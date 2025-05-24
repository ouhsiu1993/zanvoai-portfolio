import { extendTheme } from '@chakra-ui/react';

// 色彩模式配置
const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  colors: {
    // 護眼配色方案
    brand: {
      50: '#f8fafc',   // 替代 gray.50 - 更溫和的背景
      100: '#f1f5f9',  // 卡片背景 - 不刺眼的白
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    blue: {
      50: '#e6f2ff',
      100: '#bddeff',
      200: '#90c8ff',
      300: '#64b0ff',
      400: '#4299ff',
      500: '#3182ce',
      600: '#2a69ac',
      700: '#1e4e8c',
      800: '#153e75',
      900: '#1a365d',
    },
    purple: {
      50: '#f5e9ff',
      100: '#dac1fc',
      200: '#c39af7',
      300: '#ac71f2',
      400: '#9649ed',
      500: '#8a2be2',
      600: '#7021c5',
      700: '#5c189d',
      800: '#48107e',
      900: '#38065e',
    }
  },
  // 全域樣式覆蓋
  styles: {
    global: (props) => ({
      'html, body': {
        backgroundColor: props.colorMode === 'light' ? 'brand.50' : 'gray.900',
        color: props.colorMode === 'light' ? 'gray.800' : 'gray.100',
      },
    }),
  },
  config,
});

export default theme;