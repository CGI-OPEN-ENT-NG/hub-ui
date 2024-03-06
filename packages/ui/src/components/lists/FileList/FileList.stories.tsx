import { Meta, StoryFn } from "@storybook/react";
import FileList from "./FileList";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/Data Display/FileList",
  component: FileList,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
  },
};

const Template: StoryFn<any> = (args) => <FileList {...args} />;

export const Default: any = Template.bind({});
Default.args = {
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
};

export default stories;
