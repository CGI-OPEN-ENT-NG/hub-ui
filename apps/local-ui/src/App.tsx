import "@cgi-learning-hub/theme";
import { ThemeProvider } from "@cgi-learning-hub/theme";
import {
  DatePicker,
  Dropzone,
  File,
  FileList,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  LocalizationProvider,
  Menu,
  MenuItem,
  PrimaryButton,
  SearchInput,
  SecondaryButton,
  Tab,
  TextInput,
  Tooltip,
  Typography,
  PasswordInput,
  Alert,
  Checkbox,
  AddCircleIcon,
  CancelIcon,
  CloseIcon,
  EditIcon,
  InfoIcon
} from "@cgi-learning-hub/ui";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import "./App.css";
import { Fingerprint } from "@mui/icons-material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

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
  const [password, setPassword] = React.useState("")
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

  const [checkboxes, setCheck] = React.useState({
    item1: true,
    item2: false
  });

  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck({
      ...checkboxes,
      [event.target.name]: event.target.checked,
    });
  };

  const { item1, item2 } = checkboxes;

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
          <div>
            <AddCircleIcon />
            <CancelIcon />
            <CloseIcon />
            <EditIcon />
            <InfoIcon />
          </div>
          <LocalizationProvider>
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
          <PasswordInput label="Password" value={password} onChange={(e: any) => setPassword(e.target.value)} />
          <div>password: {password}</div>
          <Alert severity="info">Info alert</Alert>
          <Alert severity="success">Success alert</Alert>
          <Alert severity="warning">Warning alert</Alert>
          <Alert severity="error">Error alert</Alert>

          <FormControl component="fieldset" variant="standard" className='flex flex-column'>
            <FormLabel component="label" sx={{ "&.Mui-focused": { color: "grey" } }}>Checkbox List&#58;</FormLabel>
            <FormGroup>
              <FormControlLabel className='ml-0 mr-2' label="Item 1" control={ <Checkbox checked={item1} onChange={handleChangeCheck} name="item1" />} />
              <FormControlLabel className='ml-0 mr-2' label="Item 2" control={ <Checkbox checked={item2} onChange={handleChangeCheck} name="item2" />} />
            </FormGroup>
          </FormControl>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
