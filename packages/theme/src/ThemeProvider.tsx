import {
  CssVarsThemeOptions,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import merge from "deepmerge";
import { PropsWithChildren } from "react";
import { getMuiTheme } from "./mui";
import {
  campusTheme,
  crnaTheme,
  defaultTheme,
  imtMuiOptions,
  imtTheme,
} from "./themes";
import { Theme } from "./types/theme";

const expandTheme = (
  id: ThemeProviderProps["themeId"],
  options?: ThemeProviderProps["options"]
) => {
  switch (id) {
    case "campus":
      return getMuiTheme(campusTheme, options);
    case "crna":
      return getMuiTheme(crnaTheme, options);
    case "imt":
      return getMuiTheme(
        imtTheme,
        options ? merge(imtMuiOptions, options) : imtMuiOptions
      );
    case "default":
    default:
      return getMuiTheme(defaultTheme, options);
  }
};

export type ThemeProviderProps = PropsWithChildren<
  {
    options?: Partial<CssVarsThemeOptions>;
  } & (
    | {
        themeId: "campus" | "crna" | "default" | "imt";
        customTheme?: never;
      }
    | {
        themeId?: never;
        customTheme: Theme;
      }
  )
>;

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
  customTheme,
  options,
  themeId,
}) => {
  const theme = themeId
    ? expandTheme(themeId, options)
    : getMuiTheme(customTheme, options);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
