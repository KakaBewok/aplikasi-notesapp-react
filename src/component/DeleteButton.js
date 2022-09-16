import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <div>
      <button className="DeleteButton" onClick={() => onDelete(id)}>
        DELETE
      </button>
    </div>
  );
}

export default DeleteButton;
