import React from 'react';
import { useLocation } from 'react-router-dom';
import products from '../product';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles//pageStyle/Catalog.css';

const Catalog = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get('category');
  const items = products[category] || [];

  return (
    <div>
      <div className="catalog">
        <h1>{category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Catalog'}</h1>
        <div className="product-list">
          {items.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;