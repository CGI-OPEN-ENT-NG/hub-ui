import type { createTheme } from "@mui/material/styles";

export type CreateThemeOptions = Parameters<typeof createTheme>[0];

declare module "@mui/material/styles" {
  interface SimplePaletteColorOptions {
    lighter?: string;
    light?: string;
    main: string;
    dark?: string;
    darker?: string;
    contrastText?: string;
  }

  interface PaletteColor {
    lighter?: string;
    light: string;
    main: string;
    dark: string;
    darker?: string;
    contrastText: string;
  }

  interface Color extends Partial<PaletteColor> {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
  }
}
