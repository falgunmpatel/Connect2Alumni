import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const REACT_APP_API = "http://localhost:8080";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  //get blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(`${REACT_APP_API}/api/v1/auth/all-blog`);
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    <Layout>
      <div>
        {blogs &&
          blogs.map((blog) => (
            <BlogCard
              id={blog?._id}
              isUser={localStorage.getItem("userId") === blog?.user?._id}
              title={blog?.title}
              description={blog?.description}
              username={blog?.user?.username}
              time={blog.createdAt}
            />
          ))}
      </div>
    </Layout>
  );
};

export default Blogs;
