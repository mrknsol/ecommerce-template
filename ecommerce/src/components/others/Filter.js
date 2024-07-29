// import React from "react";

// const Filter = () => {

//     return (
//         <section class="py-24 relative">
//         <div class="w-full max-w-7xl mx-auto px-4 md:px-8">
//             <div class="flex flex-col lg:flex-row lg:items-center max-lg:gap-4 justify-between w-full">
//                 <ul class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12">
//                     <li class="flex items-center cursor-pointer outline-none group">
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path class="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-600"
//                                 d="M19.7778 9.33333V9.33333C19.7778 8.09337 19.7778 7.47339 19.6415 6.96472C19.2716 5.58436 18.1934 4.50616 16.8131 4.1363C16.3044 4 15.6844 4 14.4444 4C12.963 4 11.4815 4 10 4C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12V12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20C11.3333 20 12.6667 20 14 20C15.6554 20 16.4831 20 17.1459 19.7588C18.2569 19.3544 19.1322 18.4791 19.5365 17.3681C19.7778 16.7053 19.7778 15.8776 19.7778 14.2222V14.2222M16.6667 14.2222H20.2222C21.2041 14.2222 22 13.4263 22 12.4444V11.1111C22 10.1293 21.2041 9.33333 20.2222 9.33333H16.6667C15.6848 9.33333 14.8889 10.1293 14.8889 11.1111V12.4444C14.8889 13.4263 15.6848 14.2222 16.6667 14.2222Z"
//                                 stroke="#4F46E5" stroke-width="1.5" />
//                         </svg>
//                         <span
//                             class="font-normal text-lg leading-8 text-indigo-600 ml-2 mr-3 transition-all duration-500 group-hover:text-indigo-600">Finance</span>
//                         <button
//                             class="flex aspect-square h-6 rounded-full border border-indigo-600  items-center justify-center font-manrope font-medium text-base text-indigo-600  transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">8</button>

//                     </li>

//                     <li class="flex items-center cursor-pointer outline-none group">
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path class="stroke-black transition-all duration-500 group-hover:stroke-indigo-600"
//                                 d="M10 14.2449C9.55209 14.2449 7.76925 14.2449 6 14.2449C4.11438 14.2449 3.17157 14.2449 2.58579 13.6591C2 13.0733 2 12.1305 2 10.2449V10.0816C2 8.19601 2 7.25321 2.58579 6.66742C3.17157 6.08163 4.11275 6.08163 5.99512 6.08163C9.46482 6.08163 14.4728 6.08163 18 6.08163C19.8856 6.08163 20.8284 6.08163 21.4142 6.66742C22 7.25321 22 8.19599 22 10.0816C22 10.136 22 10.1905 22 10.245C22 12.1306 22 13.0733 21.4142 13.6591C20.8284 14.2449 19.8856 14.2449 18 14.2449C16.2308 14.2449 14.4479 14.2449 14 14.2449M20.6667 17.2381C20.6667 17.3697 20.6667 17.6444 20.6667 17.9986C20.6667 19.8851 20.6667 20.8284 20.0809 21.4142C19.4951 22 18.5523 22 16.6667 22H7.33333C5.44772 22 4.50491 22 3.91912 21.4142C3.33333 20.8284 3.33333 19.8856 3.33333 18V17.2381M15.3333 6.08163V5.33333C15.3333 4.08718 15.3333 3.4641 15.0654 3C14.8898 2.69596 14.6374 2.44349 14.3333 2.26795C13.8692 2 13.2462 2 12 2V2C10.7538 2 10.1308 2 9.66667 2.26795C9.36263 2.44349 9.11015 2.69596 8.93462 3C8.66667 3.4641 8.66667 4.08718 8.66667 5.33333V6.08163M11.3333 16.966H12.6667C13.403 16.966 14 16.3569 14 15.6054V12.8844C14 12.1329 13.403 11.5238 12.6667 11.5238H11.3333C10.597 11.5238 10 12.1329 10 12.8844V15.6054C10 16.3569 10.597 16.966 11.3333 16.966Z"
//                                 stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//                         </svg>
//                         <span
//                             class="font-normal text-lg leading-8 text-black pl-2 pr-3 transition-all duration-500 group-hover:text-indigo-600">Management</span>
//                         <span
//                             class="w-6 h-6 rounded-full border border-gray-900 flex items-center justify-center font-manrope font-medium text-base text-gray-900 transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">3</span>
//                     </li>

