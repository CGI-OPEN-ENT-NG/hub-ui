import "react";
import { TailwindTheme, muiThemeAdapter } from "../utils";

const tailwindTheme: TailwindTheme = {
  extend: {
    colors: {
      primary: {
        darker: "#004754",
        dark: "#18819D",
        regular: "#01BBD4",
        light: "#D5F7FD",
        lighter: "#F8FCFC",
      },
      secondary: {
        darker: "#000919",
        dark: "#061126",
        regular: "#14223C",
        light: "#4F6EA6",
        lighter: "#A8C1F0",
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
  },
};

const muiTheme = muiThemeAdapter(tailwindTheme, {
  palette: {
    text: {
      primary: tailwindTheme.extend.colors.secondary.regular,
    },
    background: {
      default: tailwindTheme.extend.colors.primary.light,
    },
  },
  typography: {
    fontFamily: "Helvetica",
    h1: {
      fontSize: "1.5rem",
    },
    h2: {
      fontSize: "1.25rem",
    },
    h3: {
      fontSize: "1rem",
    },
  },
});

export { muiTheme as imtMuiTheme, tailwindTheme as imtTailwindTheme };
