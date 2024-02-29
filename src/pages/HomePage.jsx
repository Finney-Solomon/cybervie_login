import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Login } from "../components/Login";
import { Registration } from "../components/Registration";
import { useSelector } from "react-redux";

export const HomePage = () => {

  const openCloseRegistration = useSelector((state) => state.registration);
  return (
    <Box
      style={{
        background: "url(/images/3047867.jpg)",

        height: "91.11vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "91.11vh" }}
      >
        <Grid item xs={8} sm={8} md={8}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Paper
              elevation={1}
              sx={{
                backgroundColor: "rgba(209, 211, 248, 0.116)",
                margin: "3em",
                width: "50vw",
                padding: "2em",
                height: "50vh",
                paddingInline: "2em",
              }}
            >
              <Typography align="left" sx={{ color: "#FFFFFF" }} variant="h6">
                One on One Training from Industry Experts.
              </Typography>
              <br />
              <Typography align="left" sx={{ color: "#FFFFFF" }} variant="h6">
                A Perfectly Curated Content-Driven Course which gives you the
                Great Platform to be The Cyber Security Expert.
              </Typography>
              <br />
              <Typography align="left" sx={{ color: "#FFFFFF" }} variant="h6">
                Personal Career Guidance to Help you Crack the Interviews.
              </Typography>
              <br />
              <Typography align="left" sx={{ color: "#FFFFFF" }} variant="h6">
                All Students get Access to the Huge Repository of Real-time
                Projects and Sample Scenarios created by Industry Experts.
              </Typography>
              <br />
              <Typography align="left" sx={{ color: "#FFFFFF" }} variant="h6">
                Connect with a diverse community of cybersecurity enthusiasts
                and professionals globally, fostering collaboration, networking,
                and knowledge exchange
              </Typography>
              <br />
            </Paper>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          {openCloseRegistration?<Registration/>: <Login/>}
        </Grid>
      </Grid>
    </Box>
  );
};
