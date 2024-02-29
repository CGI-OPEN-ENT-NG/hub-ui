import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider as MuiLocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { PropsWithChildren } from "react";
import "dayjs/locale/en";
import "dayjs/locale/es";
import "dayjs/locale/fr";

export interface LocalizationProviderProps extends PropsWithChildren {
  adapterLocale?: "en" | "es" | "fr";
}

const LocalizationProvider: React.FunctionComponent<
  LocalizationProviderProps
> = ({ adapterLocale = "fr", ...otherProps }) => {
  return (
    <MuiLocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={adapterLocale}
      {...otherProps}
    />
  );
};

export default LocalizationProvider;
