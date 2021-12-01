import React, { useState } from "react";
import ReactPlayer from "react-player";
import search from "../assets/search.svg";
import pause from "../assets/pause.svg";
import play from "../assets/play.svg";

const ActorGuess = () => {
  const [video, setVideo] = useState(null);
  const [start, setStart] = useState(false);

  const handleVideoUpload = (event) => {
    setVideo(URL.createObjectURL(event.target.files[0]));
  };
  console.log(video);
  return (
    <div className="main-actor-container">
      <span className="main-police-title ">ACTOR GUESS</span>
      <div className="main-actor-screen">
        <ReactPlayer
          muted
          loop
          playing={start}
          url={video}
          width="100%"
          height="100%"
        />
      </div>
      <div className="main-actor-settings">
        <div className="main-actor-settings-container">
          <label className="main-actor-settings-search-container">
            <input
              style={{ display: "none" }}
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
            />
          </label>
          <img
            src={play}
            style={{ cursor: "pointer" }}
            onClick={() => {
              video ? setStart(true) : null;
            }}
          />
          <img
            src={pause}
            style={{ cursor: "pointer" }}
            onClick={() => setStart(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ActorGuess;
