import { frFR } from "@mui/material/locale";
import {
  createTheme,
  type Theme,
  type ThemeOptions,
} from "@mui/material/styles";
import { frFR as dateFrFR } from "@mui/x-date-pickers/locales";
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
  tailwindTheme: TailwindTheme,
  options: Partial<ThemeOptions> = {}
): Theme => {
  const theme = createTheme(
    merge(
      {
        palette: {
          primary: {
            main: tailwindTheme.extend.colors.primary.regular,
            light: tailwindTheme.extend.colors.primary.light,
            dark: tailwindTheme.extend.colors.primary.dark,
          },
          secondary: {
            main: tailwindTheme.extend.colors.secondary.regular,
            light: tailwindTheme.extend.colors.secondary.light,
            dark: tailwindTheme.extend.colors.secondary.dark,
          },
          grey: {
            main: tailwindTheme.extend.colors.grey.regular,
            light: tailwindTheme.extend.colors.grey.light,
            dark: tailwindTheme.extend.colors.grey.dark,
          },
          red: {
            main: tailwindTheme.extend.colors.red.regular,
            light: tailwindTheme.extend.colors.red.light,
            dark: tailwindTheme.extend.colors.red.dark,
          },
          purple: {
            main: tailwindTheme.extend.colors.purple.regular,
            light: tailwindTheme.extend.colors.purple.light,
            dark: tailwindTheme.extend.colors.purple.dark,
          },
          blue: {
            main: tailwindTheme.extend.colors.blue.regular,
            light: tailwindTheme.extend.colors.blue.light,
            dark: tailwindTheme.extend.colors.blue.dark,
          },
          green: {
            main: tailwindTheme.extend.colors.green.regular,
            light: tailwindTheme.extend.colors.green.light,
            dark: tailwindTheme.extend.colors.green.dark,
          },
          yellow: {
            main: tailwindTheme.extend.colors.yellow.regular,
            light: tailwindTheme.extend.colors.yellow.light,
            dark: tailwindTheme.extend.colors.yellow.dark,
          },
          error: {
            main: tailwindTheme.extend.colors.red.regular,
            light: tailwindTheme.extend.colors.red.light,
            dark: tailwindTheme.extend.colors.red.dark,
          },
          warning: {
            main: tailwindTheme.extend.colors.yellow.regular,
            light: tailwindTheme.extend.colors.yellow.light,
            dark: tailwindTheme.extend.colors.yellow.dark,
          },
          info: {
            main: tailwindTheme.extend.colors.blue.regular,
            light: tailwindTheme.extend.colors.blue.light,
            dark: tailwindTheme.extend.colors.blue.dark,
          },
          success: {
            main: tailwindTheme.extend.colors.green.regular,
            light: tailwindTheme.extend.colors.green.light,
            dark: tailwindTheme.extend.colors.green.dark,
          },
        },
        frFR,
        dateFrFR,
      },
      options
    )
  );

  return createTheme(theme, {
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: theme.palette.secondary.main,
            "&:hover": {
              color: theme.palette.primary.main,
            },
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontSize: "1rem",
            color: theme.palette.secondary.main,
            "&.Mui-selected": {
              color: theme.palette.secondary.main,
              fontWeight: 600,
            },
          },
        },
      },
    },
  });
};
