import React, { useState } from "react";

import { Button, Divider, TextField, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import img from "../utils/images";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, signup } from "../utils/redux/action/authAction";

const classes = {
  main_box: {
    backgroundColor: "#fff",
    textAlign: "center",
    padding: 50,
    borderRadius: 5,
    border: "1.3px solid #ccc",
  },
  margin: {
    marginBottom: 10,
  },
  link: {
    color: "#1661a9",
    fontWeight: "bold",
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    justifyContent: "center",
  },
};

const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isSignUp) {
      if (formData.username && formData.password) {
        dispatch(login(formData, navigate));
      } else {
        alert("Please fill all the fields");
      }
    } else {
      if (formData.username && formData.password && formData.confPassword) {
        if (formData.password === formData.confPassword) {
          dispatch(signup(formData, navigate));
        } else {
          alert("Password didn't match");
        }
      } else {
        alert("Please fill all the fields");
      }
    }
  };

  return (
    <Box style={{ width: 380 }}>
      <Box style={{ ...classes.main_box, ...classes.margin }}>
        <Typography variant="h4" style={{ ...classes.margin }}>
          Instagram
        </Typography>
        <br />

        <TextField
          label="Username"
          variant="outlined"
          size="small"
          fullWidth
          style={{ ...classes.margin }}
          onChange={(e) => {
            setFormData({
              ...formData,
              username: e.target.value,
            });
          }}
          value={formData.username}
        />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          size="small"
          fullWidth
          style={isSignUp ? classes.margin : null}
          onChange={(e) => {
            setFormData({
              ...formData,
              password: e.target.value,
            });
          }}
          value={formData.password}
        />

        {isSignUp && (
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="password"
            size="small"
            fullWidth
            onChange={(e) => {
              setFormData({
                ...formData,
                confPassword: e.target.value,
              });
            }}
            value={formData.confPassword}
          />
        )}

        <br />
        <br />

        <Button
          variant="contained"
          fullWidth
          style={{ ...classes.margin, backgroundColor: "#5bbfe0" }}
          onClick={handleSubmit}
        >
          {isSignUp ? "Signup" : "Login"}
        </Button>

        <Box>
          <Divider>
            <p>OR</p>
          </Divider>
        </Box>
        <br />
        <br />

        <Typography variant="body2" style={{ ...classes.link }}>
          {isSignUp ? "Signup" : "Login"} with Facebook
        </Typography>
        <br />

        <Typography variant="body2" style={{ cursor: "pointer" }}>
          Forgot Password ?
        </Typography>
      </Box>

      <Box
        style={{
          ...classes.main_box,
          padding: 10,
          paddingTop: 15,
          paddingBottom: 15,
          ...classes.margin,
        }}
      >
        {isSignUp ? (
          <Typography variant="body2" onClick={() => setIsSignUp(false)}>
            Already have an account ?{" "}
            <span style={{ ...classes.link }}>Login</span>
          </Typography>
        ) : (
          <Typography variant="body2" onClick={() => setIsSignUp(true)}>
            Don't have an account ?{" "}
            <span style={{ ...classes.link }}>Sign Up</span>
          </Typography>
        )}
      </Box>

      <Box style={{ width: 380 }}>
        <Typography
          variant="body2"
          style={{ textAlign: "center", ...classes.margin }}
        >
          Get the app.
        </Typography>

        <Box style={{ ...classes.flex }}>
          <img src={img.apple} alt="" style={{ width: 130, marginRight: 10 }} />
          <img src={img.playstore} alt="" style={{ width: 130 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginComponent;
