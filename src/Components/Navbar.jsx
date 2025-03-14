import React, { useState } from 'react';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import { IoBagHandleSharp } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='flex items-center justify-between p-2 shadow-md bg-white fixed top-0 left-0 w-full z-20'>
            {/* Logo */}
            <div className='flex items-center gap-2'>
                <img src={logo} alt='Logo' className='h-10' />
                <span className='text-xl font-semibold'>FruitKart</span>
            </div>

            {/* Desktop Menu */}
            <ol className='hidden md:flex gap-6 text-black'>
                <li><a href='#home' className='text-black  text-decoration-none p-1 hover:bg-gray-200 hover:p-1 hover:rounded-lg scroll-smooth flex gap-1'>Home</a></li>
                <li><a href='#shop' className='text-black text-decoration-none p-1 hover:bg-gray-200 hover:p-1 hover:rounded-lg scroll-smooth flex gap-1'><IoBagHandleSharp className='mt-1' />Shop</a></li>
                <li><a href='#contact' className='text-black text-decoration-none p-1 hover:bg-gray-200 hover:p-1 hover:rounded-lg scroll-smooth flex gap-1'>Contact Us</a></li>
            </ol>

            {/* User & Login */}
            <div className='hidden md:flex gap-4 items-center'>
                <a href='#'>
                    <img src={user} alt='User' className='h-10 border rounded-full p-1 border-black' />
                </a>
                <button className='bg-green-600 py-2 px-4 rounded-xl text-white hover:bg-green-700'>Login</button>
            </div>

            {/* Mobile Menu Icon */}
            <button className='md:hidden text-2xl' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoMdClose size={20} /> : <RxHamburgerMenu size={20} />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='absolute top-16 left-0 w-full bg-white shadow-md md:hidden'>
                    <ol className='flex flex-col items-center gap-2 '>
                        <li><a href='#home' onClick={()=>setIsOpen(false)} className='block py-2  text-black text-decoration-none hover:bg-gray-200 hover:px-10'>Home</a></li>
                        <li><a href='#shop' onClick={()=>setIsOpen(false)} className=' py-2 text-black text-decoration-none hover:bg-gray-200 hover:px-10 flex gap-1.5'><IoBagHandleSharp size={18} className='mt-1' />Shop</a></li>
                        <li><a href='#contact' onClick={()=>setIsOpen(false)} className='block py-2 text-black text-decoration-none hover:bg-gray-200 hover:px-10'>Contact Us</a></li>
                        <div className='flex flex-col items-center gap-3'>
                            <a href='#'>
                                <img src={user} alt='User' onClick={()=>setIsOpen(false)} className='h-10 border rounded-full p-1 border-black' />
                            </a>
                            <button onClick={()=>setIsOpen(false)} className='bg-green-600 py-2 px-6 rounded-full text-white hover:bg-green-700'>Login</button>
                        </div>
                    </ol>
                </div>
            )}
        </nav>
    );
};

export default Navbar;