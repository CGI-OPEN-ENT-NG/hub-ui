// .storybook/preview.tsx
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { CssBaseline, ThemeProvider } from '@mui/material';

import { defaultMuiTheme, imtMuiTheme } from "../packages/theme/src/themes";

// Load Roboto fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    default: defaultMuiTheme,
    imt: imtMuiTheme,
  },
  defaultTheme: 'default',
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
})];