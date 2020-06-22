import React from 'react';
import Loader from '../components/Loader';
import ProductCard from '../components/ProductCard';
import { Get } from '../hooks/HttpRequest';


function Home() {
  const apiUrl = 'https://5ef0d1f51faf160016b4cf96.mockapi.io/api/v1/products?page=1&limit=10';
  const products = Get(apiUrl);

  if (products.error) {
    return (
      <div className="text-center">
        <h4 className="text-danger">Products Not Found</h4>
      </div>
    )
  }

  if (products.data) {
    return (
      <div>
        {products.data.map((product) => {
          return <ProductCard key={product.id} product={product}/>
        })}
      </div>
    );
  } else {
    return (
      <div>
        <Loader />
      </div>
    );
  }
}

export default Home;
