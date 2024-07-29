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
  //   <div className="catalog-container">
  //   <div className="filter-section">
  //     <div className="filter-group">
  //       <h3>Keywords</h3>
  //       <div className="keywords">
  //         <span>Spring</span>
  //         <span>Smart</span>
  //         <span>Modern</span>
  //       </div>
  //     </div>
  //     <div className="filter-group">
  //       <h3>Label</h3>
  //       <div className="checkbox-group">
  //         <label><input type="checkbox" /> Description</label>
  //         <label><input type="checkbox" /> Label</label>
  //         <label><input type="checkbox" /> Label</label>
  //       </div>
  //     </div>
  //     <div className="filter-group">
  //       <h3>Price</h3>
  //       <input type="range" min="0" max="100" />
  //     </div>
  //     <div className="filter-group">
  //       <h3>Color</h3>
  //       <div className="checkbox-group">
  //         <label><input type="checkbox" /> Label</label>
  //         <label><input type="checkbox" /> Label</label>
  //         <label><input type="checkbox" /> Label</label>
  //       </div>
  //     </div>
  //     <div className="filter-group">
  //       <h3>Size</h3>
  //       <div className="checkbox-group">
  //         <label><input type="checkbox" /> Label</label>
  //         <label><input type="checkbox" /> Label</label>
  //         <label><input type="checkbox" /> Label</label>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="product-section">
  //     <div className="search-bar">
  //       <input type="text" placeholder="Search" />
  //       <button><i className="fa fa-search"></i></button>
  //     </div>
  //     <div className="sort-options">
  //       <button className="sort-button">New</button>
  //       <button className="sort-button">Price ascending</button>
  //       <button className="sort-button">Price descending</button>
  //       <button className="sort-button">Rating</button>
  //     </div>
  //     <div className="products-grid">
  //       {Object.keys(products).map(category => (
  //         products[category].map(product => (
  //           <div key={product.id} className="product-card">
  //             <img src={product.image} alt={product.name} />
  //             <div className="product-info">
  //               <h4>{product.name}</h4>
  //               <p>{product.description}</p>
  //               <p>${product.price}</p>
  //             </div>
  //           </div>
  //         ))
  //       ))}
  //     </div>
  //   </div>
  // </div>
  <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {items.length > 0 ? (
            items.map((product) => (
              <a key={product.id} href="#" className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.name}
                    src={product.image}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
              </a>
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