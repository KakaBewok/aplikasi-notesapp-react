import React from "react";

function NotesItemDate({ createdAt }) {
  return (
    <div className="NotesItem_date">
      <p>{createdAt}</p>
    </div>
  );
}
export default NotesItemDate;
