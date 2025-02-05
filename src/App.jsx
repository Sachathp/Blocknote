import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import NoteEditor from './components/NoteEditor.jsx';

function App() {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleSave = (id, title, content) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, title, content } : note
    );
    setNotes(updatedNotes);
  };

  const handleAddNote = () => {
    const newNote = { id: Date.now(), title: "Nouvelle Note", content: "" };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote.id);
  };

  const handleDelete = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
    setSelectedNote(null); 
  };

  return (
    <div className="app-container">
      <Sidebar notes={notes} setSelectedNote={setSelectedNote} handleAddNote={handleAddNote} />
      <NoteEditor 
        note={notes.find((note) => note.id === selectedNote)} 
        handleSave={handleSave} 
        handleDelete={handleDelete} 
      />
    </div>
  );
}

export default App;

