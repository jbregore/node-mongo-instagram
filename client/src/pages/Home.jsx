import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CreatePost from "../components/CreatePost";
import HomeProfile from "../components/HomeProfile";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";

const Home = () => {

  

  return (
    <>
      <Navbar />
      <Box
        style={{
          width: "70%",
          minHeight: "100vh",
          margin: "auto",
          paddingTop: 80
        }}
      >
        <Typography variant="h6" color="text.secondary">
          Home
        </Typography>
        <Grid container>
          <Grid item xs={7}>
            <CreatePost />
            <br />
            <Posts />
          </Grid>
          <Grid item xs={5} style={{ paddingLeft: 30, paddingTop: 20 }}>
            <HomeProfile />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
