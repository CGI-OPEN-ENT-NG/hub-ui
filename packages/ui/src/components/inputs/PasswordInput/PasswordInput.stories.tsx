import { Meta, StoryFn } from "@storybook/react";
import PasswordInput from './PasswordInput'

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
    title: "Components/Inputs/PasswordInput",
    component: PasswordInput,
    argTypes: {
        // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
    },
};

const Template: StoryFn<any> = (args) => <PasswordInput {...args} />;

export const Default: any = Template.bind({});
Default.args = {
    label: "Password"
};

export default stories;