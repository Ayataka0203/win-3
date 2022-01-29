import React, { useState } from "react";
import Main1 from "./Main1";
import Main5 from "./Main5";
import Main9 from "./Main9";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import orange from "@material-ui/core/colors/orange";
import teal from "@material-ui/core/colors/teal";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import HomeIcon from "@mui/icons-material/Home";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EmailIcon from "@mui/icons-material/Email";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[400]
    },
    secondary: {
      main: teal[200]
    }
  }
});

const Header = () => {
  const [homeFlag, setHomeFlag] = useState(true);
  const [profFlag, setProfFlag] = useState(false);
  const [homeIconFlag, setHomeIconFlag] = useState(false);
  const [profIconFlag, setProfIconFlag] = useState(true);
  const onClickProf = () => {
    setHomeFlag(!homeFlag);
    setProfFlag(!profFlag);
    setProfIconFlag(!profIconFlag);
    setHomeIconFlag(!homeIconFlag);
  };
  const onClickHome = () => {
    setHomeIconFlag(!profIconFlag);
    setHomeFlag(!homeFlag);
  };
  return (
    <>
      <div className="header">
        <ThemeProvider theme={theme}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <div className="title">Win-3</div>
            </Toolbar>
          </AppBar>
          <Container className="serchBox">
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <MenuIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="キーワードで探す"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Container>
          <div className="icons">
            {homeIconFlag && <HomeIcon onClick={onClickHome}></HomeIcon>}
            <BorderColorIcon />
            <EmailIcon />
            <CircleNotificationsIcon />
            <BuildCircleIcon />
            {profIconFlag && (
              <AccountCircleIcon onClick={onClickProf}></AccountCircleIcon>
            )}
          </div>
        </ThemeProvider>
      </div>
      {/*profFlag && <Main1 />}
      {homeFlag && <Main5 />*/}
    </>
  );
};

export default Header;
