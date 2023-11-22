import React, { useState } from "react";
import axios from "axios";

function ButtonPatient({ setPatientDatas }) {
  function onClick() {
    axios
      .get("http://localhost:8080/patients")
      .then((response) => setPatientDatas(response.data));
  }
  return (
    <div>
      <button type="submit" onClick={() => onClick()}>
        patientList
      </button>
    </div>
  );
}

export default ButtonPatient;
