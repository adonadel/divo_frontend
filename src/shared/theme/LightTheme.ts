
// src/shared/theme/LightTheme.js

import { DefaultTheme } from 'react-native-paper';

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#CC5803',
    accent: '#03dac4',
    background: '#ffffff',
    surface: '#ffffff',
    text: '#000000',
    error: '#B00020',
    disabled: '#f0f0f0',
    placeholder: '#a1a1a1',
    backdrop: '#f1f1f1',
    notification: '#f50057',
  },
};


// export const LightTheme = {
//   dark: false,
//   colors: {
//     primary: "#CC5803",
//     background: "rgb(242, 242, 242)",
//     card: "rgb(255, 255, 255)",
//     text: "rgb(28, 28, 30)",
//     border: "rgb(199, 199, 204)",
//     notification: "rgb(255, 69, 58)",
//     disabled: "rgb(128, 128, 128)",
//   },
//   roundness: 8,
// };
