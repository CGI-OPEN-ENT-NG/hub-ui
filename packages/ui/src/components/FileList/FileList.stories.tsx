import type { Meta, StoryObj } from "@storybook/react";
import FileList from "./FileList";

const meta: Meta<typeof FileList> = {
  title: "Components/FileList",
  component: FileList,
};
export default meta;

type Story = StoryObj<typeof FileList>;

export const Default: Story = {
  args: {
    files: [
      {
        name: "sample.csv",
        size: 500,
        uploading: false,
      },
      {
        name: "components_lists_filelist.png",
        size: 1780,
        uploading: true,
      },
    ],
    onDelete: (file: any) => alert("delete"),
  },
};
