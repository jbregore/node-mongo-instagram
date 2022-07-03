import { Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";

import FileUploadIcon from "@mui/icons-material/FileUpload";

const ProfileInfo = () => {
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();

  const profileSample =
    "https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png";

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const previewFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    } else {
      setImage(null);
    }
  };


  return (
    <Card sx={{ width: "100%", border: "1px solid #d7d7d7" }}>
      <CardContent style={{textAlign: 'center'}}>
        <img
          src={preview || profileSample}
          alt=""
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            objectFit: "cover",
            marginTop: -10,
          }}
        />
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          accept="image/*"
          onChange={previewFile}
        />

        <FileUploadIcon
          style={{
            cursor: "pointer",
            backgroundColor: "#efefef",
            borderRadius: 10,
            marginLeft: -10,
          }}
          onClick={(event) => {
            event.preventDefault();
            fileInputRef.current.click();
          }}
        />
      </CardContent>
      <CardActions disableSpacing style={{ flexDirection: "column" }}>
        {/* <Typography variant="h6" color="text.secondary">
          username
        </Typography> */}
        <TextField
          id="input-with-icon-textfield"
          fullWidth
          style={{borderBottom: '1px solid #d7d7d7'}}
          multiline
          variant="standard"
          value="username"
          InputProps={{
            inputProps: {
                style: { textAlign: "center" },
            }
        }}
        /><br />
        <Button variant="contained" size="small">Save changes</Button>
      </CardActions>
    </Card>
  );
};

export default ProfileInfo;
