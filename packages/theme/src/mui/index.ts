import { frFR } from "@mui/material/locale";
import {
  createTheme,
  CssVarsThemeOptions,
  Theme as MuiTheme,
} from "@mui/material/styles";
import { frFR as dateFrFR } from "@mui/x-date-pickers/locales";
import merge from "deepmerge";
import { Theme } from "../types";

export const getMuiTheme = (
  theme: Theme,
  options: Partial<CssVarsThemeOptions> = {}
): MuiTheme =>
  createTheme(
    merge(
      {
        cssVariables: {
          cssVarPrefix: "theme",
        },
        colorSchemes: {
          light: {
            palette: {
              primary: {
                main: theme.palette.primary.regular,
                light: theme.palette.primary.light,
                lighter: theme.palette.primary.lighter,
                dark: theme.palette.primary.dark,
                darker: theme.palette.primary.darker,
              },
              secondary: {
                main: theme.palette.secondary.regular,
                light: theme.palette.secondary.light,
                lighter: theme.palette.secondary.lighter,
                dark: theme.palette.secondary.dark,
                darker: theme.palette.secondary.darker,
              },
              grey: {
                main: theme.palette.grey.regular,
                light: theme.palette.grey.light,
                lighter: theme.palette.grey.lighter,
                dark: theme.palette.grey.dark,
                darker: theme.palette.grey.darker,
              },
              red: {
                main: theme.palette.red.regular,
                light: theme.palette.red.light,
                dark: theme.palette.red.dark,
              },
              purple: {
                main: theme.palette.purple.regular,
                light: theme.palette.purple.light,
                dark: theme.palette.purple.dark,
              },
              blue: {
                main: theme.palette.blue.regular,
                light: theme.palette.blue.light,
                dark: theme.palette.blue.dark,
              },
              green: {
                main: theme.palette.green.regular,
                light: theme.palette.green.light,
                dark: theme.palette.green.dark,
              },
              yellow: {
                main: theme.palette.yellow.regular,
                light: theme.palette.yellow.light,
                dark: theme.palette.yellow.dark,
              },
              error: {
                main: theme.palette.red.regular,
                light: theme.palette.red.light,
                dark: theme.palette.red.dark,
              },
              warning: {
                main: theme.palette.yellow.regular,
                light: theme.palette.yellow.light,
                dark: theme.palette.yellow.dark,
              },
              info: {
                main: theme.palette.blue.regular,
                light: theme.palette.blue.light,
                dark: theme.palette.blue.dark,
              },
              success: {
                main: theme.palette.green.regular,
                light: theme.palette.green.light,
                dark: theme.palette.green.dark,
              },
            },
          },
        },
        components: {
          MuiIconButton: {
            styleOverrides: {
              root: {
                color: theme.palette.secondary.regular,
                "&:hover": {
                  color: theme.palette.primary.regular,
                },
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              input: {
                "&:-webkit-autofill": {
                  "-webkit-box-shadow": "0 0 0 100px var(--text-primary) inset",
                  "-webkit-text-fill-color": "var(--text-primary)",
                  "caret-color": "#000000",
                },
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                textTransform: "none",
                fontSize: "1rem",
                color: theme.palette.secondary.regular,
                "&.Mui-selected": {
                  color: theme.palette.secondary.regular,
                  fontWeight: 600,
                },
              },
            },
          },
          MuiTooltip: {
            styleOverrides: {
              tooltip: {
                fontSize: "0.875rem",
              },
            },
          },
        },
        typography: {
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
        frFR,
        dateFrFR,
      },
      options
    )
  );
