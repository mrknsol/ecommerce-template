// src/components/Filter.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery, setPriceFrom, setPriceTo, setRating, setStatus, resetFilters } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
      <div className="flex flex-col">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
          <form>
            <div className="relative mb-10 w-full flex items-center justify-between rounded-md">
              <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fillRule="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                name="search"
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-48 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Search by name, type, manufacturer, etc"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="flex flex-col">
                <label htmlFor="price-from" className="text-sm font-medium text-stone-600">Price From</label>
                <input
                  type="number"
                  id="price-from"
                  onChange={(e) => dispatch(setPriceFrom(e.target.value))}
                  placeholder="Min price"
                  className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="price-to" className="text-sm font-medium text-stone-600">Price To</label>
                <input
                  type="number"
                  id="price-to"
                  onChange={(e) => dispatch(setPriceTo(e.target.value))}
                  placeholder="Max price"
                  className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="rating" className="text-sm font-medium text-stone-600">Rating</label>
                <select
                  id="rating"
                  onChange={(e) => dispatch(setRating(e.target.value))}
                  className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option value="">Select Rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="status" className="text-sm font-medium text-stone-600">Status</label>
                <select
                  id="status"
                  onChange={(e) => dispatch(setStatus(e.target.value))}
                  className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option value="">Select Status</option>
                  <option value="Unused">Unused</option>
                  <option value="Used">Used</option>
                </select>
              </div>
            </div>

            <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
              <button
                type="button"
                onClick={() => dispatch(resetFilters())}
                className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring"
              >
                Reset
              </button>
              <button
                type="button"
                className="rounded-lg bg-yellow-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Filter;