// src/components/VideoInput.js
import React, { useState } from "react";

const VideoInput = ({ onUrlSubmit }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onUrlSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Video URL:
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <button type="submit">Load Video</button>
    </form>
  );
};

export default VideoInput;
