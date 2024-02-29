import {
  AppBar,
  Container,
  Toolbar,
} from "@mui/material";
import React from "react";
import logo from "../images/logo.gif";
export const Header = () => {
  return (
    <>
      <AppBar position="sticky" style={{background:"#FFFFFF"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              alt="Logo"
              style={{ maxWidth: "150px", maxHeight: "50px" }}
              src={logo}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
