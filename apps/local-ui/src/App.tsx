import "@cgi-learning-hub/theme";
import { ThemeProvider } from "@cgi-learning-hub/theme";
import {
  PrimaryButton,
  SearchInput,
  SecondaryButton,
  TextInput,
} from "@cgi-learning-hub/ui";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";
import React from "react";
import "./App.css";

const StyleButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const ButtonComponent = ({ onClick }: { onClick: () => void }) => {
  return (
    <StyleButton variant="contained" onClick={onClick}>
      Change css primary variable
    </StyleButton>
  );
};

function App() {
  const [isImtThemeActive, setImtThemeActive] = React.useState(false);

  const changeTheme = () => setImtThemeActive((old) => !old);

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
          <Typography variant="h2" component="h2">
            Typo h2
          </Typography>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
