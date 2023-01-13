import React from "react";
import Title from "./Title.js";
import ListNotes from "./ListNotes.js";
import AddNote from "./AddNote.js";
import axios from "axios";

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
    const response = await axios.get(`${process.env.REACT_APP_API_URL}`);
    this.setState({ notes: response.data });
  };

  addNote = async ({ content }) => {
    const responce = await axios.post(`${process.env.REACT_APP_API_URL}`, {
      content: content,
    });
    if (responce.status === 204) {
      this.loadNotes();
    }
  };

  remove = async (id) => {
    const responce = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });
   
    if (responce.status === 204) {
      this.loadNotes();
    }
  };

  render() {
    return (
      <div className="center">
        <section className="header">
          <Title update={this.loadNotes} />

          <AddNote sendNote={this.addNote} />
        </section>
        <ListNotes remove={this.remove} list={this.state.notes} />
      </div>
    );
  }
}

export default Form;
