import React from "react";

const Card = ({item}) => {

  return (
    
    <div className="card">
      <div className="card-left">
        <h5 className="card-title">{item[4]} - {item[5]}</h5>
        <h6 className="card-text">{item[0]} - {item[3].slice(6, 10)}</h6>
      </div>
      <div className="card-right">
        <h5 className="card-title">Email: {item[2]} </h5>
        <p className="card-text"></p>
      </div>
    </div>
    
  );
};

export default Card;