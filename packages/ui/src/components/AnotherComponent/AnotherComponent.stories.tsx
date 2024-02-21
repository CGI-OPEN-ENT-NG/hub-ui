import { Meta, StoryFn } from "@storybook/react";
import AnotherComponent from "./AnotherComponent";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/AnotherComponent",
  component: AnotherComponent,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
  },
};

const Template: StoryFn<any> = (args) => <AnotherComponent {...args} />;

export const Primary: any = Template.bind({});
Primary.args = {
  label: "Primary Button",
};

export const Secondary: any = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  secondary: true,
};

export default stories;
