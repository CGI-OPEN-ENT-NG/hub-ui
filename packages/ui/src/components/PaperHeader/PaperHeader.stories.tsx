import MoodIcon from "@mui/icons-material/Mood";
import { red } from "@mui/material/colors";
import { Meta, StoryFn } from "@storybook/react";
import PaperHeader from "./PaperHeader";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/PaperHeader",
  component: PaperHeader,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
  },
};

const Template: StoryFn<any> = (args) => <PaperHeader {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  title: "Heading",
  iconColor: red,
  IconComponent: MoodIcon,
};

export default stories;
