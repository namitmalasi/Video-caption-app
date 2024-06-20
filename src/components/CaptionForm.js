// src/components/CaptionEntry.js
import React, { useState } from "react";

const CaptionForm = ({ onCaptionSubmit }) => {
  const [text, setText] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCaptionSubmit({ text, timestamp: parseFloat(timestamp) });
    setText("");
    setTimestamp("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Caption:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Timestamp (seconds):
        <input
          type="text"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
        />
      </label>
      <button type="submit">Add Caption</button>
    </form>
  );
};

export default CaptionForm;
