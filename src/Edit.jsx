import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import { editNote } from "./redux/notesSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const notes = useSelector((state) => state.notes);
  const { id } = useParams();
  const existingNote = notes[id];
  const { title, note } = existingNote;
  const [title1, setTitle] = useState(title);
  const [note1, setNote] = useState(note);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editNote({
        id,
        title: title1,
        note: note1,
      })
    );
    navigate("/notes");
  };
  return (
    <>
      <div className="height">
        <div className="card edit">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Edit</h1>
          </div>
          <div className="row">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title1}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  name="note"
                  placeholder="Take a note..."
                  value={note1}
                  onChange={(e) => setNote(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
