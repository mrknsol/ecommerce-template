import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import NavItems from '../routes';

const Navbar = () => {
  const location = useLocation()
  const [mainItems, setMainItems] = useState(NavItems[0].children.slice(1, 5));
  const [authItems, setAuthItems] = useState(NavItems[0].children.slice(5, 6));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === `/${path}`;
  };


  return (
    // <nav className="navbar">
    //   <div className="navbar-brand">ECOMMERCE</div>
    //   <div className="navbar-links">
    //     {mainItems.map((item) => (
    //       <Link key={item.path} to={`/${item.path}`}>
    //         {item.path.replace('-', ' ').replace(/^\w/, (c) => c.toUpperCase())}
    //       </Link>
    //     ))}
    //     {authItems.map((item) => (
    //       <Link key={item.path} to={`/${item.path}`} className="login-link">
    //         <i className="fa fa-user"></i>
    //       </Link>
    //     ))}
    //   </div>
    // </nav>
    <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <Link to="#" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline">
            Flowtrail UI
          </Link>
          <button
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                className={!isMenuOpen ? 'block' : 'hidden'}
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
              <path
                className={isMenuOpen ? 'block' : 'hidden'}
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav className={`flex-col flex-grow pb-4 md:pb-0 ${isMenuOpen ? 'flex' : 'hidden'} md:flex md:justify-end md:flex-row`}>
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
          {/* <div className="relative" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <button
              className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark:bg-transparent dark:focus:text-white dark:hover:text-white dark:focus:bg-gray-600 dark:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span>Dropdown</span>
              <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                <div className="px-2 py-2 bg-white rounded-md shadow dark:bg-gray-800">
                  <Link className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to="#">Link #1</Link>
                  <Link className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to="#">Link #2</Link>
                  <Link className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to="#">Link #3</Link>
                </div>
              </div>
            )}
          </div> */}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;