//                     <li class="flex items-center cursor-pointer outline-none group">
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path class="stroke-black transition-all duration-500 group-hover:stroke-indigo-600"
//                                 d="M9.69081 22H13.537M11.6139 2V3.53846M18.4123 4.8163L17.3244 5.90416M4.8155 4.81701L5.90336 5.90486M2 11.6154H3.53846M19.6893 11.6154H21.2278M7.53442 15.6948C5.2814 13.4418 5.2814 9.78895 7.53442 7.53592C9.78744 5.2829 13.4403 5.2829 15.6933 7.53592C17.9464 9.78895 17.9464 13.4418 15.6933 15.6948C15.1999 16.1883 14.6393 16.5737 14.041 16.851C13.745 16.9881 13.537 17.2743 13.537 17.6005L13.537 18.9231C13.537 19.3479 13.1926 19.6923 12.7677 19.6923H10.46C10.0352 19.6923 9.69081 19.3479 9.69081 18.9231V17.6005C9.6908 17.2743 9.48274 16.9881 9.18677 16.851C8.58845 16.5737 8.02786 16.1883 7.53442 15.6948Z"
//                                 stroke="black" stroke-width="1.5" stroke-linecap="round" />
//                         </svg>
//                         <span
//                             class="font-normal text-lg leading-8 text-black pl-2 pr-3 transition-all duration-500 group-hover:text-indigo-600">Today’s
//                             deal</span>
//                         <span
//                             class="w-6 h-6 rounded-full border border-gray-900 flex items-center justify-center font-manrope font-medium text-base text-gray-900 transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">1</span>
//                     </li>
//                 </ul>
//                 <div class="relative w-full max-w-sm">
//                     <svg class="absolute top-1/2 -translate-y-1/2 left-4 z-50" width="20" height="20"
//                         viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                             d="M16.5555 3.33203H3.44463C2.46273 3.33203 1.66675 4.12802 1.66675 5.10991C1.66675 5.56785 1.84345 6.00813 2.16004 6.33901L6.83697 11.2271C6.97021 11.3664 7.03684 11.436 7.0974 11.5068C7.57207 12.062 7.85127 12.7576 7.89207 13.4869C7.89728 13.5799 7.89728 13.6763 7.89728 13.869V16.251C7.89728 17.6854 9.30176 18.6988 10.663 18.2466C11.5227 17.961 12.1029 17.157 12.1029 16.251V14.2772C12.1029 13.6825 12.1029 13.3852 12.1523 13.1015C12.2323 12.6415 12.4081 12.2035 12.6683 11.8158C12.8287 11.5767 13.0342 11.3619 13.4454 10.9322L17.8401 6.33901C18.1567 6.00813 18.3334 5.56785 18.3334 5.10991C18.3334 4.12802 17.5374 3.33203 16.5555 3.33203Z"
//                             stroke="black" stroke-width="1.6" stroke-linecap="round" />
//                     </svg>
//                     <select id="Offer"
//                         class="h-12 border border-gray-300 text-gray-900 pl-11 text-base font-normal leading-7 rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 focus-within:bg-gray-50">
//                         <option selected>Sort by time(high to low)</option>
//                         <option value="option 1">option 1</option>
//                         <option value="option 2">option 2</option>
//                         <option value="option 3">option 3</option>
//                         <option value="option 4">option 4</option>
//                     </select>
//                     <svg class="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
//                         viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827" stroke-width="1.6"
//                             stroke-linecap="round" stroke-linejoin="round" />
//                     </svg>
//                 </div>
//             </div>
//             <svg class="my-7 w-full" xmlns="http://www.w3.org/2000/svg" width="1216" height="2" viewBox="0 0 1216 2"
//                 fill="none">
//                 <path d="M0 1H1216" stroke="#E5E7EB" />
//             </svg>
//             <div class="grid grid-cols-12">
//                 <div class="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
//                     <div class="box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
//                         <h6 class="font-medium text-base leading-7 text-black mb-5">Your Workspace</h6>
//                         <div class="flex items-center mb-5 gap-1">
//                             <div class="relative w-full">
//                                 <select id="FROM"
//                                     class="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
//                                     <option selected>Min</option>
//                                     <option value="option 1">option 1</option>
//                                     <option value="option 2">option 2</option>
//                                     <option value="option 3">option 3</option>
//                                     <option value="option 4">option 4</option>
//                                 </select>
//                                 <svg class="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
//                                     viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
//                                         stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
//                                 </svg>
//                             </div>
//                             <p class="px-1 font-normal text-sm leading-6 text-gray-600">to</p>
//                             <div class="relative w-full">
//                                 <select id="FROM"
//                                     class="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
//                                     <option selected>Max</option>
//                                     <option value="option 1">option 1</option>
//                                     <option value="option 2">option 2</option>
//                                     <option value="option 3">option 3</option>
//                                     <option value="option 4">option 4</option>
//                                 </select>
//                                 <svg class="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
//                                     viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
//                                         stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
//                                 </svg>
//                             </div>
//                         </div>

