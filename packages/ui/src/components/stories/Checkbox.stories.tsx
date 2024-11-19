import MUICheckbox, { CheckboxProps } from "@mui/material/Checkbox";
import type { Meta, StoryObj } from "@storybook/react";

const Checkbox = (props: CheckboxProps) => {
  return <MUICheckbox {...props} />;
};

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};
