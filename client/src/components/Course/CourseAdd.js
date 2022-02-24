import React, { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import classes from "./CourseAdd.module.css";

const CourseAdd = (props) => {
  const [enteredCourseCode, setEnterCourseCode] = useState("");
  const [courseCodeIsValid, setCourseCodeIsValid] = useState();
  const [enteredCourseName, setEnterCourseName] = useState("");
  const [courseNameIsValid, setCourseNameIsValid] = useState();
  const [enteredSection, setEnterSection] = useState("");
  const [enteredSemester, setEnterSemester] = useState("");

  useEffect(() => {
    if (props._id !== "") {
      setEnterCourseCode(props.data.data.courseCode);
      setEnterCourseName(props.data.data.courseName);
      setEnterSection(props.data.data.section);
      setEnterSemester(props.data.data.semester);
    }
  }, []);

  const courseCodeChangeHandler = (event) => {
    setEnterCourseCode(event.target.value.trim());
  };

  const validateCourseCodeHandler = (event) => {
    setCourseCodeIsValid(event.target.value.trim() !== "");
  };

  const courseNameChangeHandler = (event) => {
    setEnterCourseName(event.target.value.trim());
  };

  const validateCourseNameHandler = (event) => {
    setCourseNameIsValid(event.target.value.trim() !== "");
  };

  const sectionChangeHandler = (event) => {
    setEnterSection(event.target.value.trim());
  };

  const semesterChangeHandler = (event) => {
    setEnterSemester(event.target.value.trim());
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const date = {
      _id: props._id,
      courseCode: enteredCourseCode,
      courseName: enteredCourseName,
      section: enteredSection,
      semester: enteredSemester,
    };
    props.saveData(date, );

    setEnterCourseCode("");
    setEnterCourseName("");
    setEnterSection("");
    setEnterSemester("");
  };

  return (
    <React.Fragment>
      <Card>
        <div className="text-center">
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="col-6">
                <div
                  className={`m-0${classes.control} ${
                    courseCodeIsValid === false ? classes.invalid : ""
                  }`}
                >
                  <Input
                    id="courseCode"
                    label="Course Code"
                    type="text"
                    isValid={courseCodeIsValid}
                    value={enteredCourseCode}
                    onChange={courseCodeChangeHandler}
                    onBlur={validateCourseCodeHandler}
                  />
                </div>

                <div
                  className={`${classes.control} ${
                    courseNameIsValid === false ? classes.invalid : ""
                  }`}
                >
                  <Input
                    id="courseName"
                    label="Course Name"
                    type="text"
                    isValid={courseNameIsValid}
                    value={enteredCourseName}
                    onChange={courseNameChangeHandler}
                    onBlur={validateCourseNameHandler}
                  />
                </div>

                <Input
                  id="section"
                  label="Section"
                  type="text"
                  value={enteredSection}
                  onChange={sectionChangeHandler}
                />
                <Input
                  id="semester"
                  label="Semester"
                  type="text"
                  value={enteredSemester}
                  onChange={semesterChangeHandler}
                />

                <Button type="submit" className="mb-2">
                  Save
                </Button>
                <Button
                  type="Button"
                  className="ms-1 mb-2"
                  onClick={props.onCancel}
                >
                  Return
                </Button>
              </div>
              <div className="col-6"></div>
            </div>
          </form>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default CourseAdd;
