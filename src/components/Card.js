import React from "react";

const Card = ({item}) => {

  return (
    <div className="card">
      <div className="card-left">
        <h5 className="card-title"> {item[0] - item[3]} </h5>
        <p className="card-text"> {item[1]}</p>
      </div>
      <div className="card-left">
        <h5 className="card-title"> {item[0]} </h5>
        <p className="card-text"> {item[1]}</p>
      </div>
    </div>
    
  );
};

export default Card;