import { DefaultTheme } from 'styled-components'

export interface PaletteType {
  primary: {
    light: string
    main: string
    hover: string
    dark: string
    contrastText: string
    shadow: string
  }
  secondary: {
    main: string
    hover: string
    dark: string
    contrastText: string
    shadow: string
  }
  error: {
    main: string
    hover: string
    dark: string
    contrastText: string
    shadow: string
  }
  text: {
    primary: string
    secondary: string
    disabled: string
  }
  border: {
    normal: string
    disabled: string
    focused: string
    fail: string
  }
  actions: {
    success: string
    warning: string
    fail: string
    disabled: string
    info: string
  }

  other: {
    shadow: string
    bgColor: string
    border: string
    mainBg: string
    white: string
    hover: string
    gray: string
    black: string
    gray01: string
    blue: string
    error: string
    green: string
    red: string
    yellow: string
    customBlack: string
  }
}

export interface CustomThemeType extends DefaultTheme {
  color: PaletteType
  darkMode: boolean
}

export interface FontType {
  h1: string
  h2: string
  title1: string
  title2: string
  body: string
  subtitle: string
}
