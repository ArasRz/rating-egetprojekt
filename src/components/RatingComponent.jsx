import React from "react";
import { useState } from "react";
import ResultComponent from "./ResultComponent";
import VoteComponent from "./VoteComponent";
import ResetComponent from "./ResetComponent";

function RatingComponent() {
  const [rating, setRating] = useState(null);
  const [submit, setSubmit] = useState(false);

  const handleClick = (e) => {
    const getNumber = e.target.value;
    setRating(getNumber);
  };

  const handleReset = () => {
    setRating(null);
    setSubmit(false);
  };

  return (
    <>
      <div className="header-content">
        <div className="square">
          {submit ? (
            <>
              <ResultComponent rating={rating} />
              <ResetComponent reset={handleReset} />
            </>
          ) : (
            <>
            <p>How did we do?</p>
            <div>
                <VoteComponent className="rating-btn" onClick={handleClick} value={1}>1</VoteComponent>
                <VoteComponent className="rating-btn" onClick={handleClick} value={2}>2</VoteComponent>
                <VoteComponent className="rating-btn" onClick={handleClick} value={3}>3</VoteComponent>
                <VoteComponent className="rating-btn" onClick={handleClick} value={4}>4</VoteComponent>
                <button className="rating-btn" onClick={handleClick} value={5}>5</button>
            </div>

            <button
            disabled={rating === null}
            type="submit"
            className="submit-btn"
            onClick={() => setSubmit(true)}
            >
                SUBMIT
            </button>
        </>
          )}
        </div>
      </div>
    </>
  );
}

export default RatingComponent;
