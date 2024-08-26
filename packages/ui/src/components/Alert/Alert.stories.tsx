import { Meta, StoryFn } from "@storybook/react";
import Alert from "./Alert";

const stories: Meta<StoryFn<any>> = {
    title: "Components/Alert",
    component: Alert,
    argTypes: {
        // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
    },
};

const Template: StoryFn<any> = (args) => <Alert {...args}>This is an alert of type {args.severity}</Alert>;

export const Default: any = Template.bind({});
Default.args = {
};

export default stories;
