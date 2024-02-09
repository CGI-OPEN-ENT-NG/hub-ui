import "@cgi-learning-hub/theme";
import { exampleMuiTheme, imtMuiTheme } from "@cgi-learning-hub/theme";
import { AnotherComponent, BasicButtons } from "@cgi-learning-hub/ui";
import {
  Button,
  Experimental_CssVarsProvider as CssVarsProvider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";
import React from "react";
import "./App.css";
import logo from "./logo.svg";

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
    <CssVarsProvider theme={isImtThemeActive ? imtMuiTheme : exampleMuiTheme}>
      <div className="App">
        <header className="App-header">        
          <div>
            <ButtonComponent onClick={changeTheme} />
          </div>
          <BasicButtons />
          <AnotherComponent />
        </header>
      </div>
    </CssVarsProvider>
  );
}

export default App;
