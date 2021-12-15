import React from "react";
import Card from "./Card";
import { productData } from "./data";

const CardsContainer = () => {
  return (
    <div className='card-container'>
      {productData.map(product => {
        return (
          <Card
            key={product.img}
            img={product.img}
            title={product.title}
            price={product.price}
            color={product.color ? product.color : "#fbedf9"}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
