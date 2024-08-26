import Fingerprint from "@mui/icons-material/Fingerprint";
import IconButton from "@mui/material/IconButton";
import { Meta, StoryFn } from "@storybook/react";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
  },
};

const Template: StoryFn<any> = (args) => <IconButton {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  children: <Fingerprint />,
  onClick: () => alert("Alert"),
  disabled: false,
};

export default stories;
