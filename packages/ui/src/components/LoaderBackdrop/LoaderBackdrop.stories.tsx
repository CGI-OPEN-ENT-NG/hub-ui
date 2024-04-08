import { Meta, StoryFn } from "@storybook/react";
import LoaderBackdrop from "./LoaderBackdrop";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/LoaderBackdrop",
  component: LoaderBackdrop,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
  },
};

const Template: StoryFn<any> = (args) => <LoaderBackdrop {...args} />;

export const Default: any = Template.bind({});
Default.args = {};

export default stories;
