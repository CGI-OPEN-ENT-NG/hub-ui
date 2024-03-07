import { DefaultButton, DefaultButtonProps } from "../DefaultButton";

export interface SecondaryButtonProps
  extends Omit<DefaultButtonProps, "color"> { }

const SecondaryButton: React.FunctionComponent<SecondaryButtonProps> = (
  props: SecondaryButtonProps
) => (
  <DefaultButton color="secondary" variant={props.variant ?? "outlined"} {...props} />
);

export default SecondaryButton;
