import React from 'react';

function Note({ id, content }) {
  return (
    <div key={id} className="wrapper__note">
      <button className="rm delete-note-btn">x</button>
      <div className="note__description">{content}</div>
    </div>
  );
}

export default Note;
