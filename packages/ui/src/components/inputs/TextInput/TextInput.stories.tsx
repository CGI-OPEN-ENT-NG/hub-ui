import { Meta, StoryFn } from "@storybook/react";
import TextInput from "./TextInput";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/Inputs/TextInput",
  component: TextInput,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args)
  },
};

const Template: StoryFn<any> = (args) => <TextInput {...args} />;

export const Standard: any = Template.bind({});
Standard.args = {
  label: "Champ",
  disabled: false,
  variant: "standard"
};

export const Outlined: any = Template.bind({});
Outlined.args = {
  label: "Champ",
  disabled: false,
  variant: "outlined"
};

export const Filled: any = Template.bind({});
Filled.args = {
  label: "Champ",
  disabled: false,
  variant: "filled"
};

export default stories;
