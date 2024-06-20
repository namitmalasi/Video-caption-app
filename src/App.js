// src/App.js
import React, { useState } from "react";
import VideoInput from "./components/VideoInput";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";
import CaptionForm from "./components/CaptionForm";

const App = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);

  const handleUrlSubmit = (url) => {
    setVideoUrl(url);
    setCaptions([]);
  };

  const handleCaptionSubmit = (caption) => {
    setCaptions([...captions, caption]);
  };

  return (
    <div className="App">
      <h1>Video Caption App</h1>
      <VideoInput onUrlSubmit={handleUrlSubmit} />
      <CaptionForm onCaptionSubmit={handleCaptionSubmit} />
      {videoUrl && <VideoPlayer url={videoUrl} captions={captions} />}
    </div>
  );
};

export default App;
