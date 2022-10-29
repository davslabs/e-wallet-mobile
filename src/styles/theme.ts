import { extendTheme } from 'native-base';

const theme = extendTheme({
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
      50: '#F7F4F3',
      100: '#EFEAE7',
      200: '#E7DFDA',
      300: '#DACFC7',
      400: '#D6CAC2',
      500: '#CECE0B6',
      600: '#C6B5A9',
      700: '#BEAB9D',
      800: '#B6A091',
      900: '#AE9685',
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
