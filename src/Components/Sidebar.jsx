import React, { useState } from 'react'
import { GiFruitBowl  } from "react-icons/gi";
import { PiCarrotFill } from "react-icons/pi";
import { BsCake2Fill } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
// import { IoMdClose } from 'react-icons/io';
// import { RxHamburgerMenu } from 'react-icons/rx';
// import Fruits from './Products/Fruits';

const Sidebar = () => {
    // const [isOpen,setIsOpen]=useState(false)
      
  return (
    <>
        <nav className='h-full w-44  bg-white shadow-lg text-black'>
           
       <ul className='flex flex-col pt-10 pb-3 gap-3 px-3 text-lg'>
                <li><a href='#fruit' className='text-black text-decoration-none p-1 flex gap-2  hover:bg-gray-300 hover:p-2'> <GiFruitBowl size={22} /> Fruits</a></li>
                <li><a href='#' className='text-black text-decoration-none flex gap-2 p-1 hover:bg-gray-300 hover:p-2'><PiCarrotFill size={22} className='mt-1' />Vegetables</a></li>
                <li><a href='#' className='text-black text-decoration-none flex gap-2.5 p-1 hover:bg-gray-300 hover:p-2'><BsCake2Fill size={18} className='mt-1' />Cakes</a></li>
                <li><a href='#' className='text-black text-decoration-none flex gap-2.5 p-1 hover:bg-gray-300 hover:p-2'><MdFastfood size={20} className='mt-1' />Food</a></li>
            </ul>

                
        </nav>
    </>
  )
}

export default Sidebar