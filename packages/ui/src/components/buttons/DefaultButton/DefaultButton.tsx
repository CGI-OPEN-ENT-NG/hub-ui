import LoadingButton, { type LoadingButtonProps } from "@mui/lab/LoadingButton";
import { styled, useTheme } from "@mui/material/styles";
import "react";
import ButtonIcon, { DefaultButtonIconProps } from "./DefaultButtonIcon";

export interface DefaultButtonProps extends Omit<LoadingButtonProps, "color"> {
  contentColor?: string;
  hoverColor?: string;
  icon?: DefaultButtonIconProps;
  text?: string;
}

export interface StyledButtonProps {
  contentColor: string;
  hoverColor: string;
}

const StyledButton = styled(LoadingButton, {
  shouldForwardProp: (prop) => prop !== "contentColor" && prop !== "hoverColor",
})<StyledButtonProps>(({ contentColor, hoverColor, theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  columnGap: 8,
  minHeight: 38,
  paddingLeft: 12,
  paddingRight: 12,
  textTransform: "none",
  color: contentColor,
  borderColor: contentColor,
  borderRadius: 5,
  borderWidth: 2,
  "&:hover": {
    color: theme.palette.common.white,
    backgroundColor: hoverColor,
    borderColor: hoverColor,
    borderWidth: 2,
  },
}));

const DefaultButton: React.FunctionComponent<DefaultButtonProps> = ({
  icon,
  text,
  ...otherProps
}: DefaultButtonProps) => {
  const theme = useTheme();
  const contentColor = otherProps.contentColor ?? theme.palette.primary.main;

  return (
    <StyledButton
      {...otherProps}
      variant="outlined"
      contentColor={contentColor}
      hoverColor={otherProps.hoverColor ?? contentColor}
    >
      {icon?.position === "left" ? <ButtonIcon {...icon} /> : null}
      {text}
      {icon?.position === "right" ? <ButtonIcon {...icon} /> : null}
    </StyledButton>
  );
};

export default DefaultButton;
