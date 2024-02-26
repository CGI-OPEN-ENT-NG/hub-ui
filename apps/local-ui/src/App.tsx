import "@cgi-learning-hub/theme";
import { ThemeProvider } from "@cgi-learning-hub/theme";
import {
  Dropzone,
  File,
  FileList,
  PrimaryButton,
  SearchInput,
  SecondaryButton,
  Tab,
  TextInput,
} from "@cgi-learning-hub/ui";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { Button, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";
import React from "react";
import "./App.css";
import { Fingerprint } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import "dayjs/locale/fr";

const StyleButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const ButtonComponent = ({ onClick }: { onClick: () => void }) => {
  return (
    <StyleButton variant="contained" onClick={onClick}>
      Change theme
    </StyleButton>
  );
};

function App() {
  const [isImtThemeActive, setImtThemeActive] = React.useState(false);
  const [value, setValue] = React.useState("1");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [files, setFiles] = React.useState<File[]>([]);
  const open = Boolean(anchorEl);

  const changeTheme = () => setImtThemeActive((old) => !old);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider themeId={isImtThemeActive ? "imt" : "default"}>
      <div className="App">
        <header className="App-header">
          <ButtonComponent onClick={changeTheme} />
          <PrimaryButton
            text="Bouton primaire"
            icon={{ Component: AccessAlarmIcon, position: "left" }}
          />
          <SecondaryButton text="Bouton secondaire" />
          <TextInput label="TextInput" placeholder="test" />
          <SearchInput />
          <Tooltip title="Tooltip">
            <Typography variant="h2" component="h2">
              Typo h2
            </Typography>
          </Tooltip>
          <IconButton onClick={handleClick} size="large">
            <Fingerprint fontSize="inherit" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
            <DatePicker />
          </LocalizationProvider>
          <TabContext value={value}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
          <Dropzone
            onDrop={(files) => setFiles(files)}
            information="SVG, PNG, JPG or GIF (max. 3MB)"
          />
          <FileList files={files} />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
