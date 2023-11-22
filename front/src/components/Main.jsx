import React from "react";
import ButtonPatient from "./ButtonPatient";
import { useState } from "react";

function Main() {
  const [patientDatas, setPatientDatas] = useState([]);
  return (
    <div>
      <ButtonPatient setPatientDatas={setPatientDatas} />
      <div>
        {patientDatas.map((patient) => (
          <div>{patient.firstName}</div>
        ))}
      </div>
    </div>
  );
}

export default Main;
