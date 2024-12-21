import React from 'react';
import "./PlayerCard.css"

const PlayerCard = ({image, year, name, title}) => {
  return (
    <div className="card">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img 
          src={image}
          alt="Player" 
          style={{width: "100%"}}
          className="image"
        />
      </div>
      <div className="info">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{name}</h2>
        <p className="text-gray-600">{year}</p>
        {title && <p>{title}</p>}
      </div>
    </div>
  );
};

export default PlayerCard;