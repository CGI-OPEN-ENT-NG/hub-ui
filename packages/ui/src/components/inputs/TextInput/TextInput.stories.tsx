import { Meta, StoryFn } from "@storybook/react";
import TextInput from "./TextInput";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/Inputs/TextInput",
  component: TextInput,
  argTypes: {
    variant: {
      control: 'select',
      description: 'input rendering style',
      options: ['standard', 'outlined', 'filled'],
      table: {
        defaultValue: { summary: 'standard' },
        type: { summary: 'string' },
      }
    },
  },
};

const Template: StoryFn<any> = (args) => <TextInput {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  label: "Default input",
};

export const Standard: any = Template.bind({});
Standard.args = {
  label: "Standard input",
  variant: "standard"
};

export const Outlined: any = Template.bind({});
Outlined.args = {
  label: "Outlined input",
  variant: "outlined"
};

export const Filled: any = Template.bind({});
Filled.args = {
  label: "Filled input",
  disabled: false,
  variant: "filled"
};

export default stories;
