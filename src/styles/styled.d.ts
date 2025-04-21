import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    grid: {
      container: string
      gutter: string
    }
    border: {
      radius: string
    }
    font: {
      family: string
      light: number
      normal: number
      bold: number
      sizes: {
        xsmall: string
        small: string
        medium: string
        large: string
        xlarge: string
        xxlarge: string
      }
    }
    colors: {
      primary: string
      secondary: string
      mainBg: string
      cardBg: string
      lightBg: string
      white: string
      black: string
      lightGray: string
      gray: string
      darkGray: string
      textColor: string
      error: string
    }
    media: {
      lteMedium: string
    }
    spacings: {
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
      huge: string
      xhuge: string
    }
  }
}
