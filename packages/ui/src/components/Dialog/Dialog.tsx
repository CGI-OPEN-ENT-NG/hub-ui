import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { IconButton } from "@mui/material";
import MUIDialog, { DialogProps as MUIDialogProps } from "@mui/material/Dialog";

export type DialogProps = {
  showCloseButton?: boolean;
} & MUIDialogProps;

const Dialog: React.FunctionComponent<DialogProps> = ({
  children,
  showCloseButton = true,
  ...otherProps
}) => {
  const handleClose = () => otherProps.onClose?.({}, "escapeKeyDown");

  return (
    <MUIDialog {...otherProps}>
      {showCloseButton ? (
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: "absolute", right: 24, top: 24 }}
        >
          <CloseRoundedIcon />
        </IconButton>
      ) : null}
      {children}
    </MUIDialog>
  );
};
export default Dialog;
