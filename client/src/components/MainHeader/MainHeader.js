import React, { useEffect, useState } from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import auth from "../auth/auth";

const MainHeader = (props) => {
  const [loggedInUser, setloggedInUser] = useState();
  useEffect(() => {
    const islogin = auth.getToken();
    setloggedInUser(islogin);
  }, []);

  return (
    <React.Fragment>
      <header className={classes["main-header"]}>
        <a href="/home"> <h6>COMP 308 Lab 2 - Mohammad Etedali</h6></a>
        <Navigation isLoggedIn={loggedInUser} />
      </header>
    </React.Fragment>
  );
};

export default MainHeader;
