import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose, IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { IoBagHandleSharp } from "react-icons/io5";
import { Bounce, Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { backInOut } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registeredUser, setRegisteredUser] = useState(null);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

    const handleLogin = (e) => {
        e.preventDefault();
        if (registeredUser && email === registeredUser.email && password === registeredUser.password) {
            toast.success('Login Successful');
            setIsAuthOpen(false);
        } else {
            toast.error('Login Failed');
        }
    };

    const handleSignup = (e) => {
        e.preventDefault();
        setRegisteredUser({ email, password });
        toast.success('Account Created Successfully! You can now log in.');
        setIsLogin(true);
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar transition={Slide} theme="light"/>;

            <nav className="flex items-center p-1 justify-between shadow-md bg-white fixed top-0 left-0 w-full z-20">
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="h-10" />
                    <span className="text-xl font-semibold">FruitKart</span>
                </div>
                <ol
                    className={`md:flex flex-col md:flex-row items-center absolute md:static bg-white w-full md:w-auto left-0 top-14 shadow-md md:shadow-none transition-all duration-300 ease-in-out ${isOpen ? "flex py-4 gap-4" : "hidden"
                        }`}
                >
                    {["#home", "#fruits", "#contact"].map((link) => (
                        <li key={link} className="w-full md:w-auto text-center">
                            <a
                                href={link}
                                className={`block px-4 py-1.5 rounded-lg text-black transition-all text-decoration-none hover:bg-gray-100 ${activeLink === link ? "" : ""
                                    }`}
                                onClick={() => {
                                    setActiveLink(link);
                                    setIsOpen(false);
                                }}
                            >
                                {link === "#home" ? (
                                    "Home"
                                ) : link === "#fruits" ? (
                                    <span className="flex items-center justify-center gap-1">
                                        <IoBagHandleSharp className="mt-0.5" /> Shop
                                    </span>
                                ) : (
                                    "Contact Us"
                                )}
                            </a>
                        </li>
                    ))}
                </ol>
                <button onClick={() => { setIsAuthOpen(true); setIsLogin(true); }} className="bg-green-600 mt-1 py-2 px-4 rounded-xl text-white hover:bg-green-700">
                    Login
                </button>


                <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
                </button>

            </nav>

            {isAuthOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
                            <button onClick={() => setIsAuthOpen(false)} className="text-xl"><IoMdClose /></button>
                        </div>
                        <form onSubmit={isLogin ? handleLogin : handleSignup} className="mt-4 flex flex-col">
                            <input type="email" placeholder="Email" className="border p-2 rounded mb-3" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <div className='relative'>
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Password"
                                    className="border p-2 rounded w-full"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button type="button" className='absolute right-3 top-3' onClick={togglePasswordVisibility}>
                                    {passwordVisible ? <IoMdEyeOff /> : <IoMdEye />}
                                </button>
                            </div>
                            <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700 mt-3">{isLogin ? 'Login' : 'Sign Up'}</button>
                            <button type="button" className='text-sm text-end mt-1 text-blue-500 hover:underline' onClick={() => setIsLogin(!isLogin)}>
                                {isLogin ? 'Create an Account' : 'Already have an account? Login'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
