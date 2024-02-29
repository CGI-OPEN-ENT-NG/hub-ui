// .storybook/preview.tsx
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "../packages/theme/src";

export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: "default",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { value: "default", title: "Default" },
        { value: "imt", title: "IMT" },
      ],
    },
  },
};

export const withMuiTheme = (Story, context) => {
  // The theme global we just declared
  const { theme: themeKey } = context.globals;

  return (
    <ThemeProvider themeId={themeKey}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme];
