import { useTheme } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";
import "react";
import { DefaultButton, DefaultButtonProps } from "../DefaultButton";

export interface PrimaryButtonProps extends Omit<DefaultButtonProps, "color"> {}

const PrimaryButton: React.FunctionComponent<PrimaryButtonProps> = (
  props: PrimaryButtonProps
) => {
  const theme = useTheme();

  return (
    <DefaultButton
      contentColor={theme.palette.primary.main}
      hoverColor={theme.palette.primary.dark}
      {...props}
    />
  );
};

export default PrimaryButton;
