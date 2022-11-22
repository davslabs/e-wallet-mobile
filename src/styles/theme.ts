import { extendTheme } from 'native-base';

const theme = extendTheme({
  fontConfig: {
    QuickSand: {
      100: {
        normal: 'QuickSand-Light',
      },
      200: {
        normal: 'QuickSand-Light',
      },
      300: {
        normal: 'QuickSand-Light',
      },
      400: {
        normal: 'QuickSand',
      },
      500: {
        normal: 'QuickSand-Medium',
      },
      600: {
        normal: 'QuickSand-Medium',
      },
      700: {
        normal: 'QuickSand-Bold',
      },
      800: {
        normal: 'QuickSand-Bold',
      },
      900: {
        normal: 'QuickSand-Bold',
      },
    },
  },
  fonts: {
    heading: 'QuickSand',
    body: 'QuickSand',
    mono: 'QuickSand',
  },
  colors: {
    primary: {
      50: '#FCF4EE',
      100: '#F9E8DC',
      200: '#F6DDCB',
      300: '#F3D1B9',
      400: '#F0C6A8',
      500: '#EDBA96',
      600: '#EAAF85',
      700: '#E59D68',
      800: '#E49862',
      900: '#E18D51',
    },
    secondary: {
      '50': '#100ffff',
      '100': '#d8f8ff',
      '200': '#b2f0fd',
      '300': '#8fe6f9',
      '400': '#6bddf7',
      '500': '#58d4f0',
      '600': '#48cbe8',
      '700': '#3ac1df',
      '800': '#2eb6d4',
      '900': '#2fa2bb',
    },
    tertiary: {
      50: '#F7F5F2',
      100: '#EFECE6',
      200: '#E8E2D9',
      300: '#E0D8CC',
      400: '#D8CEC0',
      500: '#D0C5B3',
      600: '#C9BBA6',
      700: '#C1B19A',
      800: '#B9A88D',
      900: '#B19E81',
    },
  },
});

export default theme;
