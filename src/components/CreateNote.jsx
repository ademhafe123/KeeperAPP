import React, { useState } from "react";

function CreateNote(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(newNote);
    setNewNote({ title: "", body: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          type="text"
          value={newNote.title}
          placeholder="Enter title"
        />
        <input
          onChange={handleChange}
          name="body"
          value={newNote.body}
          type="text"
          placeholder="Take a note..."
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateNote;
