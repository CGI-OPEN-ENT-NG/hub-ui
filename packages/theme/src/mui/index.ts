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
                contrastText: theme.palette.primary.contrastText,
              },
              secondary: {
                main: theme.palette.secondary.regular,
                light: theme.palette.secondary.light,
                lighter: theme.palette.secondary.lighter,
                dark: theme.palette.secondary.dark,
                darker: theme.palette.secondary.darker,
                contrastText: theme.palette.secondary.contrastText,
              },
              grey: {
                main: theme.palette.grey.regular,
                light: theme.palette.grey.light,
                lighter: theme.palette.grey.lighter,
                dark: theme.palette.grey.dark,
                darker: theme.palette.grey.darker,
              },
              error: {
                main: theme.palette.red.regular,
                light: theme.palette.red.light,
                dark: theme.palette.red.dark,
                contrastText: theme.palette.red.contrastText,
              },
              warning: {
                main: theme.palette.yellow.regular,
                light: theme.palette.yellow.light,
                dark: theme.palette.yellow.dark,
                contrastText: theme.palette.yellow.contrastText,
              },
              info: {
                main: theme.palette.blue.regular,
                light: theme.palette.blue.light,
                dark: theme.palette.blue.dark,
                contrastText: theme.palette.blue.contrastText,
              },
              success: {
                main: theme.palette.green.regular,
                light: theme.palette.green.light,
                dark: theme.palette.green.dark,
                contrastText: theme.palette.green.contrastText,
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
          fontFamily: "Roboto",
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
