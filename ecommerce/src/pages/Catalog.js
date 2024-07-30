import React from 'react';
import { useLocation } from 'react-router-dom';
import products from '../product';
import '../styles//pageStyle/Catalog.css';

const Catalog = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get('category');
  const items = products[category] || [];

  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {items.length > 0 ? (
          items.map((product) => (
            <div key={product.id} className="group border p-4 rounded-lg shadow-sm">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt={product.name}
                  src={product.image}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
              <button
                // onClick={() => addToCart(product)}
                className="mt-4 rounded-md bg-yellow-500 text-white px-4 py-2 hover:bg-yellow-600"
              >
                + Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  </div>
  );
};

export default Catalog;