import LoadingButton, { type LoadingButtonProps } from "@mui/lab/LoadingButton";
import { styled, useTheme } from "@mui/material/styles";
import "react";
import ButtonIcon, { DefaultButtonIconProps } from "./DefaultButtonIcon";

export interface DefaultButtonProps extends LoadingButtonProps {
  icon?: DefaultButtonIconProps;
  text?: string;
}

const StyledButton = styled(LoadingButton)<DefaultButtonProps>(({ color, theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  columnGap: 8,
  minHeight: 38,
  paddingLeft: 12,
  paddingRight: 12,
  textTransform: "none",
  color: color,
  borderColor: color,
  borderRadius: 5,
  borderWidth: 2,
  transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  "&.MuiButton-contained": {
    color: "#FFFFFF"
  },
  "&.MuiButton-outlined": {
    borderRadius: 5,
    borderWidth: 2,
    "&.MuiButton-colorPrimary, &.MuiButton-outlinedPrimary": {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
        color: "#FFFFFF"
      }
    },
    "&.MuiButton-colorSecondary, &.MuiButton-outlinedSecondary": {
      borderColor: theme.palette.secondary.main,
      color: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
        borderColor: theme.palette.secondary.dark,
        color: "#FFFFFF"
      }
    }
  }
}));

const DefaultButton: React.FunctionComponent<DefaultButtonProps> = ({
  icon,
  text,
  ...otherProps
}: DefaultButtonProps) => {
  const color = otherProps.color ?? "primary";

  return (
    <StyledButton
      {...otherProps}
      color={color}
    >
      {icon?.position === "left" ? <ButtonIcon {...icon} /> : null}
      {text}
      {icon?.position === "right" ? <ButtonIcon {...icon} /> : null}
    </StyledButton>
  );
};

export default DefaultButton;
