import * as React from "react";

const ButtonBack = ({ id, route, text }) => {
  //lien à styliser comme un btn
  return (
    <a className="linkButton ButtonBack buttonBlue" href={route + id}>
      {text}
    </a>
  );
};

export default ButtonBack;
