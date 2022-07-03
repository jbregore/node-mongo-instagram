import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { InputAdornment, TextField } from "@mui/material";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Posts() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: "100%", border: '1px solid #d7d7d7' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="date"
      />
      <CardMedia
        component="img"
        height="310"
        image="https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2020/10/13/one-piece-pirate-warrior-4.jpg"
        alt=""
      />
      <CardContent>
        <Typography variant="body2">123 Likes</Typography>
        <br />
        <Typography variant="body2">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
        <br />
        <Typography
          variant="body2"
          style={{
            textDecoration: "underline",
            cursor: "pointer",
          }}
          expand={expanded.toString()}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          View all comments
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{ marginTop: -20 }}>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore>
          <BookmarkBorderIcon />
        </ExpandMore>
      </CardActions>

      <CardActions disableSpacing style={{ paddingLeft: 17,
    borderTop: '1px solid #d7d7d7',}}>
        {/* comment */}
        <TextField
          id="input-with-icon-textfield"
          placeholder="Write a comment"
          fullWidth
          style={{borderBottom: '1px solid #d7d7d7'}}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <SentimentSatisfiedAltIcon />
              </InputAdornment>
            ),
            endAdornment: (
                <InputAdornment position="start">
                  <SendIcon style={{color: '#4a80e1', cursor: 'pointer'}}/>
                </InputAdornment>
              ),
          }}
          variant="standard"
        />
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{/* <Comments /> */}</CardContent>
      </Collapse>
    </Card>
  );
}
