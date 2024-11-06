import { getMuiTheme } from "../mui";
import { getTailwindThemeConfig } from "../tailwind";
import { Theme } from "../types";

const theme: Theme = {
  palette: {
    primary: {
      darker: "#200A58",
      dark: "#5236AB",
      regular: "#6E3FED",
      light: "#BFB5F9",
      lighter: "#E6E3F3",
    },
    secondary: {
      darker: "#650A21",
      dark: "#991F3D",
      regular: "#E31937",
      light: "#FFCDD2",
      lighter: "#FFF2F3",
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
  muiTheme as defaultMuiTheme,
  tailwindThemeConfig as defaultTailwindThemeConfig,
  theme as defaultTheme,
};
