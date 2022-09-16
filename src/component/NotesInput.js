import React from "react";
import Swal from "sweetalert2";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);

    this.state = {
      title: "",
      body: "",
    };
  }

  onChangeTitle(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }
  onChangeContent(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }
  onSubmit(event) {
    event.preventDefault();

    if (this.state.title.length === 0 || this.state.body.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Catatan harus diisi.",
      });
    } else {
      this.props.addNotes(this.state);

      this.setState(() => {
        return {
          title: "",
          body: "",
        };
      });

      Swal.fire("Berhasil", "Catatan anda tersimpan", "success");
    }
  }

  render() {
    return (
      <div>
        <form className="FormInput" onSubmit={this.onSubmit}>
          <h3>Input Notes</h3>
          <input
            className="inputTitle"
            type="text"
            value={this.state.title}
            placeholder=" Write your title"
            onChange={this.onChangeTitle}
          />
          <br />
          <textarea
            className="textAreaContent"
            type="textarea"
            value={this.state.body}
            placeholder=" Write your notes"
            onChange={this.onChangeContent}
          />
          <br />
          <button type="submit" className="AddNotes">
            Add Notes
          </button>
        </form>
      </div>
    );
  }
}

export default NotesInput;
