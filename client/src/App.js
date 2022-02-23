import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Router,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import auth from "./components/auth/auth";
import CourseList from "./components/Course/CourseList";




function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/courselist" element={<CourseList />}></Route>

          <Route path="/" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
