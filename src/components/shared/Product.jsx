import React from "react";

export default function Product(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.photoimage} alt="product photoimage" />
      <p>{props.name}</p>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>{props.type}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
}
