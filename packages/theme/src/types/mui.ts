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
}
