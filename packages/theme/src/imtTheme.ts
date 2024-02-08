import { TailwindTheme, getMuiTheme } from "./utils";

const tailwindTheme: TailwindTheme = {
  extend: {
    colors: {
      primary: "#ffb600",
    },
  },
};

const muiTheme = getMuiTheme(tailwindTheme);

export { muiTheme as imtMuiTheme, tailwindTheme as imtTailwindTheme };
