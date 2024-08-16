import { Experimental_CssVarsProvider as CssVarsProvider, CssVarsTheme } from "@mui/material/styles";
import { PropsWithChildren } from "react";
import { defaultMuiCssVarsTheme, imtMuiCssVarsTheme } from "./themes";

export type ThemeProviderProps = PropsWithChildren & {
  themeId: "default" | "imt";
  custom: CssVarsTheme | undefined;
};

const THEMES = {
  default: defaultMuiCssVarsTheme,
  imt: imtMuiCssVarsTheme,
};

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  themeId,
  custom,
  children,
}) => {
  const theme = (custom !== undefined) ? custom : ( THEMES[themeId] ?? THEMES.default);

  return (
    <CssVarsProvider theme={theme} defaultMode="light">
      {children}
    </CssVarsProvider>
  );
};
