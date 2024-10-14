import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Comments = () => {
  const [comments, setCommentsValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleNext = () => {
    dispatch({ type: "SET_COMMENTS", payload: comments });
    history.push("/review");
  };

  return (
    <div>
      <h2>Any comments you want to leave?</h2>
      <input
        type="text"
        value={comments}
        onChange={(e) => setCommentsValue(e.target.value)}
        data-testid="input"
      />
      <button data-testid="next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Comments;
