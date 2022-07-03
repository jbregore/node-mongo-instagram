import { Typography } from "@mui/material";
import React from "react";

const classes = {
  main_box: {
    position: "absolute",
    // textAlign: 'center',
    width: "100%",
    bottom: 10,
    right: 0,
    paddingLeft: 150,
    paddingRight: 150,
  },

  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
};
const LoginFooter = () => {
  const footer = [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Top Accounts",
    "Hashtags",
    "Locations",
    "Instagram Lite",
  ];

  return (
    <div style={{ ...classes.main_box }}>
      <div style={{ ...classes.list }}>
        {footer.map((item, index) => (
          <Typography style={{ fontSize: 13 }} key={index}>
            {item}
          </Typography>
        ))}
      </div>

      <Typography style={{ fontSize: 13, textAlign: 'center', marginTop: 8 }}>
        MERN Instagram - Jb Regore
      </Typography>
    </div>
  );
};

export default LoginFooter;
