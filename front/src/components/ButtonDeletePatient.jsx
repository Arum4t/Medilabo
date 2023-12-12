import React, { useState } from "react";
import axios from "axios";

const ButtonDeletePatient = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/patients/${id}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Delete</button>
      {isOpen && (
        <div>
          <p>Are you sure you want to delete this patient?</p>
          <button onClick={handleDelete}>Yes, delete it</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </div>
      )}
    </>
  );
};

export default ButtonDeletePatient;
