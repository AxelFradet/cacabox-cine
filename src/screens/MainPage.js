import React from "react";
import ActorGuess from "../components/ActorGuess";
import FilmEn4Mots from "../components/FilmEn4Mots";
import Mp3Guess from "../components/Mp3Guess";
import GoToRank from "../components/GoToRank";
import minia from "../assets/minia.png";

export default class MainPage extends React.Component {
  render() {
    return (
      <div className="main-backgroundgrey">
        <div className="main-backgroundblue">
          <div className="main-logo-container">
            <img className="main-logo-style" src={minia} />
          </div>
          <div className="main-container">
            <div className="main-container-top">
              <ActorGuess />
              <FilmEn4Mots />
            </div>
            <div className="main-container-bot">
              <Mp3Guess />
            </div>
            <div className="main-container-footer">
              <GoToRank />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
