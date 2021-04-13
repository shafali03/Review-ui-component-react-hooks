import React from "react";
import Review from "./components/Review/Review";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline" />
        </div>
      </section>
      <Review />
    </main>
  );
}

export default App;
