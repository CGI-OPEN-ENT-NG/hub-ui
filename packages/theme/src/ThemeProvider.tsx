import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { PropsWithChildren } from "react";
import { getMuiTheme } from "./mui";
import { defaultMuiTheme, imtMuiTheme } from "./themes";
import { Theme } from "./types/theme";

export type ThemeProviderProps = PropsWithChildren & {
  themeId: "default" | "imt";
  customTheme?: Theme;
};

const THEMES = {
  default: defaultMuiTheme,
  imt: imtMuiTheme,
};

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  themeId,
  customTheme,
  children,
}) => {
  const theme =
    customTheme !== undefined
      ? getMuiTheme(customTheme)
      : (THEMES[themeId] ?? THEMES.default);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
