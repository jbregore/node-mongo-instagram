import React, {useState, useRef, useEffect} from "react";

import { Button, Card, CardActions, CardContent, InputAdornment, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useSelector, useDispatch } from "react-redux";

import { addPost } from "../utils/redux/action/postAction.js";

const CreatePost = () => {
  const dispatch = useDispatch();
  const photoSample = "https://cdn.onlinewebfonts.com/svg/img_234957.png";

  const [preview, setPreview] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();

  const [postText, setPostText] = useState("");

  const authData = JSON.parse(localStorage.getItem("profile"));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(authData);

    const formData = {
      userId: authData._id,
      postTitle: postText
    };

    if (image) {
      let uploadData = new FormData();
      uploadData.append("image", fileInputRef.current.files[0]);

      dispatch(addPost(formData, uploadData));
      setPostText("");
      // setIsEdit(false);
      setPreview("");
      setImage(null);
      return;
    } else {
      dispatch(addPost(formData, ""));
      setPostText("");
      // setIsEdit(false);
      setPreview("");
      setImage(null);
      return;
    }
    
  }

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
      <CardContent>
      <TextField
          id="input-with-icon-textfield"
          placeholder="Write a post"
          fullWidth
          style={{borderBottom: '1px solid #d7d7d7'}}
          multiline
          rows={2}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
                <InputAdornment position="start">
                  <img src={preview || photoSample} 
                  alt="" style={{width: 50, height: 50, objectFit: 'cover'}} />
                </InputAdornment>
              ),
            endAdornment: (
                <InputAdornment position="start">
                  <SendIcon style={{color: '#4a80e1', cursor: 'pointer'}} onClick={handleSubmit}/>
                </InputAdornment>
              ),
          }}
          onChange={(e) => {
            setPostText(e.target.value)
          }}
          value={postText}
          variant="standard"
        />
      </CardContent>
      <CardActions disableSpacing style={{ marginTop: -20 }}>
      <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          accept="image/*"
          onChange={previewFile}
        />

          <Button variant="contained" 
          style={{fontSize: 10, padding: "3px 8px"}}
          onClick={(event) => {
            event.preventDefault();
            fileInputRef.current.click();
          }}>choose</Button>
      </CardActions>
    </Card>
  );
};

export default CreatePost;
