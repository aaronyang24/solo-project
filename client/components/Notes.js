import React from 'react';

const Notes = (props) => {
  // create listNotes to store each note object in an array
  const listNotes = props.notes.map((note) => {
    // make sure each note has a unique key
    return (
      <div className='notes' key={note.key}>
        <p>{note.text}</p>
        <button className='delete' onClick={() => props.deleteNote(note.key)}>
          Delete Note
        </button>
      </div>
    );
  });
  return <div>{listNotes}</div>;
};

export default Notes;
