import { Meta, StoryFn } from "@storybook/react";
import EmptyState from "./EmptyState";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/Feedback/EmptyState",
  component: EmptyState,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
  },
};

const Template: StoryFn<any> = (args) => <EmptyState {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  svgName: "client-error",
  title: "Une erreur est  survenue",
};

export default stories;
