import React, { useState } from 'react';
import { FaQuoteRight, FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import data from './data';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState(data);

  const handleNext = () => {
    if (currentIndex < reviews.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); 
    }
  };

  const currentReview = reviews[currentIndex]; 

  return (
    <main>
      <div className="review">
        <div className="img-container">
          <img className="person-img" src={currentReview.image} alt={currentReview.name} />
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
        </div>
        <h4 className="author">{currentReview.name}</h4>
        <div className="job">{currentReview.job}</div>
        <p className="info">{currentReview.text}</p>

        <div>
          <button className="prev-btn" disabled={currentIndex === 0} onClick={handlePrev}>
            <FaArrowLeftLong />
          </button>
          <button className="next-btn" disabled={currentIndex === reviews.length - 1} onClick={handleNext}>
            <FaArrowRightLong />
          </button>
        </div>

        <button className="btn btn-hipster">Surprise Me</button>
      </div>
    </main>
  );
};

export default App;
