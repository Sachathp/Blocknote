import React from "react";
import { converter } from "./utils.jsx";


function NoteEditor({ note, handleSave }) {
  if (!note) {
    return <div className="note-editor">Sélectionnez une note...</div>;
  }

  const handleChange = (e) => {
    handleSave(note.id, e.target.value);
  };

  return (
    <div className="note-editor">
      <h2>{note.title}</h2>
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: converter.makeHtml(note.content) }}
      />
      <textarea value={note.content} onChange={handleChange} />
    </div>
  );
}

export default NoteEditor;
