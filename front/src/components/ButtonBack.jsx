import * as React from "react";

const ButtonBack = ({ id, route, text }) => {
  //lien à styliser comme un btn
  return (
    <a className="ButtonBack" href={route + id}>
      {text}
    </a>
  );
};

export default ButtonBack;
