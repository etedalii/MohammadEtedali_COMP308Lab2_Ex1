import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import auth from "./components/auth/auth";
import CourseList from "./components/Course/CourseList";

function App() {
  return (
    <div className="wrapper">
      <React.Fragment>
        <MainHeader/>
          <main>
            <BrowserRouter>
              <Switch>
                <Route
                  path="/home"
                  render={(data) =>
                    auth.getLogInStatus() ? (
                      <Home {...data}></Home>
                    ) : (
                      <Redirect to={{ pathname: "/" }}></Redirect>
                    )
                  }
                ></Route>
                {/* <Route path="/courselist" render={data=>auth.getLogInStatus()?( <CourseList {...data}></CourseList>): (<Redirect to={{pathname:'/'}}></Redirect>)}></Route> */}
                <Route
                  path="/courselist"
                  render={(data) => <CourseList {...data}></CourseList>}
                ></Route>
                <Route exact path="/" component={Login}></Route>
              </Switch>
            </BrowserRouter>
          </main>
      </React.Fragment>
    </div>
  );
}

export default App;
