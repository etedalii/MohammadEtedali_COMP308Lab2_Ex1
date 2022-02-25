import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import MainHeader from "../MainHeader/MainHeader";

import { faAdd } from "@fortawesome/free-solid-svg-icons";
import Button from "../UI/Button/Button";
import StudentAdd from "./StudentAdd";
import api from "../api";
import TableBody from "./TableBody";

const StudentList = (props) => {
  const [showAdd, setShowAdd] = useState(false);
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({});
  const [id, setId] = useState("");

  const fetchData = async () => {
    await api
      .getAllStudent()
      .then((result) => {
        setStudents(result.data);
      })
      .catch((error) => {
        console.log("error in fetch Data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddStudent = () => {
    setShowAdd(true);
  };

  const handleSaveData = async (data) => {
    if (data._id === "") {
      let payLoad = {
        studentnumber: data.studentnumber,
        firstname: data.firstname,
        lastname: data.lastname,
        phonenumber: data.phonenumber,
        city: data.city,
        email: data.email,
        program: data.program,
        address: data.address,
        password: data.password,
      };
      await api.insertStudent(payLoad).then((res) => {
        setShowAdd(false);
        fetchData();
        setStudent({});
        setId("");
      });
    } else {
      await api.updateStudentById(id, data).then((res) => {
        setShowAdd(false);
        setStudent({});
        setId("");
        fetchData();
      });
    }
  };

  const handleReturnClick = (data) => {
    setShowAdd(false);
    setStudent({});
    setId("");
  };

  const handleEdit = async (id) => {
    setId(id);
    const entity = await api.getStudentById(id);
    setStudent(entity.data);
    setShowAdd(true);
  };

  const handleDelete = (id) => {
    if (
      window.confirm(`Do tou want to delete the Student ${id} permanently?`)
    ) {
      api.deleteStudentById(id);
      window.location.reload();
    }
  };

  return (
    <React.Fragment>
      <MainHeader />
      <div className="container">
        {showAdd && (
          <StudentAdd
            saveData={handleSaveData}
            onCancel={handleReturnClick}
            _id={id}
            data={student}
          />
        )}
        {!showAdd && (
          <Button
            type="button"
            className="btn btn-primary"
            onClick={handleAddStudent}
          >
            Create New <FontAwesomeIcon icon={faAdd} />
          </Button>
        )}
        {!showAdd && (
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Student Number</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">City</th>
                <th scope="col">Program</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <TableBody
              data={students}
              onEditClick={handleEdit}
              onDeleteClick={handleDelete}
            />
          </table>
        )}
      </div>
    </React.Fragment>
  );
};

export default StudentList;
