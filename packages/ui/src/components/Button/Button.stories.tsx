import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SaveIcon from "@mui/icons-material/Save";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
  },
};

const Template: StoryFn<any> = (args) => <Button {...args} />;

export const Contained: any = Template.bind({});
Contained.args = {
  children: "Enregistrer",
  color: "primary",
  disabled: false,
  startIcon: <SaveIcon />,
  variant: "contained",
  onClick: () => alert("Alert"),
};

export const Outlined: any = Template.bind({});
Outlined.args = {
  children: "Ajouter un utilisateur",
  color: "secondary",
  disabled: false,
  startIcon: <PersonAddIcon />,
  variant: "outlined",
  onClick: () => alert("Alert"),
};

export const Text: any = Template.bind({});
Text.args = {
  children: "Annuler",
  color: "secondary",
  disabled: false,
  variant: "text",
  onClick: () => alert("Alert"),
};

export default stories;
