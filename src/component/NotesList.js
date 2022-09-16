import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete }) {
  if (notes.length === 0) {
    return (
      <div className="NotesEmpty">
        <h4>Notes Empty</h4>
      </div>
    );
  } else {
    return (
      <div className="NotesList">
        <h3>Notes List</h3>
        {notes.map((note) => (
          <NotesItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
        ))}
      </div>
    );
  }
}

export default NotesList;
