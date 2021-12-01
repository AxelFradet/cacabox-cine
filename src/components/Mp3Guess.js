import React, { useState } from "react";
import Player from "./Player";
import ReactAudioPlayer from "react-audio-player";
import search from "../assets/search.svg";

const Mp3Guess = () => {
  const [audio, setaudio] = useState(null);
  const [start, setStart] = useState(false);

  const handleaudioUpload = (event) => {
    setaudio(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="main-mp3-container">
      <div className="main-mp3-title-container">
        <span className="main-police-title">MP3 GUESS</span>
      </div>

      <div className="main-mp3-screen-container">
        <div className="main-mp3-screen-launcher">
          <ReactAudioPlayer
            muted
            src={audio}
            autoPlay
            controls
            style={{ width: "640px" }}
          />
        </div>
        <div className="main-mp3-setting-container">
          <div className="main-mp3-screen-setting">
            <label className="main-mp3-settings-search-container">
              <input
                style={{ display: "none" }}
                type="file"
                accept="son/*"
                onChange={handleaudioUpload}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mp3Guess;
