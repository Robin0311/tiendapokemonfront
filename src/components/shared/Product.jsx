import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Product(props) {
  return (
    <Card className="p-10" style={{ width: "20rem" }}>
      <Card.Img
        className="product--image"
        src={props.photoimage}
        alt="product photoimage"
      />
      <Card.Body style={{ height: "10rem" }}>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          ${props.price}
        </Card.Subtitle>
        {/* <Card.Text>
  {props.description}
  </Card.Text> */}
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
