import { Experimental_CssVarsProvider as MuiCssVarsProvider } from "@mui/material/styles";
import { PropsWithChildren } from "react";
import { defaultMuiCssVarsTheme, imtMuiCssVarsTheme } from "../themes";

export type CssVarsProviderProps = PropsWithChildren & {
  themeId: "default" | "imt";
};

const THEMES = {
  default: defaultMuiCssVarsTheme,
  imt: imtMuiCssVarsTheme,
};

const CssVarsProvider: React.FunctionComponent<CssVarsProviderProps> = ({
  themeId,
  children,
}) => {
  const theme = THEMES[themeId] ?? THEMES.default;

  return (
    <MuiCssVarsProvider theme={theme} defaultMode="light">
      {children}
    </MuiCssVarsProvider>
  );
};

export { CssVarsProvider };
