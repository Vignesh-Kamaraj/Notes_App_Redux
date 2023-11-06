import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { addNote } from "./redux/notesSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function create() {
  const [title, setTitle] = useState();
  const [note, setNote] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({ title, note }));
    navigate("/notes");
  };
  return (
    <>
      <div className="container-fluid card">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Add a Note</h1>
        </div>
        <div className="row">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                name="note"
                placeholder="Take a note..."
                onChange={(e) => setNote(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default create;
