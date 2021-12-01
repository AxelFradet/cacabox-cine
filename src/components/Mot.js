import React, { useState } from "react";
import iconDelete from "../assets/delete.svg";

const Mot = (props) => {
  const [word, setWord] = useState("");
  let { id, show, isEdited, reset, setReset } = props;

  if (show > id) {
    return (
      <div className="main-mot-container">
        {isEdited ? (
          <div className="main-mot-edit-container">
            <input
              className="main-mot-police-input"
              autoFocus
              value={word}
              onChange={(e) => {
                setWord(e.target.value);
              }}
            />
            <img
              src={iconDelete}
              style={{ cursor: "pointer" }}
              onClick={() => setWord("")}
            />
          </div>
        ) : (
          <span className="main-mot-police">{word}</span>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default Mot;
