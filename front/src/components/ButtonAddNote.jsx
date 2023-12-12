import * as React from "react";

const ButtonAddNote = ({ id }) => {
  //lien à styliser comme un btn

  return (
    <a className="ButtonAddNote" href={"/addNote/" + id}>
      Add a note
    </a>
  );
};
export default ButtonAddNote;
