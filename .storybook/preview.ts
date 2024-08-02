// .storybook/preview.ts
import {
  CssBaseline,
  Experimental_CssVarsProvider as CssVarsProvider,
} from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import {
  defaultMuiCssVarsTheme,
  imtMuiCssVarsTheme,
} from "../packages/theme/src/themes";

// Load Roboto fonts
import "@fontsource/material-icons";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: defaultMuiCssVarsTheme,
      imt: imtMuiCssVarsTheme,
    },
    defaultTheme: "default",
    Provider: CssVarsProvider,
    GlobalStyles: CssBaseline,
  }),
];
