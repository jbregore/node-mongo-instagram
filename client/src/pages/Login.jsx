import { Box, Container, Grid } from "@mui/material";
import React from "react";
import LoginComponent from "../components/LoginComponent";
import LoginFooter from "../components/LoginFooter";
// import "../utils/css/App.css";
import img from "../utils/images";

const classes = {
  flex_center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const Login = () => {
  

  return (
    <Container
      maxWidth={false}
      style={{ ...classes.flex_center, height: "100vh" }}
    >
      <Box sx={{ flexGrow: 1, height: "80vh", position: 'relative' }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            md={6}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <Box style={{ marginRight: -130 }}>
              <img src={img.instagram2} alt="" style={{ width: "100%" }} />
            </Box>
            <Box>
              <img src={img.instagram} alt="" style={{ width: "100%" }} />
            </Box>
          </Grid>

          <Grid
            item
            xs={6}
            md={6}
            style={{
              //   ...classes.flex_center,
              flexDirection: "column",
              justifyContent: "flex-start",
              paddingLeft: 40,
            }}
          >
            <LoginComponent />
          </Grid>
        </Grid>

        <LoginFooter />
      </Box>
    </Container>
  );
};

export default Login;
