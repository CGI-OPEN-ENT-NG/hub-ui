import { PersonAdd } from "@mui/icons-material";
import { Meta, StoryFn } from "@storybook/react";
import SecondaryButton from "./SecondaryButton";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/Buttons/SecondaryButton",
  component: SecondaryButton,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
  },
};

const Template: StoryFn<any> = (args) => <SecondaryButton {...args} />;

export const Primary: any = Template.bind({});
Primary.args = {
  text: "Add user",
  icon: {
    Component: PersonAdd,
    position: "left",
  },
  onClick: () => alert("Alert"),
};

export default stories;
