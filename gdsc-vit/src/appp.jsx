Appp.jsx
import React, { useState } from 'react';
import Form from './form';

function Appp() {
  const [show, setShow] = useState(true);
  const [notes, setNotes] = useState([]);

  const handleSaveNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      {show && <Form onSaveNote={handleSaveNote} />}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? 'Hide Form' : 'Show Form'}
      </button>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <h3>{note.main}</h3>
            <p>{note.sub}</p>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appp;
