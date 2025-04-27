import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    grid: {
      container: string;
      gutter: string;
    };
    border: {
      radius: string;
    };
    font: {
      family: string;
      light: number;
      normal: number;
      bold: number;
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
      };
    };
    colors: {
      primary: {
        900: string;
        800: string;
        700: string;
        600: string;
        500: string;
        400: string;
        300: string;
        200: string;
        100: string;
        50: string;
      };
      success: {
        900: string;
        800: string;
        700: string;
        600: string;
        500: string;
        400: string;
        300: string;
        200: string;
        100: string;
        50: string;
      };
      secondary: {
        900: string;
        800: string;
        700: string;
        600: string;
        500: string;
        400: string;
        300: string;
        200: string;
        100: string;
        50: string;
      };
      error: {
        900: string;
        800: string;
        700: string;
        600: string;
        500: string;
        400: string;
        300: string;
        200: string;
        100: string;
        50: string;
      };
      tertiary: {
        900: string;
        800: string;
        700: string;
        600: string;
        500: string;
        400: string;
        300: string;
        200: string;
        100: string;
        50: string;
      };
      warning: {
        900: string;
        800: string;
        700: string;
        600: string;
        500: string;
        400: string;
        300: string;
        200: string;
        100: string;
        50: string;
      };
      grey: {
        900: string;
        800: string;
        700: string;
        600: string;
        500: string;
        400: string;
        300: string;
        200: string;
        100: string;
        50: string;
      };
      black: {
        100: string;
        75: string;
        65: string;
        50: string;
        40: string;
        30: string;
        20: string;
        10: string;
      };
      white: {
        100: string;
        75: string;
        65: string;
        50: string;
        40: string;
        30: string;
        20: string;
        10: string;
      };
    };
    spacings: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
      xhuge: string;
    };
    layers: {
      base: number;
      menu: number;
      overlay: number;
      modal: number;
      alwaysOnTop: number;
    };
    media: {
      lteMedium: string;
    };
  }
}
