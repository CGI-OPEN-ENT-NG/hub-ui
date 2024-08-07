import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { PropsWithChildren } from "react";
import { defaultMuiCssVarsTheme, imtMuiCssVarsTheme } from "./themes";

export type ThemeProviderProps = PropsWithChildren & {
  themeId: "default" | "imt";
};

const THEMES = {
  default: defaultMuiCssVarsTheme,
  imt: imtMuiCssVarsTheme,
};

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  themeId,
  children,
}) => {
  const theme = THEMES[themeId] ?? THEMES.default;

  return (
    <CssVarsProvider theme={theme} defaultMode="light">
      {children}
    </CssVarsProvider>
  );
};
