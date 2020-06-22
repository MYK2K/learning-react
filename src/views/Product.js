import React from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Loader from '../components/Loader';
import { Get } from '../hooks/HttpRequest';

function Product() {
  const {id} = useParams();
  const apiUrl = `https://5ef0d1f51faf160016b4cf96.mockapi.io/api/v1/products/${id}`;
  const product = Get(apiUrl);

  if (product.error) {
    return (
      <div className="text-center">
        <h4 className="text-danger">Product Not Found</h4>
      </div>
    )
  }

  if (product.data) {
    return (
      <Card>
        <Card.Img variant="top" src={product.data.images[0].imageUrl} />
        <Card.Body>
          <Card.Title>{product.data.name}</Card.Title>
          <Card.Text>{product.data.description}</Card.Text>
          <Card.Text>${product.data.price}</Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <div>
        <Loader />
      </div>
    );
  }
}

export default Product;
