import { getMuiTheme } from "../mui";
import { getTailwindThemeConfig } from "../tailwind";
import { Theme } from "../types";

const theme: Theme = {
  palette: {
    primary: {
      darker: "#9E4800",
      dark: "#DA6A0B",
      regular: "#FF8D2E",
      light: "#FFCBA0",
      lighter: "#FFEFE3",
    },
    secondary: {
      darker: "#9C0016",
      dark: "#C6253B",
      regular: "#E20037",
      light: "#FFADB9",
      lighter: "#FFECEE",
    },
    grey: {
      darker: "#383D3E",
      dark: "#6D797A",
      regular: "#D9E1E2",
      light: "#F8F9F9",
      lighter: "#FCFCFC",
    },
    red: {
      dark: "#9B001B",
      regular: "#FF002D",
      light: "#FFD9E0",
    },
    purple: {
      dark: "#350075",
      regular: "#6900E7",
      light: "#EEE0FF",
    },
    blue: {
      dark: "#005887",
      regular: "#00A3FF",
      light: "#D2EFFF",
    },
    green: {
      dark: "#228665",
      regular: "#67DFB5",
      light: "#CAFAE9",
    },
    yellow: {
      dark: "#96710F",
      regular: "#FFC900",
      light: "#FFF7DA",
    },
  },
};

const muiTheme = getMuiTheme(theme);

const tailwindThemeConfig = getTailwindThemeConfig(theme);

export {
  muiTheme as crnaMuiTheme,
  tailwindThemeConfig as crnaTailwindThemeConfig,
  theme as crnaTheme,
};
