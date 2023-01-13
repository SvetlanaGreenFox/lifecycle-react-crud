import React, { useState } from "react";
// import _ from 'lodash';

function AddNote({ sendNote }) {
  const [state, setState] = useState({ content: "" });

  const handleChange = (e) => {
    const { value } = e.target;
    setState({ ...state, content: value });
  };

  function addNote(e) {
    e.preventDefault();
    if (state.content.length > 0) {
      sendNote(state);
      setState({ ...state, content: "" });
    }
  }

  return (
    <div className="wrapper__add-note">
      <h3>New Note</h3>
      <textarea value={state.content} onChange={handleChange}></textarea>
      <button className="add-note__btn" onClick={addNote}>
        Add
      </button>
    </div>
  );
}

export default AddNote;
