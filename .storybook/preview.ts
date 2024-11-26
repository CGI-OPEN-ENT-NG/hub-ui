// .storybook/preview.ts
import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import {
  campusMuiTheme,
  crnaMuiTheme,
  defaultMuiTheme,
  imtMuiTheme,
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
      campus: campusMuiTheme,
      crna: crnaMuiTheme,
      default: defaultMuiTheme,
      imt: imtMuiTheme,
    },
    defaultTheme: "default",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
