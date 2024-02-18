import { TailwindTheme, getMuiTheme } from "../utils";

const tailwindTheme: TailwindTheme = {
  extend: {
    colors: {
      primary: "#c72ab5",
    },
  },
};

const muiTheme = getMuiTheme(tailwindTheme);

export { muiTheme as defaultTheme, tailwindTheme as exampleTailwindTheme };
