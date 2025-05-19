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
  config,
});

export default theme;