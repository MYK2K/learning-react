import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function ProductCard(props) {
  const url = `/products/${props.product.id}`;
  return (
    <Card className="mt-4">
      <Card.Img variant="top" src={props.product.images[0].imageUrl} />
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>{props.product.description}</Card.Text>
        <Card.Text>${props.product.price}</Card.Text>
        <Button variant="primary" as={Link} to={url}>View More</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
