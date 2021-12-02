import React, { useState } from "react";
import nextPage from "../assets/nextPage.svg";

const url = window.location.origin;
const GoToRank = () => {
  return (
    <div
      className="main-gotorank"
      onClick={() => {
        window.open(url + "?page=rank");
      }}
    >
      <div className="main-gotorank-container">
        <span className="main-gotorank-police">Classement</span>
        <div className="main-gotorank-icon-style">
          <img src={nextPage} />
        </div>
      </div>
    </div>
  );
};

export default GoToRank;
