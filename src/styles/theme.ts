// src/styles/theme.ts
export default {
  grid: {
    container: '200rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family: "'Poppins', sans-serif",
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem'
    }
  },
  typography: {
    heading1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '6.4rem', // 64px
      lineHeight: '8rem', // 80px
      letterSpacing: '-2%'
    },
    heading2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '4.8rem', // 48px
      lineHeight: '5.6rem', // 56px
      letterSpacing: '-2%'
    },
    heading3: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '3.2rem', // 32px
      lineHeight: '4rem', // 40px
      letterSpacing: '-2%'
    },
    heading4: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '2.4rem', // 24px
      lineHeight: '3.2rem', // 32px
      letterSpacing: '-1.5%'
    },
    heading5: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '2rem', // 20px
      lineHeight: '2.4rem', // 24px
      letterSpacing: '-1.5%'
    },
    heading6: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '1.6rem', // 16px
      lineHeight: '2.4rem', // 24px
      letterSpacing: '-1.5%'
    },
    bodyLarge: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '2rem', // 20px
      lineHeight: '3.2rem', // 32px
      letterSpacing: '0%'
    },
    body: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '1.6rem', // 16px
      lineHeight: '2.4rem', // 24px
      letterSpacing: '0%'
    },
    bodySmall: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '1.4rem', // 14px
      lineHeight: '2.4rem', // 24px
      letterSpacing: '0%'
    },
    bodyExtraSmall: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '1.2rem', // 12px
      lineHeight: '2.4rem', // 24px
      letterSpacing: '0%'
    },
    caption: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '1.4rem', // 14px
      lineHeight: '1.6rem', // 16px
      letterSpacing: '0%'
    },
    overline: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '1.4rem', // 14px
      lineHeight: '2.4rem', // 24px
      letterSpacing: '4%'
    },
    overlineSmall: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '1.2rem', // 12px
      lineHeight: '1.6rem', // 16px
      letterSpacing: '4%'
    },
    link: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '1.6rem', // 16px
      lineHeight: '2.4rem', // 24px
      letterSpacing: '2%'
    },
    linkSmall: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '1.4rem', // 14px
      lineHeight: '2.4rem', // 24px
      letterSpacing: '2%'
    },
    linkExtraSmall: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '1.2rem', // 12px
      lineHeight: '1.6rem', // 16px
      letterSpacing: '2%'
    }
  },
  colors: {
    // Primary Colors
    primary: {
      900: '#120F31',
      800: '#251E62',
      700: '#362C92',
      600: '#483BC3',
      500: '#5A4AF4',
      400: '#7B6EF6',
      300: '#9C92F8',
      200: '#BEB7FB',
      100: '#DEDBFD',
      50: '#EBE9FE'
    },
    // Success Colors
    success: {
      900: '#01291D',
      800: '#02523A',
      700: '#037C57',
      600: '#04A574',
      500: '#05CE91',
      400: '#37D8A7',
      300: '#69E2BD',
      200: '#9BEBD3',
      100: '#CDF5E9',
      50: '#E1F9F2'
    },
    // Secondary Colors
    secondary: {
      900: '#062032',
      800: '#0C4265',
      700: '#126297',
      600: '#1884CA',
      500: '#1EA5FC',
      400: '#4BB7FD',
      300: '#78C8FD',
      200: '#A5DBFE',
      100: '#D2ECFE',
      50: '#E4F4FF'
    },
    // Error Colors
    error: {
      900: '#331313',
      800: '#662727',
      700: '#993A3A',
      600: '#CC4E4E',
      500: '#FF6161',
      400: '#FF8181',
      300: '#FFA0A0',
      200: '#FFC0C0',
      100: '#FFDFDF',
      50: '#FFECEC'
    },
    // Tertiary Colors
    tertiary: {
      900: '#241633',
      800: '#492C66',
      700: '#6D4199',
      600: '#9257CC',
      500: '#B66DFF',
      400: '#C58AFF',
      300: '#D3A7FF',
      200: '#E2C5FF',
      100: '#F0E2FF',
      50: '#F6EDFF'
    },
    // Warning Colors
    warning: {
      900: '#33230F',
      800: '#66451D',
      700: '#99682C',
      600: '#CC8A3A',
      500: '#FFAD49',
      400: '#FFBD6D',
      300: '#FFCE92',
      200: '#FFDEB6',
      100: '#FFEFDB',
      50: '#FFF5E9'
    },
    // Grey Colors
    grey: {
      900: '#121829',
      800: '#20283E',
      700: '#323B54',
      600: '#475069',
      500: '#61697F',
      400: '#767E94',
      300: '#8E95A9',
      200: '#A8AEBF',
      100: '#C3C8D4',
      50: '#EBEEF5'
    },
    // Black Colors
    black: {
      100: '#000000',
      75: 'rgba(0, 0, 0, 0.75)',
      65: 'rgba(0, 0, 0, 0.65)',
      50: 'rgba(0, 0, 0, 0.5)',
      40: 'rgba(0, 0, 0, 0.4)',
      30: 'rgba(0, 0, 0, 0.3)',
      20: 'rgba(0, 0, 0, 0.2)',
      10: 'rgba(0, 0, 0, 0.1)'
    },
    // White Colors
    white: {
      100: '#FFFFFF',
      75: 'rgba(255, 255, 255, 0.75)',
      65: 'rgba(255, 255, 255, 0.65)',
      50: 'rgba(255, 255, 255, 0.5)',
      40: 'rgba(255, 255, 255, 0.4)',
      30: 'rgba(255, 255, 255, 0.3)',
      20: 'rgba(255, 255, 255, 0.2)',
      10: 'rgba(255, 255, 255, 0.1)'
    },
    // Background Colors
    background: '#120F31',
    backgroundSecondary: '#251E62',
    backgroundHover: '#362C92',
    // Text Colors
    text: '#FFFFFF',
    textSecondary: '#8E95A9',
    // Border Colors
    border: '#323B54',
    // Primary Hover
    primaryHover: '#483BC3'
  },
  spacings: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  media: {
    lteMedium: '(max-width: 768px)',
    lteLarge: '(max-width: 1024px)'
  }
} as const
