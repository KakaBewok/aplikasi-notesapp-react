import React from "react";
import NotesList from "./NotesList";
import { getData } from "../utils/getData";
import NotesInput from "./NotesInput";
import { nanoid } from "nanoid";
import Swal from "sweetalert2";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);

    this.state = {
      notes: getData(),
    };
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });

    Swal.fire("Berhasil", "Catatan anda terhapus", "success");
  }
  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: `id-${nanoid(4)}`,
            title,
            body,
            archived: false,
            createdAt: "05-08-2022",
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="NotesApp">
        <h2>NOTES APP</h2>
        <p
          style={{
            marginLeft: "20px",
            fontSize: "0.8rem",
          }}
        >
          Jumlah tugas yang harus diselesaikan{" "}
          <strong>{this.state.notes.length}</strong>
        </p>
        <NotesInput addNotes={this.onAddNotesHandler} />
        <br />
        <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        <a
          href="https://www.instagram.com/_kkbwk"
          rel="noreferrer"
          target="_blank"
        >
          Noprizal - 2022
        </a>
      </div>
    );
  }
}

export default NotesApp;
