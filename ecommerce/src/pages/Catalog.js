import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import products from '../product';
import '../styles/pageStyle/Catalog.css';
import Cart from '../pages/Cart';
import Filter from '../components/others/Filter';
import { addToCart, selectTotalItems } from '../redux/cartSlice';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Catalog = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const filter = useSelector((state) => state.filter);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get('category');
  const items = products[category] || [];

  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    let filtered = items;

    if (filter.searchQuery) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(filter.searchQuery.toLowerCase())
      );
    }

    if (filter.priceFrom) {
      filtered = filtered.filter(item => item.price >= filter.priceFrom);
    }

    if (filter.priceTo) {
      filtered = filtered.filter(item => item.price <= filter.priceTo);
    }

    if (filter.rating) {
      filtered = filtered.filter(item => item.rating === parseInt(filter.rating));
    }

    if (filter.status) {
      filtered = filtered.filter(item => item.status === filter.status);
    }

    setFilteredItems(filtered);
  }, [filter, items]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const totalItems = useSelector(selectTotalItems);


  return (
    <div className="bg-white">
      <Filter />
      <button
        onClick={toggleCart}
        className="fixed bottom-4 right-4 rounded-full bg-yellow-500 text-white p-4 shadow-lg hover:bg-yellow-600"
      >
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
        <ShoppingCartIcon className="h-5 w-5" aria-hidden="true" />
        <span className="sr-only">Remove</span>
        
      </button>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((product) => (
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
                  onClick={() => handleAddToCart(product)}
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
      {isCartOpen && <Cart onClose={toggleCart} cartItems={cartItems} />}
    </div>
  );
};

export default Catalog;