//                         <label for="countries" class="block mb-2 text-sm font-medium text-gray-600 w-full">Zip
//                             Code</label>
//                         <div class="relative w-full mb-8">
//                             <select id="FROM"
//                                 class="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
//                                 <option selected>Write code</option>
//                                 <option value="option 1">option 1</option>
//                                 <option value="option 2">option 2</option>
//                                 <option value="option 3">option 3</option>
//                                 <option value="option 4">option 4</option>
//                             </select>
//                             <svg class="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
//                                 viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
//                                     stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
//                             </svg>
//                         </div>
//                         <button
//                             class="w-full py-2.5 flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white font-semibold text-xs shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200  ">
//                             <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M14.4987 13.9997L13.1654 12.6663M13.832 7.33301C13.832 10.6467 11.1457 13.333 7.83203 13.333C4.51832 13.333 1.83203 10.6467 1.83203 7.33301C1.83203 4.0193 4.51832 1.33301 7.83203 1.33301C11.1457 1.33301 13.832 4.0193 13.832 7.33301Z"
//                                     stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
//                             </svg>
//                             Search
//                         </button>
//                     </div>

//                     <div class="mt-7 box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
//                         <div class="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
//                             <p class="font-medium text-base leading-7 text-black ">Filter Plans</p>
//                             <p
//                                 class="font-medium text-xs text-gray-500 cursor-pointer transition-all duration-500 hover:text-indigo-600">
//                                 RESET</p>
//                         </div>


//                         <div class="w-full mb-7">
//                             <div class='accordion-group grid grid-cols-1 gap-5 sm:gap-9'
//                                 data-accordion="default-accordion">
//                                 <div class='accordion '
//                                     id='category-heading-one'>
//                                     <button
//                                         class='accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600'
//                                         aria-controls='category-collapse-one'>
//                                         <h5 class="font-medium text-sm text-gray-900">
//                                             Availability
//                                         </h5>
//                                         <svg class='text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180'
//                                             width='22' height='22' viewBox='0 0 22 22' fill='none'
//                                             xmlns='http://www.w3.org/2000/svg'>
//                                             <path
//                                                 d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25'
//                                                 stroke='currentColor' stroke-width='1.6' stroke-linecap='round'
//                                                 stroke-linejoin='round'></path>
//                                         </svg>

//                                     </button>
//                                     <div id='category-collapse-one'
//                                         class='accordion-content w-full px-0 overflow-hidden pr-4 max-h-0 '
//                                         aria-labelledby='category-heading-one'>
                                        
//                                         <div class="box flex flex-col gap-2 mt-5">
                                           
//                                             <div class="flex items-center mb-2">
//                                                 <input id="checkbox-option-1" type="checkbox" value="" class="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-100 checked:bg-indigo-600 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]">
//                                                 <label for="checkbox-option-1" class="ml-1 font-normal text-xs cursor-pointer  text-gray-600">option-1</label>
//                                                 </div>
//                                                 <div class="flex items-center mb-2">
//                                                     <input id="checkbox-option-2" type="checkbox" value="" class="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]">
//                                                     <label for="checkbox-option-2" class="ml-1 font-normal text-xs cursor-pointer  text-gray-600">option-2</label>
//                                                     </div>
//                                                     <div class="flex items-center mb-2">
//                                                         <input id="checkbox-option-3" type="checkbox" value="" class="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-indigo-600 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]">
//                                                         <label for="checkbox-option-3" class="ml-1 font-normal text-xs cursor-pointer  text-gray-600">option-3</label>
//                                                         </div>
//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <label for="Offer" class="font-medium text-sm leading-6 text-gray-600 mb-1">Offer</label>
//                         <div class="relative w-full mb-7">
//                             <select id="Offer"
//                                 class="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
//                                 <option selected>5% off upi discount</option>
//                                 <option value="option 1">option 1</option>
//                                 <option value="option 2">option 2</option>
//                                 <option value="option 3">option 3</option>
//                                 <option value="option 4">option 4</option>
//                             </select>
//                             <svg class="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
//                                 viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
//                                     stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
//                             </svg>
//                         </div>
//                         <p class="font-medium text-sm leading-6 text-black mb-3">Discount</p>
//                         <div class="box flex flex-col gap-2">
//                             <div class="flex items-center">
//                                 <input id="checkbox-default-1" type="checkbox" value="" class="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]">
//                                 <label for="checkbox-default-1" class="text-xs font-normal text-gray-600 leading-4 cursor-pointer">20% or more</label>
//                             </div>
//                             <div class="flex items-center">
//                                 <input id="checkbox-default-2" type="checkbox" value="" class="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]">
//                                 <label for="checkbox-default-2" class="text-xs font-normal text-gray-600 leading-4 cursor-pointer">30% or more</label>
//                             </div>
//                             <div class="flex items-center">
//                                 <input id="checkbox-default-3" type="checkbox" value="" class="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]">
//                                 <label for="checkbox-default-3" class="text-xs font-normal text-gray-600 leading-4 cursor-pointer">50% or more</label>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-span-12 md:col-span-9"></div>
//             </div>

//         </div>
//     </section>
                                            
//     )
// }