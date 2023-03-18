import React from "react";
import Layout from "../../components/Layout/Layout";
import "./registerredirect.css";
import { NavLink } from "react-router-dom";
const Registerredirect = () => {
  return (
    <>
      <Layout>
        <div className="Main">
          <section className="mentor">
            <h1 className="heading">
              For <span id="span-tag1">Alumni</span>
            </h1>
            <p className="paragraph">
              Support the students and guide them for a better futuristic
              approach.
            </p>
            <button className="button1">
              <NavLink
                to="/login"
                className="btn-get-started"
                style={{ textDecoration: "none" }}
              >
                Login
              </NavLink>
            </button>
            <div className="create_account-bottom">
              Don't have an account?
              <br />
              <p>
                <NavLink
                  to="/register"
                  className="btn-get-started"
                  style={{ textDecoration: "none" }}
                >
                  Sign up
                </NavLink>
              </p>
            </div>
          </section>
          <section className="student">
            <h1 className="heading">
              For <span id="span-tag2">Students</span>
            </h1>
            <p className="paragraph">
              Join student developers club,connect with the alumni , and prepare
              for interviews.
            </p>
            <button className="button1 student-button">
              {" "}
              <NavLink
                to="/login"
                className="btn-get-started"
                style={{ textDecoration: "none" }}
              >
                Login
              </NavLink>{" "}
            </button>
            <div className="create_account-bottom">
              Don't have an account?
              <br />
              <p>
                <NavLink
                  to="/register"
                  className="btn-get-started"
                  style={{ textDecoration: "none" }}
                >
                  Sign up
                </NavLink>
              </p>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Registerredirect;
