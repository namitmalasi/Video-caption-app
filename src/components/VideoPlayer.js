// src/components/VideoPlayer.js
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url, captions }) => {
  const playerRef = useRef(null);
  const [currentCaption, setCurrentCaption] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime();
        const activeCaption = captions.find(
          (caption) => Math.abs(currentTime - caption.timestamp) < 1
        );
        setCurrentCaption(activeCaption ? activeCaption.text : "");
      }
    }, 500);

    return () => clearInterval(interval);
  }, [captions]);

  

  return (
    <div className="video-player">
      <ReactPlayer ref={playerRef} url={url} controls width="100%" />
      <div className="caption">{currentCaption}</div>
    </div>
  );
};

export default VideoPlayer;
