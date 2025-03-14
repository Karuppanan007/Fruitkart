import React from 'react';
import { FaSearch } from 'react-icons/fa';
import landing from '../assets/landing.jpg';

const Home = () => {
  return (
    <div id='home' className='relative w-full h-screen flex flex-col items-center justify-center'>

      <img src={landing} alt="Landing" className='absolute top-0 left-0 w-full h-full object-cover' />

      
      <div className='absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 text-center p-4'>
        <h1 className='text-6xl sm:text-5xl font-bold'>Welcome to FruitKart!</h1>
        <p className='text-lg sm:text-xl mb-6'>We deliver fresh fruits at your doorstep.</p>


        <div className='relative w-full max-w-md mt-2'>
          <input 
            type='search' 
            placeholder='Search the items' 
            className='w-full h-12 pl-4 pr-12 border-gray-400 border-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black'
          />
          <button className='absolute right-0.5 top-1/2 transform -translate-y-1/2 text-black-600 bg-green-600 px-3 py-[12px]  hover:bg-green-800'>
            <FaSearch size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;


