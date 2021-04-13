import React from "react";
import Review from "./components/Review/Review";

function App() {
  return (
    <section>
      <div className="container">
        <div className="title">
          <h2>Our Reviews</h2>
        </div>
      </div>
      <Review />
    </section>
  );
}

export default App;
