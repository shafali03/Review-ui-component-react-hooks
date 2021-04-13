// /* eslint-disable */

import React, { useState } from "react";
import people from "../../data";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  // getting all the data from people array
  const { name, job, image, text } = people[index];

  return (
    <article>
      <div>
        <img src={image} alt={name} />
        <span>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft />
        </button>
        <button className="prev-btn">
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn">random</button>
    </article>
  );
};

export default Review;
