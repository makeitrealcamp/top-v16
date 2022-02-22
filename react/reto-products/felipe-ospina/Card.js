import React from "react";
// import "../App.css";

const Card = props => {
  return (
    <div className='card' style={{ backgroundColor: props.color }}>
      <img src={props.img} alt='' />
      <div className='card-info'>
        <h1>{props.title}</h1>
        <h2>{`$ ${props.price}`}</h2>
      </div>
    </div>
  );
};

export default Card;
