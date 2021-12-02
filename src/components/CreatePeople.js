import React, { useState } from "react";
import People from "./People";

const CreatePeople = (props) => {
  const { addPeople } = props;
  const [pseudo, setPseudo] = useState("");

  function create(e) {
    if (e.key === "Enter") {
      addPeople(pseudo);
      setPseudo("");
    }
  }

  return (
    <div className="rank-create-container">
      <People />
      <div className="rank-create-input-container">
        <span className="main-police-title ">PSEUDO</span>
        <div className="rank-create-textfield-containe">
          <input
            type="text"
            className="rank-create-input"
            value={pseudo}
            onChange={(e) => {
              setPseudo(e.target.value);
            }}
            onKeyDown={create}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePeople;
