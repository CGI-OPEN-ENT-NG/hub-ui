import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import { Meta, StoryFn } from "@storybook/react";

// Définissez le type de l'objet default
const stories: Meta<StoryFn<any>> = {
  title: "Components/Lists/TabList",
  component: TabList,
  argTypes: {
    // Définissez ici vos paramètres d'histoires spécifiques aux arguments (args).
    value: {
      options: ["1", "2", "3"],
      control: { type: "select" },
    },
  },
};

const Template: StoryFn<any> = (args) => (
  <TabContext value={args.value}>
    <TabList onChange={args.handleChange} aria-label="lab API tabs example">
      <Tab label="Utilisateurs" value="1" />
      <Tab label="Groupes" value="2" />
      <Tab label="Demandes d'inscription" value="3" />
    </TabList>
    <TabPanel value="1">Utilisateurs</TabPanel>
    <TabPanel value="2">Groupes</TabPanel>
    <TabPanel value="3">Demandes d'inscription</TabPanel>
  </TabContext>
);

export const Default: any = Template.bind({});
Default.args = {
  value: "1",
  handleChange: (event: any, value: string) => true,
};

export default stories;
