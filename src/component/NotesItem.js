import React from "react";
import NotesItemTitle from "./NotesItemTitle";
import NotesItemContent from "./NotesItemContent";
import DeleteButton from "./DeleteButton";
import NotesItemDate from "./NotesItemDate";

function NotesItem({ title, createdAt, body, id, onDelete }) {
  return (
    <div className="NotesItem">
      <NotesItemTitle title={title} />
      <NotesItemDate createdAt={createdAt} />
      <NotesItemContent body={body} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}
export default NotesItem;
