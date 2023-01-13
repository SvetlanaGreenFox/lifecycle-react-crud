import React from "react";
import Note from "./Note.js";

function ListNotes(props) {
  const { list, remove } = props;

  return (
    <div className="wrapper__list-notes">
      {list.length ? (
        list.map(({ id, content }) => {
          return (
						<div className="wrapper__note" key={id}>
            <div className="note">
						<button onClick={() => remove(id)} className="delete-note-btn">
                x
              </button>
              <Note content={content} />
            </div>
						</div>
          );
        })
      ) : (
        <p>No notes</p>
      )}
    </div>
  );
}

export default ListNotes;
