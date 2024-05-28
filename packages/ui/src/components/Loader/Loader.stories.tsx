import { Meta, StoryFn } from "@storybook/react";
import Loader from "./Loader";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/Loader",
  component: Loader,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
  },
};

const Template: StoryFn<any> = (args) => <Loader {...args} />;

export const Default: any = Template.bind({});
Default.args = {};

export default stories;
