import React, { useState } from "react";
const SingleCard = () => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <style jsx={true}>
        {`
          .bgColor {
            background-color: #e9ecef;
          }
        `}
      </style>
      <div
        className="card"
        style={{ width: "18rem", cursor: "pointer" }}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <img
          className="card-img-top"
          src="https://drop.ndtv.com/homepage/ndtv_sports/images/ipl.png"
          alt="Card_cap"
        />
        <div class="card-body" className={hover ? "bgColor" : null}>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
};
export default SingleCard;
