import { Meta, StoryFn } from "@storybook/react";
import TextInput from "./TextInput";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/Inputs/TextInput",
  component: TextInput,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
  },
};

const Template: StoryFn<any> = (args) => <TextInput {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  label: "Champ",
  disabled: false,
};

export default stories;
