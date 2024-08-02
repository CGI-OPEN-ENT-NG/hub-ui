import { Theme } from "../types";

export const getTailwindThemeConfig = (theme: Theme) => ({
  extend: {
    colors: {
      ...theme.palette,
    },
  },
});
