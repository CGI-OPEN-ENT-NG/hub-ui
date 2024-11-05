import LoadingButton, { type LoadingButtonProps } from "@mui/lab/LoadingButton";
import { styled } from "@mui/material/styles";

const StyledLoadingButton = styled(LoadingButton)(({ color, theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  minHeight: 38,
  textTransform: "none",
  color: color,
  borderColor: color,
  borderRadius: 5,
  borderWidth: 2,
  transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  "&.MuiButton-contained": {
    color: theme.palette.common.white,
  },
  "&.MuiButton-outlined": {
    borderRadius: 5,
    borderWidth: 2,
    "&.MuiButton-colorPrimary": {
      "&:active": {
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
      },
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
      },
    },
    "&.MuiButton-colorSecondary": {
      "&:active": {
        borderColor: theme.palette.secondary.main,
        color: theme.palette.secondary.main,
      },
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
      },
    },
    "&.MuiButton-colorError": {
      "&:active": {
        borderColor: theme.palette.error.main,
        color: theme.palette.error.main,
      },
      "&:hover": {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.common.white,
      },
    },
  },
}));

export type ButtonProps = LoadingButtonProps;

const Button: React.FunctionComponent<ButtonProps> = ({
  variant = "outlined",
  ...otherProps
}) => {
  return <StyledLoadingButton variant={variant} {...otherProps} />;
};

export default Button;
