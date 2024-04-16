import React from 'react';

const Card = ({ imagesAll, text, backgroundColor, textColor, shadow }) => {
  return (
    <>
      <div
        className="card-papa"
        style={{ backgroundColor: backgroundColor, boxShadow: shadow }}
      >
        <img src={imagesAll} alt="img" />
        <h2 style={{ color: textColor }}>{text}</h2>
      </div>
    </>
  );
};

export default Card;
