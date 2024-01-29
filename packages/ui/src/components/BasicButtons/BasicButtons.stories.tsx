import { StoryFn, Meta } from '@storybook/react';
import BasicButtons from './BasicButtons';

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: 'Components/BasicButtons',
  component: BasicButtons,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
  },
};

const Template: StoryFn<any> = (args) => <BasicButtons {...args} />;

export const Primary: any = Template.bind({});
Primary.args = {
  label: 'Primary Button',
};

export const Secondary: any = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  secondary: true,
};

export default stories;