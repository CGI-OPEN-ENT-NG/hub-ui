import { ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";
import { defaultMuiTheme, imtMuiTheme } from "./themes";

interface ThemeProviderProps extends PropsWithChildren {
  themeId: "default" | "imt";
}

const THEMES = {
  default: defaultMuiTheme,
  imt: imtMuiTheme,
};

const CustomThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  themeId,
  children,
}: ThemeProviderProps) => {
  const theme = THEMES[themeId] ?? THEMES.default;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { CustomThemeProvider as ThemeProvider };
