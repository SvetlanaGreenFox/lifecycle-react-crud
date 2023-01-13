import React from "react";
import Note from "./Note.js";
// import axios from "axios";

function ListNotes(props) {
  const { list, remove } = props;

  // function removeNote = async (id) => {
  // 	console.log(id)
  //   const responce = await axios.delete(
  //     `${process.env.REACT_APP_API_URL}/:${id}`
  //   );
  //   if (responce) {
  //     this.loadNotes();
  //   }
  // };

  // function removeElem(id) {
  //   remove(id);
  // }

  return (
    <div className="wrapper__list-notes">
      {list.length ? (
        list.map(({ id, content }) => {
          return (
            <div className="wrapper__note" key={id}>
              <Note content={content} />
              <button onClick={() => remove(id)} className="delete-note-btn">
                x
              </button>
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
