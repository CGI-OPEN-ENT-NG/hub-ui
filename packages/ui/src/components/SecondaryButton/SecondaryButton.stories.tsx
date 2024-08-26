import { PersonAdd } from "@mui/icons-material";
import { Meta, StoryFn } from "@storybook/react";
import SecondaryButton from "./SecondaryButton";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/SecondaryButton",
  component: SecondaryButton,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
  },
};

const Template: StoryFn<any> = (args) => <SecondaryButton {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  text: "Add user",
  icon: {
    Component: PersonAdd,
    position: "left",
  },
  onClick: () => alert("Alert"),
  disabled: false,
};

export default stories;
