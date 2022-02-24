import React from "react";
import { useNavigate } from "react-router-dom";
import auth from "../auth/auth";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  let navigate = useNavigate();

  const handleCourseList = (event) => {
    event.preventDefault();
    navigate("/courselist");
  };

  const handleStudentList = (event) => {
    event.preventDefault()
    navigate('/studentlist')
  }

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="#" onClick={handleCourseList}>Course</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="#" onClick={handleStudentList}>Student</a>
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
