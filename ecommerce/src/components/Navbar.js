import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import NavItems from '../routes';

const Navbar = () => {
  const location = useLocation()
  const [mainItems, setMainItems] = useState(NavItems[0].children.slice(1, 5));
  const [authItems, setAuthItems] = useState(NavItems[0].children.slice(5, 6));

  const isActive = (path) => {
    return location.pathname === `/${path}`;
  };


  return (
    <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800 sticky top-0 z-50">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <Link to="#" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline">
            Flowtrail UI
          </Link>
        </div>
        <nav className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
          {mainItems.map((item) => (
            <Link
              key={item.path}
              to={`/${item.path}`}
              className={`px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark:bg-transparent dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 ${isActive(item.path) ? 'bg-gray-200 dark:bg-gray-700' : 'bg-transparent'} focus:outline-none focus:shadow-outline`}
            >
              {item.path.replace('-', ' ').replace(/^\w/, (c) => c.toUpperCase())}
            </Link>
          ))}
          {authItems.map((item) => (
            <Link
              key={item.path}
              to={`/${item.path}`}
              className={`px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark:bg-transparent dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 ${isActive(item.path) ? 'bg-gray-200 dark:bg-gray-700' : 'bg-transparent'} focus:outline-none focus:shadow-outline`}
            >
              <i className="fa fa-user"></i>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;