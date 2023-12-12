import * as React from "react";

const ButtonBackDetails = ({ id }) => {
  //lien à styliser comme un btn
  return (
    <a className="ButtonBackHome" href={"/details/" + id}>
      Back
    </a>
  );
};

export default ButtonBackDetails;
