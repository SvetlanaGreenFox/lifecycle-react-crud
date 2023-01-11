import React from 'react';
import Note from './Note.js';

function ListNotes({ list }) {
  return (
    <div className="wrapper__list-notes">
      {list.length ? (
        list.map((item) => <Note id={item.id} content={item.content} />)
      ) : (
        <p>No notes</p>
      )}
    </div>
  );
}

export default ListNotes;