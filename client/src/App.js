import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import CourseList from "./components/Course/CourseList";
import CourseAdd from "./components/Course/CourseAdd";
import StudentList from "./components/Student/StudentList";
import StudentAdd from "./components/Student/StudentAdd";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/courselist" element={<CourseList />}></Route>
          <Route path="/courseadd" element={<CourseAdd />}></Route>
          <Route path="/studentlist" element={<StudentList />}></Route>
          <Route path="/studentadd" element={<StudentAdd />}></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
