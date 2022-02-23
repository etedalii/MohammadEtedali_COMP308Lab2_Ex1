import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import MainHeader from "../MainHeader/MainHeader";

import { faTrashAlt, faEdit, faAdd } from "@fortawesome/free-solid-svg-icons";
import Button from "../UI/Button/Button";
import CourseAdd from "./CourseAdd";
import api from "../api";
import TableBody from "./TableBody";

const CourseList = (props) => {
  const [showAdd, setShowAdd] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    setLoading(true);
    await api.getAllCourse().then(result => {
        console.log(result.data)
        setCourse(result.data);
        setLoading(false);

    }).catch((error) => {
        console.log('error in fetchData:', error)
      });
    };  
    fetchData();

},[]);

  const handleAddCourse = () => {
    setShowAdd(true);
  };

  const handleSaveData = async (data) => {
    await api.insertCourse(data).then(res => {
      //window.location.href = `/movies/list`;
      setShowAdd(false);
  })
  }

  const handleReturnClick =(data) => {
    setShowAdd(false);
  }

  return (
    <React.Fragment>
      <MainHeader />
      <div className="container">
        {showAdd && <CourseAdd saveData={handleSaveData} onCancel={handleReturnClick} />}
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
                <th scope="col">Course Code</th>
                <th scope="col">Course Name</th>
                <th scope="col">Section</th>
                <th scope="col">Semester</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <TableBody data={courses} />
            {/* <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <button className="btn btn-sm btn-primary me-1">
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="btn btn-sm btn-danger">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            </tbody> */}
          </table>
        )}
      </div>
    </React.Fragment>
  );
};

export default CourseList;
