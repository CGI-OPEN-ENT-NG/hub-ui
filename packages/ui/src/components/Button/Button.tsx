import LoadingButton, { type LoadingButtonProps } from "@mui/lab/LoadingButton";
import { styled } from "@mui/material/styles";

const StyledLoadingButton = styled(LoadingButton)(({ color, theme }) => ({
  minHeight: 38,
  textTransform: "none",
  transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  "&.MuiButton-outlined": {
    borderRadius: 5,
    borderWidth: 2,
    /* "&:hover": {
      //backgroundColor: theme.palette[color].main,
      color: theme.palette.common.white,
    },*/
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
