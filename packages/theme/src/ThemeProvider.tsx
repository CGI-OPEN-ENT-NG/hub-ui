import { Theme, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";
import { defaultMuiTheme, imtMuiTheme } from "./themes";

interface ThemeProviderProps extends PropsWithChildren {
  themeId: "default" | "imt";
  custom: Theme | null
}

const THEMES = {
  default: defaultMuiTheme,
  imt: imtMuiTheme
};

const CustomThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  themeId,
  custom,
  children,
}: ThemeProviderProps) => {
 
  const theme = (custom!== null) ? custom : ( THEMES[themeId] ?? THEMES.default);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { CustomThemeProvider as ThemeProvider };
