import { Meta, StoryFn } from "@storybook/react";
import SearchInput from "./SearchInput";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/Inputs/SearchInput",
  component: SearchInput,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
  },
};

const Template: StoryFn<any> = (args) => <SearchInput {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  placeholder: "Rechercher",
};

export default stories;
