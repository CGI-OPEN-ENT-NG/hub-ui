import { Meta, StoryFn } from "@storybook/react";
import MoodleIcon from "./MoodleIcon";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Icons/MoodleIcon",
  component: MoodleIcon,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
  },
};

const Template: StoryFn<any> = (args) => <MoodleIcon {...args} />;

export const Default: any = Template.bind({});
Default.args = {};

export default stories;
