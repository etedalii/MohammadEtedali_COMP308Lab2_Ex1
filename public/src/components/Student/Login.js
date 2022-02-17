import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Login.module.css";

const Login = (props) => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredAge, setenteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      // + is for convert to number
      return;
    }

    console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setenteredAge("");
    setenteredUsername("");
  };

  const handleUsername = (e) => {
    setenteredUsername(e.target.value);
  };

  const agehandleChanged = (e) => {
    setenteredAge(e.target.value);
  };

  return (
    <Card classes={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={handleUsername}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          value={enteredAge}
          onChange={agehandleChanged}
        />
        <Button type="submit">Login</Button>
      </form>
    </Card>
  );
};

export default Login;
