import { experimental_extendTheme } from "@mui/material/styles";

export interface TailwindTheme {
  extend: {
    colors: {
      primary: string;
    };
  };
}

export const getMuiTheme = (theme: TailwindTheme) =>
  experimental_extendTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: theme.extend.colors.primary,
          },
        },
      },
    },
  });
