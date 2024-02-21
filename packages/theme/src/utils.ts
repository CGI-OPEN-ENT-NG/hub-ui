import {
  createTheme,
  type Theme,
  type ThemeOptions,
} from "@mui/material/styles";
import merge from "deepmerge";

export interface TailwindTheme {
  extend: {
    colors: {
      primary: {
        darker: string;
        dark: string;
        regular: string;
        light: string;
        lighter: string;
      };
      secondary: {
        darker: string;
        dark: string;
        regular: string;
        light: string;
        lighter: string;
      };
      grey: {
        darker: string;
        dark: string;
        regular: string;
        light: string;
        lighter: string;
      };
      red: {
        dark: string;
        regular: string;
        light: string;
      };
      purple: {
        dark: string;
        regular: string;
        light: string;
      };
      blue: {
        dark: string;
        regular: string;
        light: string;
      };
      green: {
        dark: string;
        regular: string;
        light: string;
      };
      yellow: {
        dark: string;
        regular: string;
        light: string;
      };
    };
  };
}

export const muiThemeAdapter = (
  theme: TailwindTheme,
  options: Partial<ThemeOptions> = {}
): Theme =>
  createTheme(
    merge(
      {
        palette: {
          primary: {
            main: theme.extend.colors.primary.regular,
            light: theme.extend.colors.primary.light,
            dark: theme.extend.colors.primary.dark,
          },
          secondary: {
            main: theme.extend.colors.secondary.regular,
            light: theme.extend.colors.secondary.light,
            dark: theme.extend.colors.secondary.dark,
          },
          grey: {
            main: theme.extend.colors.grey.regular,
            light: theme.extend.colors.grey.light,
            dark: theme.extend.colors.grey.dark,
          },
          red: {
            main: theme.extend.colors.red.regular,
            light: theme.extend.colors.red.light,
            dark: theme.extend.colors.red.dark,
          },
          purple: {
            main: theme.extend.colors.purple.regular,
            light: theme.extend.colors.purple.light,
            dark: theme.extend.colors.purple.dark,
          },
          blue: {
            main: theme.extend.colors.blue.regular,
            light: theme.extend.colors.blue.light,
            dark: theme.extend.colors.blue.dark,
          },
          green: {
            main: theme.extend.colors.green.regular,
            light: theme.extend.colors.green.light,
            dark: theme.extend.colors.green.dark,
          },
          yellow: {
            main: theme.extend.colors.yellow.regular,
            light: theme.extend.colors.yellow.light,
            dark: theme.extend.colors.yellow.dark,
          },
        },
      },
      options
    )
  );
