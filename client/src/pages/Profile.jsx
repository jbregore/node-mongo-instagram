import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CreatePost from "../components/CreatePost";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import ProfileInfo from "../components/ProfileInfo";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Box
        style={{
          width: "70%",
          minHeight: "100vh",
          margin: "auto",
          paddingTop: 80,
        }}
      >
        <Typography variant="h6" color="text.secondary">
          My Posts
        </Typography>
        <Grid container>
          <Grid item xs={8}>
            <CreatePost />
            <br />
            <Posts />
          </Grid>
          <Grid item xs={4} style={{ paddingLeft: 30, }}>
            <ProfileInfo />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
