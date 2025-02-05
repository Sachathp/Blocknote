import React from "react";

function Sidebar({ notes, setSelectedNote, handleAddNote }) {
  return (
    <div className="sidebar">
      <button onClick={handleAddNote}>+ Nouvelle Note</button>
      <ul>
        {notes.map((note) => (
          <li key={note.id} onClick={() => setSelectedNote(note.id)}>
            <strong>{note.title}</strong>
            <p>{note.content.slice(0, 50)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;