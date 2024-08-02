import { ThemeProvider } from "styled-components";
import commonLightPalette from "./lightPalette";
import commonDarkPalette from "./darkPalette";
import { CustomThemeType } from "@/common/types";

interface ThemeProvideProps {
  /**
   * Children elements to be wrapped by the ThemeProvider
   */
  children: React.ReactNode;
  /**
   * Custom dark palette
   */
  darkPalette?: typeof commonDarkPalette;
  /**
   * Custom light palette
   */
  lightPalette?: typeof commonLightPalette;
  /**
   * Boolean indicating whether dark mode is enabled
   */
  isDarkMode?: boolean;
}

export default function MainTheme({
  children,
  darkPalette = commonDarkPalette,
  lightPalette = commonLightPalette,
  isDarkMode = false,
}: Readonly<ThemeProvideProps>) {
  const isDarkTheme = isDarkMode;

  const LightTheme: CustomThemeType = {
    color: lightPalette || commonLightPalette,
    darkMode: isDarkTheme,
  };

  const DarkTheme: CustomThemeType = {
    color: darkPalette || commonDarkPalette,
    darkMode: isDarkTheme,
  };

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
      {children}
    </ThemeProvider>
  );
}
