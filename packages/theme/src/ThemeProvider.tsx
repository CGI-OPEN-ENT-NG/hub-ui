import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { PropsWithChildren } from "react";
import { defaultMuiCssVarsTheme, imtMuiCssVarsTheme } from "./themes";
import { getMuiCssVarsTheme } from "./mui";
import { Theme } from "./types/theme";

export type ThemeProviderProps = PropsWithChildren & {
  themeId: "default" | "imt";
  customTheme?: Theme;
};

const THEMES = {
  default: defaultMuiCssVarsTheme,
  imt: imtMuiCssVarsTheme,
};

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  themeId,
  customTheme,
  children,
}) => {
  const theme = (customTheme !== undefined) ? getMuiCssVarsTheme(customTheme)  : ( THEMES[themeId] ?? THEMES.default);

  return (
    <CssVarsProvider theme={theme} defaultMode="light">
      {children}
    </CssVarsProvider>
  );
};
