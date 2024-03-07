import { DefaultButton, DefaultButtonProps } from "../DefaultButton";

export interface PrimaryButtonProps extends Omit<DefaultButtonProps, "color"> { }

const PrimaryButton: React.FunctionComponent<PrimaryButtonProps> = (
  props: PrimaryButtonProps
) => {
  return (
    <DefaultButton
      color="primary"
      variant={props.variant ?? "outlined"}
      {...props}
    />
  );
};

export default PrimaryButton;
