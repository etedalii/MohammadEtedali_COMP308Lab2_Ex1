import React, { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import classes from "./StudentAdd.module.css";

const StudentAdd = (props) => {
  const [enteredStudentNumber, setEnterStudentNumber] = useState("");
  const [studentNumberIsValid, setstudentNumberIsValid] = useState();
  const [enteredFirstName, setEnterFirstName] = useState("");
  const [firstNameIsValid, setFirstNameIsValid] = useState();
  const [enteredLastName, setEnterLastName] = useState("");
  const [lastNameIsValid, setLastNameIsValid] = useState();
  const [enteredPhoneNumber, setEnterPhoneNumber] = useState("");
  const [enteredCity, setEnterCity] = useState("");
  const [enteredAddress, setAddress] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [enteredProgram, setProgram] = useState("");

  useEffect(() => {
    if (props._id !== "") {
      setEnterStudentNumber(props.data.data.studentnumber);
      setEnterFirstName(props.data.data.firstname);
      setEnterLastName(props.data.data.lastname);
      setEnterPhoneNumber(props.data.data.phonenumber);
      setEnterCity(props.data.data.city);
      setAddress(props.data.data.address);
      setPassword(props.data.data.password);
      setEmail(props.data.data.email);
      setProgram(props.data.data.program);
    }
  }, []);

  const studentNumberChangeHandler = (event) => {
    setEnterStudentNumber(event.target.value.trim());
  };

  const validateStudentNumberHandler = (event) => {
    setstudentNumberIsValid(event.target.value.trim() !== "");
  };

  const firstNameChangeHandler = (event) => {
    setEnterFirstName(event.target.value.trim());
  };

  const validateFirstNameHandler = (event) => {
    setFirstNameIsValid(event.target.value.trim() !== "");
  };

  const lastNameChangeHandler = (event) => {
    setEnterLastName(event.target.value.trim());
  };

  const validateLastNameHandler = (event) => {
    setLastNameIsValid(event.target.value.trim() !== "");
  };

  const phoneChangeHandler = (event) => {
    setEnterPhoneNumber(event.target.value.trim());
  };

  const cityChangeHandler = (event) => {
    setEnterCity(event.target.value.trim());
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value.trim());
  };

  const programChangeHandler = (event) => {
    setProgram(event.target.value.trim());
  };

  const addressChangeHandler = (event) => {
    setAddress(event.target.value.trim());
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value.trim());
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const date = {
      _id: props._id,
      studentnumber: enteredStudentNumber,
      firstname: enteredFirstName,
      lastname: enteredLastName,
      phonenumber: enteredPhoneNumber,
      city: enteredCity,
      email: enteredEmail,
      program: enteredProgram,
      address: enteredAddress,
      password: enteredPassword
    };

    props.saveData(date);

    setEnterStudentNumber("");
    setEnterFirstName("");
    setEnterLastName("");
    setEnterPhoneNumber("");
    setEnterCity("");
    setEmail('')
    setProgram('')
    setAddress('')
    setPassword('')
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
                    studentNumberIsValid === false ? classes.invalid : ""
                  }`}
                >
                  <Input
                    id="studentnumber"
                    label="Student Number"
                    type="text"
                    isValid={studentNumberIsValid}
                    value={enteredStudentNumber}
                    onChange={studentNumberChangeHandler}
                    onBlur={validateStudentNumberHandler}
                  />
                </div>

                <div
                  className={`m-0${classes.control} ${
                    firstNameIsValid === false ? classes.invalid : ""
                  }`}
                >
                  <Input
                    id="firstname"
                    label="First Name"
                    type="text"
                    isValid={firstNameIsValid}
                    value={enteredFirstName}
                    onChange={firstNameChangeHandler}
                    onBlur={validateFirstNameHandler}
                  />
                </div>

                <div
                  className={`m-0${classes.control} ${
                    lastNameIsValid === false ? classes.invalid : ""
                  }`}
                >
                  <Input
                    id="lastname"
                    label="Last Name"
                    type="text"
                    isValid={lastNameIsValid}
                    value={enteredLastName}
                    onChange={lastNameChangeHandler}
                    onBlur={validateLastNameHandler}
                  />
                </div>

                <Input
                  id="phonenumber"
                  label="Phone Number"
                  type="tel"
                  value={enteredPhoneNumber}
                  onChange={phoneChangeHandler}
                />

                <Input
                  id="email"
                  label="E-Mail"
                  type="email"
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                />

                <Input
                  id="program"
                  label="Program"
                  type="text"
                  value={enteredProgram}
                  onChange={programChangeHandler}
                />
                <Input
                  id="city"
                  label="City"
                  type="text"
                  value={enteredCity}
                  onChange={cityChangeHandler}
                />
                <Input
                  id="address"
                  label="Address"
                  type="text"
                  value={enteredAddress}
                  onChange={addressChangeHandler}
                />
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  value={enteredPassword}
                  onChange={passwordChangeHandler}
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
              <div className=""></div>
            </div>
          </form>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default StudentAdd;