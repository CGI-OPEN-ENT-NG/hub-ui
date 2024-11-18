import TabContext from "@mui/lab/TabContext";
import MUITabList, { TabListProps } from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import type { Meta, StoryObj } from "@storybook/react";

const TabList = (props: TabListProps) => {
  return (
    <TabContext value="1">
      <MUITabList {...props} aria-label="lab API tabs example">
        <Tab label="Utilisateurs" value="1" />
        <Tab label="Groupes" value="2" />
        <Tab label="Demandes d'inscription" value="3" />
      </MUITabList>
      <TabPanel value="1">Utilisateurs</TabPanel>
      <TabPanel value="2">Groupes</TabPanel>
      <TabPanel value="3">Demandes d'inscription</TabPanel>
    </TabContext>
  );
};

const meta: Meta<typeof TabList> = {
  title: "Components/TabList",
  component: TabList,
};
export default meta;

type Story = StoryObj<typeof TabList>;

export const Default: Story = {
  args: {
    //handleChange: (event: SyntheticEvent, value: number) => true,
  },
};
