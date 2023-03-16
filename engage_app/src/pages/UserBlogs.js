import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import Layout from "../components/Layout/Layout";

const REACT_APP_API = "http://localhost:8080";
const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  //get user blogs
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(
        `${REACT_APP_API}/api/v1/auth/user-blog/${id}`
      );
      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserBlogs();
  }, []);
  console.log(blogs);
  return (
    <>
      <Layout>
        <div>
          {blogs && blogs.length > 0 ? (
            blogs.map((blog) => (
              <BlogCard
                id={blog._id}
                isUser={true}
                title={blog.title}
                description={blog.description}
                name={blog.user.name}
                time={blog.createdAt}
              />
            ))
          ) : (
            <h1>You Havent Created a blog</h1>
          )}
        </div>
      </Layout>
    </>
  );
};

export default UserBlogs;
