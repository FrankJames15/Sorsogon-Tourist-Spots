import React from "react";
import DeleteButton from "../buttons/DeleteButton";

function DeleteAction({ functions, url }) {
  const delete_onclick = async () => {
    const response = await fetch(
      // `http://localhost:5000/api/tourist-spots/${id}`,
      url,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      // Refresh the page
      window.location.reload();
    }
  };
  return (
    <>
      <DeleteButton
        onClick={() => {
          functions, delete_onclick();
        }}
        ml={3}
      />
    </>
  );
}

export default DeleteAction;
