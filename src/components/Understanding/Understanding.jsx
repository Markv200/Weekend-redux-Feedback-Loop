import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Understanding = () => {
  const [understanding, setUnderstandingValue] = useState("");
  const [error, setError] = useState(""); // State for error message
  const dispatch = useDispatch();
  const history = useHistory();

  const handleNext = () => {
    if (!understanding || understanding < 1 || understanding > 5) {
      setError("Please enter a value between 1 and 5."); // Set error message if input is invalid
      return;
    }

    setError(""); // Clear error if input is valid
    dispatch({ type: "SET_UNDERSTANDING", payload: understanding });
    history.push("/support");
  };

  return (
    <div>
      <h2>How well are you understanding the content?</h2>
      <input
        type="number"
        value={understanding}
        onChange={(e) => setUnderstandingValue(e.target.value)}
        data-testid="input"
        placeholder="1-5"
        required
        min="1"
        max="5"
      />
      {error && <p style={{ color: "red" }}>{error}</p>} 
      <button data-testid="next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Understanding;
