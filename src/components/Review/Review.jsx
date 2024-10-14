import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Review = () => {
  const feedback = useSelector((state) => state); // Fetch all feedback from the store
  const history = useHistory();

  const handleSubmit = () => {
    const feedbackPayload = {
      feeling: feedback.feelingStore,
      understanding: feedback.understandingStore,
      support: feedback.supportStore,
      comments: feedback.commentsStore,
    };

    // Log the data being sent to the server
    console.log("Submitting feedback:", feedbackPayload);

    axios
      .post("/api/feedback", feedbackPayload)
      .then(() => {
        history.push("/success");
      })
      .catch((err) => console.log("Error submitting feedback", err));
  };

  return (
    <div>
      <h2>Review Your Feedback</h2>
      <p>Feeling: {feedback.feelingStore}</p>
      <p>Understanding: {feedback.understandingStore}</p>
      <p>Support: {feedback.supportStore}</p>
      <p>Comments: {feedback.commentsStore}</p>
      <button data-testid="next" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Review;

