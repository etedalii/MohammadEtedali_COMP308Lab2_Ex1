import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import MainHeader from "../MainHeader/MainHeader";

import { faAdd } from "@fortawesome/free-solid-svg-icons";
import Button from "../UI/Button/Button";
import StudentAdd from "./StudentAdd";
import api from "../api";
import TableBody from '../UI/Table/TableBody'

const StudentList = (props) => {
  const [showAdd, setShowAdd] = useState(false);
  const [courses, setCourse] = useState([]);
  const [course, setCourseUpdate] = useState({});
  const [id, setId] = useState("");

  const fetchData = async () => {
    await api
      .getAllCourse()
      .then((result) => {
        setCourse(result.data);
      })
      .catch((error) => {
        console.log("error in fetchData:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddCourse = () => {
    setShowAdd(true);
  };

  const handleSaveData = async (data) => {
    if (data._id === "") {
      let payLoad = {
        courseCode: data.courseCode,
        courseName: data.courseName,
        section: data.section,
        semester: data.semester,
      };
      await api.insertCourse(payLoad).then((res) => {
        setShowAdd(false);
        fetchData();
      });
    } else {
      await api.updateCourseById(id, data).then((res) => {
        setShowAdd(false);
        setCourseUpdate({});
        setId("");
        fetchData();
      });
    }
  };

  const handleReturnClick = (data) => {
    setShowAdd(false);
    setCourseUpdate({});
    setId("");
  };

  const handleEdit = async (id) => {
    setId(id);
    const course = await api.getCourseById(id);
    setCourseUpdate(course.data);
    setShowAdd(true);
  };

  const handleDelete = (id) => {
    if (
      window.confirm(`Do tou want to delete the Course ${id} permanently?`)
    ) {
      api.deleteCourseById(id);
      window.location.reload()
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
            data={course}
          />
        )}
        {!showAdd && (
          <Button
            type="button"
            className="btn btn-primary"
            onClick={handleAddCourse}
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
                <th scope="col"></th>
              </tr>
            </thead>
            <TableBody
              data={courses}
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
