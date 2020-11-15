import React, { useState } from "react";

function CreateArea(props) {
  const [noteText, setNoteText] = useState({
    title: "",
    content: ""
  });

  function addNoteText(event) {
    const { name, value } = event.target;
    //const newValue : event.target.value;
    setNoteText((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(noteText);
    setNoteText({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={addNoteText}
          name="title"
          value={noteText.title}
          placeholder="Title"
        />
        <textarea
          onChange={addNoteText}
          name="content"
          value={noteText.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
