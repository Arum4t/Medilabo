import * as React from "react";

const ButtonAdd = ({ id, route, text }) => {
  //lien à styliser comme un btn

  return (
    <a className="linkButton ButtonAdd buttonGreen" href={route + id}>
      {text}
    </a>
  );
};
export default ButtonAdd;
