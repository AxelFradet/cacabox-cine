import React, { useState } from "react";
import People from "./People";
import minus from "../assets/minus.svg";
import add from "../assets/add.svg";

const FullPeople = (props) => {
  console.log(props);
  const { id, pseudo, point, minPoint, addPoint } = props;
  const reducePseudo = pseudo.length > 8 ? pseudo.slice(0, 8) + ".." : pseudo;
  return (
    <div className="rank-fullPeople">
      <People firstLetter={pseudo.slice(0, 1)} />
      <span className="rank-police-pseudo ">{reducePseudo}</span>
      <div className="rank-fullPeople-point-container">
        <div
          className="rank-fullPeople-point-minus"
          onClick={() => minPoint(id)}
        >
          <img src={minus} />
        </div>
        <div className="rank-fullPeople-point-value">
          <span className="rank-fullPeople-point-police">{point}</span>
        </div>
        <div
          className="rank-fullPeople-point-minus"
          onClick={() => addPoint(id)}
        >
          <img src={add} />
        </div>
      </div>
    </div>
  );
};

export default FullPeople;
