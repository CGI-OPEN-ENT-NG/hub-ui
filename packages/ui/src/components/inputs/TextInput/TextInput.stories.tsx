import { Meta, StoryFn } from "@storybook/react";
import TextInput from "./TextInput";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/Inputs/TextInput",
  component: TextInput,
  argTypes: {
    label: {
      control: 'text',
      description: 'input label',
      table: {
        type: { summary: 'text' },
      }
    },
    disabled: {
      control: 'boolean',
      description: 'input disabled state',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      }
    },
    variant: {
      control: 'select',
      description: 'input rendering style',
      options: ['standard', 'outlined', 'filled'],
      table: {
        defaultValue: { summary: 'standard' },
        type: { summary: 'string' },
      }
    },
    type: {
      control: 'select',
      description: 'input type',
      options: ['text', 'number', 'email', 'password'],
      table: {
        defaultValue: { summary: 'text' },
        type: { summary: 'string' },
      },
    },
  },
};

const Template: StoryFn<any> = (args) => <TextInput {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  label: "Default input",
  disabled: false,
};

export const Standard: any = Template.bind({});
Standard.args = {
  label: "Standard input",
  disabled: false,
  variant: "standard"
};

export const Outlined: any = Template.bind({});
Outlined.args = {
  label: "Outlined input",
  disabled: false,
  variant: "outlined"
};

export const Filled: any = Template.bind({});
Filled.args = {
  label: "Filled input",
  disabled: false,
  variant: "filled"
};

export default stories;
