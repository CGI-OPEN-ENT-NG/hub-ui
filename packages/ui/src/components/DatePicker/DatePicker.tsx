import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/fr";

export type DatePickerProps = {
  adapterLocale?: string;
} & MuiDatePickerProps<Dayjs>;

const DatePicker: React.FunctionComponent<DatePickerProps> = ({
  adapterLocale = "fr",
  ...pickerProps
}) => {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={adapterLocale}
    >
      <MuiDatePicker {...pickerProps} />
    </LocalizationProvider>
  );
};

export default DatePicker;
