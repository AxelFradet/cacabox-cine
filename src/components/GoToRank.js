import React, { useState } from "react";
import nextPage from "../assets/nextPage.svg";

const url = window.location.href;

const GoToRank = () => {
  return (
    <div
      className="main-gotorank"
      onClick={() => {
        window.open(url);
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
