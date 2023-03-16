import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";
import Layout from "../components/Layout/Layout";
import { Label } from "@material-ui/icons";

const REACT_APP_API = "http://localhost:8080";
const CreateBlog = () => {
  const id = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
  });
  // input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${REACT_APP_API}/api/v1/auth/create-blog`,
        {
          title: inputs.title,
          description: inputs.description,
          user: id,
        }
      );
      if (data?.success) {
        toast.success("Blog Created");
        navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Layout>
        <div className="m-5 mt-3">
          <form onSubmit={handleSubmit}>
            <Box
              width={"50%"}
              border={3}
              borderRadius={10}
              padding={3}
              margin="auto"
              boxShadow={"10px 10px 20px #ccc"}
              display="flex"
              flexDirection={"column"}
              marginTop="30px"
            >
              <Typography
                variant="h3"
                textAlign={"center"}
                fontWeight="bold"
                padding={3}
                color="grey"
              >
                Create A Post
              </Typography>
              <InputLabel
                sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
              >
                Title
              </InputLabel>
              <TextField
                name="title"
                value={inputs.title}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                required
              />
              <InputLabel
                sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
              >
                Description
              </InputLabel>
              <TextField
                name="description"
                value={inputs.description}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                className="mb-4"
                rows={3}
                multiline="true"
                required
              />

              <Button type="submit" color="primary" variant="contained">
                SUBMIT
              </Button>
            </Box>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default CreateBlog;
