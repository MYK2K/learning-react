import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Loader from '../components/Loader';

function Product() {
  const {id} = useParams();
  const apiUrl = `https://5ef0d1f51faf160016b4cf96.mockapi.io/api/v1/products/${id}`;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setProduct(response.data);
        console.log(product);
      });
  }, [apiUrl]);

  if (product) {
    return (
      <Card>
        <Card.Img variant="top" src={product.images[0].imageUrl} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>
            <h3>${product.price}</h3>
          </Card.Text>
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
