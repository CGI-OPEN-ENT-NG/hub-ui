import { Save } from "@mui/icons-material";
import { Meta, StoryFn } from "@storybook/react";
import PrimaryButton from "./PrimaryButton";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/Buttons/PrimaryButton",
  component: PrimaryButton,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
  },
};

const Template: StoryFn<any> = (args) => <PrimaryButton {...args} />;

export const Primary: any = Template.bind({});
Primary.args = {
  text: "Save",
  icon: {
    Component: Save,
    position: "left",
  },
  onClick: () => alert("Alert"),
};

export default stories;
