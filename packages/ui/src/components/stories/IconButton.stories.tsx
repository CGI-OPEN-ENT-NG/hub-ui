import Fingerprint from "@mui/icons-material/Fingerprint";
import IconButton from "@mui/material/IconButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    children: <Fingerprint />,
    onClick: () => alert("Alert"),
    disabled: false,
  },
};
