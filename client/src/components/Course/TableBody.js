import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const TableBody = (props) => {
  const items = props.data.map((item) => (
    <tr key={item._id}>
      <td>{item.courseCode}</td>
      <td>{item.courseName}</td>
      <td>{item.section}</td>
      <td>{item.semester}</td>
      <td>
        <button className="btn btn-sm btn-primary me-1" onClick={() => props.onEditClick(item._id)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => props.onDeleteClick(item._id)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  ));

  return <tbody>{items}</tbody>;
};

export default TableBody;
