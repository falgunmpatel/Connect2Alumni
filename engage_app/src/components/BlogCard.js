import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BlogCard({
  title,
  description,
  time,
  id,
  image,
  isUser,
  name,
}) {
  const navigate = useNavigate();
  console.log(name);
  const handleEdit = () => {
    navigate(`/blog-details/${id}`);
  };
  const REACT_APP_API = "http://localhost:8080";

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(
        `${REACT_APP_API}/api/v1/auth/delete-blog/${id}`
      );
      if (data?.success) {
        alert("Blog Deleted");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      sx={{
        borderRadius: "10px",
        borderColor: "Black",
        width: "40%",
        margin: "auto",
        mt: 2,
        padding: 2,
        maxWidth: 500,
        minHeight: 300,
        boxShadow: "5px 5px 10px #ccc",
        ":hover:": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      {isUser && (
        <Box display={"flex"}>
          <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
            <ModeEditIcon color="info" />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={
          <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
            {name}
          </Typography>
        }
        subheader={<Typography level="body2">{time}</Typography>}
      />
      {image == " " ? (
        <></>
      ) : (
        <>
          <CardMedia
            component="img"
            height="300"
            image={image}
            alt="Post Image"
          />
        </>
      )}

      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
