import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }
  function deleteNote(id) {
    setNotes(
      notes.filter((note, index) => {
        return index !== id;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          onDelete={deleteNote}
          title={note.title}
          content={note.body}
          id={index}
          key={index}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
