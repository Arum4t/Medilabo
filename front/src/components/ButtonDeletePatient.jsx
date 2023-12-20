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
      <button className="buttonRed" onClick={() => setIsOpen(true)}>
        Delete
      </button>
      {isOpen && (
        <div className="validationDelete">
          <div className="validationDeleteText">Are you sure ?</div>
          <button
            className="buttonRed buttonDeleteConfirm"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button className="buttonBlue" onClick={() => setIsOpen(false)}>
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default ButtonDeletePatient;
