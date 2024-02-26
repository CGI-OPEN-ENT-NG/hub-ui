import { Meta, StoryFn } from "@storybook/react";
import Dropzone from "./Dropzone";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/Dropzone",
  component: Dropzone,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
  },
};

const Template: StoryFn<any> = (args) => <Dropzone {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  information: "SVG, PNG, JPG or GIF (max. 3MB)",
  onDrop: (files: any[]) => alert("dropped"),
};

export default stories;
