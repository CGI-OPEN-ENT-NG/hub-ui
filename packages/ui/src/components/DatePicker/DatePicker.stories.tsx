import { Meta, StoryFn } from "@storybook/react";
import DatePicker from "./DatePicker";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/DatePicker",
  component: DatePicker,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
  },
};

const Template: StoryFn<any> = (args) => <DatePicker {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  adapterLocale: "fr",
};

export default stories;
