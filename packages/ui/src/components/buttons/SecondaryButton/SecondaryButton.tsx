import { useTheme } from "@mui/material/styles";
import "react";
import { DefaultButton, DefaultButtonProps } from "../DefaultButton";

export interface SecondaryButtonProps
  extends Omit<DefaultButtonProps, "color"> {}

const SecondaryButton: React.FunctionComponent<SecondaryButtonProps> = (
  props: SecondaryButtonProps
) => {
  const theme = useTheme();

  return (
    <DefaultButton contentColor={theme.palette.secondary.main} {...props} />
  );
};

export default SecondaryButton;
