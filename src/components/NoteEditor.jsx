import React from "react";
import { converter } from "./utils.jsx";

function NoteEditor({ note, handleSave, handleDelete }) {
  if (!note) {
    return <div className="note-editor">Sélectionnez une note...</div>;
  }

  const handleTitleChange = (e) => {
    handleSave(note.id, e.target.value, note.content);
  };

  const handleContentChange = (e) => {
    handleSave(note.id, note.title, e.target.value);
  };

  return (
    <div className="note-editor">
      <input
        type="text"
        value={note.title}
        onChange={handleTitleChange}
        placeholder="Titre de la note"
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: converter.makeHtml(note.content) }}
      />
      <textarea value={note.content} onChange={handleContentChange} />
      <button onClick={() => handleSave(note.id, note.title, note.content)}>Enregistrer</button>
      <button onClick={() => handleDelete(note.id)} style={{ backgroundColor: "red", color: "white" }}>
        Supprimer
      </button>
    </div>
  );
}

export default NoteEditor;

