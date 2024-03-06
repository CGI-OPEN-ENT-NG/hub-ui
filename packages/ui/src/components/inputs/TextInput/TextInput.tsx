import TextField, { type TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export type InputTextProps = {

} & TextFieldProps

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .MuiTextInput-underline:after": {
    borderBottomColor: theme.palette.primary.main,
  },
}));

const TextInput: React.FunctionComponent<InputTextProps> = (
  props: InputTextProps
) => {
  return <StyledTextField {...props} variant={props.variant || "standard"} />;
};

export default TextInput;
