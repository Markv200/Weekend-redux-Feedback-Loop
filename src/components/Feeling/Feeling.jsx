import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Feeling = () => {
  const [feeling, setFeelingValue] = useState("");
  const [error, setError] = useState(""); // State for error message
  const dispatch = useDispatch();
  const history = useHistory();

  const handleNext = () => {
    if (!feeling || feeling < 1 || feeling > 5) {
      setError("Please enter a value between 1 and 5."); // Set error message if input is invalid
      return;
    }

    setError(""); // Clear error if input is valid
    dispatch({
      type: "SET_FEELING",
      payload: feeling,
    }); // Dispatch action to update Redux store
    history.push("/understanding"); // Move to the next step
  };

  return (
    <div>
      <h2>How are you feeling today?</h2>
      <input
        type="number"
        value={feeling}
        onChange={(e) => setFeelingValue(e.target.value)}
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

export default Feeling;
