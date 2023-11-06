import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteNote } from "./redux/notesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function notes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notes = useSelector((state) => state.notes);

  const handleDelete = (i) => {
    dispatch(deleteNote({ i }));
  };

  let handleEdit = (i) => {
    navigate(`/edit/${i}`);
  };
  return (
    <>
      <div className="container-fluid height">
        <div>
          <h1>MY NOTES</h1>
        </div>
        <div className="d-flex flex-row flex-wrap note">
          {notes.map((e, i) => {
            return (
              <div className="card" id="card" key={i}>
                <div className="d-flex flex-row justify-content-between">
                  <h3>{e.title}</h3>
                  <div>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      onClick={() => handleDelete(i)}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      onClick={() => handleEdit(i)}
                    />
                  </div>
                </div>
                <p>{e.note}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default notes;
