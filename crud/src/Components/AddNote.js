import React, { useState } from 'react';
import _ from 'lodash';

function AddNote({ sendNote }) {
  const [state, setState] = useState({ content: '', id: null });

  const handleChange = (e) => {
    const key = _.uniqueId();
		console.log(key);
    const { value } = e.target;
    setState({ ...state, content: value, id: key });
  };

  function addNote(e) {
    e.preventDefault();

    sendNote(state);
    setState({ ...state, content: '', id: null });
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