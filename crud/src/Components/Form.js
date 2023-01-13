import React from "react";
import Title from "./Title.js";
import ListNotes from "./ListNotes.js";
import AddNote from "./AddNote.js";
import axios from "axios";
// import Note from "./Note.js";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = async () => {
		console.log('ho');
    const response = await axios.get(`${process.env.REACT_APP_API_URL}`);
    this.setState({ notes: response.data });
  };

  addNote = async ({ content }) => {
		console.log(content);
    const responce = await axios.post(
      `${process.env.REACT_APP_API_URL}`,
      { 'content': content}
    );
    if (responce.status === 204) {
      this.loadNotes();
    }
  };

  remove = async (id) => {
		console.log(id);
    const responce = await axios.delete(
      `${process.env.REACT_APP_API_URL}/{${id}}`
    );
    // if (responce) {
    //   this.loadNotes();
    // }
		// fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
    //   method: 'DELETE',
    //   headers: {'Content-Type': 'application/json;charset=utf-8'}
    // })
    // .then(responce => console.log(responce))
    // .then(id => this.setState(prevNotes => prevNotes.filter( o => o.id !== id)))
		console.log(responce);
		if (responce.status === 204) {
      this.loadNotes();
    }
  };

  render() {
    return <div className="center">
      <Title update={this.loadNotes} />
      <ListNotes remove={this.remove} list={this.state.notes} />
      <AddNote sendNote={this.addNote} />
    </div>
  }

  // render() {
  //   return <div className="center">
  //     <div className="center__title">
  //       <h2 className="title">Notes</h2>
  //       <img onClick={this.loadNotes} className="title__reload" src="" alt="" />
  //     </div>
  //     <div className="wrapper__list-notes">
  //       {this.state.notes.length ? (
  //         this.state.notes.map((item) => {
  //           return (
  //             <>
  //               <Note content={item.content} />
  //               <button
  //                 onClick={this.remove(item.id)}
  //                 className="delete-note-btn"
  //               >
  //                 x
  //               </button>
  //             </>
  //           );
  //         })
  //       ) : (
  //         <p>No notes</p>
  //       )}
  //     </div>
	// 		<AddNote sendNote={this.addNote} />
  //   </div>;
  // }
}

export default Form;
