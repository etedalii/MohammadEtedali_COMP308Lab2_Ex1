import React from "react";
import { useHistory } from "react-router-dom";
import auth from "../auth/auth";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const handleCourseList = (event) => {
    event.preventDefault();
    props.history.push("/courselist");
  };

  const handleLogout = () => {
    auth.logout();
    props.history.push("/");
  };

  console.log(props.isLoggedIn);
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            {/* <a href="/courselist">Student</a> */}
            <button onClick={handleCourseList}>Course</button>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Student</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
