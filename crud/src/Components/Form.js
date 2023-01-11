/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Title from './Title.js';
import ListNotes from './ListNotes.js';
import AddNote from './AddNote.js';
import axios from 'axios';

function Form() {
  const [state, setState] = useState([]);

  // const addNote = (content) => {
  //   setState(state.concat(content));
  // };

	// const loadNotes = () => { 
  //   fetch(`${process.env.REACT_APP_API_URL}`, {
  //     method: 'GET',
  //     headers: {'Content-Type': 'application/json;charset=utf-8'}
  //   })
  //   .then(response => response.json()) 
  //   .then(arr => setState(state.concat(arr)))
  // }

	const addNote = (content) => {
		axios.post(`${process.env.REACT_APP_API_URL}`, content)
		.then(response => response.json())
		.catch(error => console.log(error));
	}

	const loadNotes = () => { // обновление
    axios.get(`${process.env.REACT_APP_API_URL}`)
    .then(response => response.json()) 
    .then(arr => setState(state.concat(arr)))
  }

  useEffect(() => {
    loadNotes();
  }, []);//componentDidMount

	// useEffect(() => {
	// console.log('hi');
	// }, [state]) //componentDidUpdate

  return (
    <div className="center">
      <Title />
      <ListNotes list={state} />
      <AddNote sendNote={addNote} />
    </div>
  );
}

export default Form;
