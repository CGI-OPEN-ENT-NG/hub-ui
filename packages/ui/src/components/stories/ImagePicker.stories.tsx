import type { Meta, StoryObj } from "@storybook/react";
import { ImagePicker } from "../ImagePicker";

const meta: Meta<typeof ImagePicker> = {
  title: "Components/ImagePicker",
  component: ImagePicker,
};
export default meta;

type Story = StoryObj<typeof ImagePicker>;

export const Default: Story = {
  args: {
    information: "SVG, PNG, JPG, GIF",
    onFileChange: (file: File | null) => {
      if (file) {
        console.log("Image uplaodé")
      } else {
        console.log("Image supprimé")
      }
    },
  },
};
