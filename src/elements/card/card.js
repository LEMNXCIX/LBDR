import React from "react";
import "./card.css";
const Card = ({ name, url,precio }) => {
  const validar = () => {
    if (!url) {
    
      return <img className="img-card none" src={url} alt={name} />;
    } else {
      
      return <img className="img-card" src={url} alt={name} />;
    }
  };
  return (
    <div id="CardBox">
      <p>{name}</p>
      {validar()}
      <h5>{precio}</h5>
    </div>
  );
};

export default Card;
