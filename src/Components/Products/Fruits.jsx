import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Shop from "../Shop";
import { LuBaggageClaim } from "react-icons/lu";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaUser } from 'react-icons/fa';
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoCloseOutline } from 'react-icons/io5';

const API = 'https://67cfc8d2823da0212a8352c7.mockapi.io/data';

const Fruits = ({ searchQuery }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState({});
    const [visibleCount, setVisibleCount] = useState(12);
    const [address, setAddress] = useState('');
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    useEffect(() => {
        axios.get(API)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const addToCart = (item) => {
        setCart((prevCart) => ({
            ...prevCart,
            [item.id]: prevCart[item.id]
                ? { ...prevCart[item.id], quantity: prevCart[item.id].quantity + 1 }
                : { ...item, quantity: 1 },
        }));
    };

    const hideCart = () => {
        setCart({});
    };

    const decreaseQuantity = (id) => {
        setCart((prevCart) => {
            if (prevCart[id].quantity === 1) {
                const newCart = { ...prevCart };
                delete newCart[id];
                return newCart;
            }
            return {
                ...prevCart,
                [id]: { ...prevCart[id], quantity: prevCart[id].quantity - 1 },
            };
        });
    };

    const handleBuyNow = () => {
        setAddress(true);
    };

    const addressSubmit = () => {
        setAddress(false);
        setOrderConfirmed(true);

    }
    const orderConfirm = () => {
        setOrderConfirmed(false);
        setCart({});

    }
    const cartItems = Object.values(cart);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const visibleData = filteredData.slice(0, visibleCount);

    if (loading) return <p className="text-center mt-5 text-xl">Loading...</p>;
    if (error) return <p className="text-center text-red-500 mt-5">Error: {error}</p>;

    return (
        <>
            <Shop />
            <div id='fruits' className="">
                <div className="flex-grow flex justify-center items-center">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20">
                        {visibleData.length > 0 ? (
                            visibleData.map((item) => (
                                <div key={item.id} className="w-full  border border-gray-300 rounded-lg shadow-md flex flex-col p-4">
                                    <img src={item.image} alt={item.name} className="w-28 h-28 rounded-full mb-3 object-cover mx-4" />
                                    <h3 className="text-lg font-semibold text-center mt-1">{item.name}</h3>
                                    <p className="text-sm text-gray-500 text-start">1 kg</p>
                                    <div className='flex justify-between items-center'>
                                        <p className="text-md text-green-600 text-start font-semibold mt-3">${item.price}</p>
                                        <button onClick={() => addToCart(item)}
                                            className='border border-green-500 px-3 md:px-4 md:py-1 rounded-xl text-green-500 flex gap-2 hover:bg-green-500 hover:text-white transition'
                                        >
                                            <LuBaggageClaim className='mt-1' />Cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 text-xl mt-5">No fruits found.</p>
                        )}
                    </div>
                </div>

                {/* Load More Button - Only Shows if There are More Items */}
                {visibleCount < filteredData.length && (
                    <div className="flex justify-center mt-5">
                        <button
                            onClick={() => setVisibleCount((prev) => Math.min(prev + 8, filteredData.length))}
                            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
                        >
                            Load More
                        </button>
                    </div>
                )}

                {/* Cart Section */}
                {totalItems > 0 && (
                    <div className="fixed top-40 right-4 md:right-20 bg-white shadow-lg p-4 rounded-lg border border-gray-300 w-72 sm:w-80">
                        <h3 className="text-lg font-semibold">🛒 Cart Summary</h3>
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center border-b py-2">
                                <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                                <div className="flex-grow ml-3">
                                    <p className="text-md">{item.name}</p>
                                    <p className="text-sm text-gray-500">${item.price} x {item.quantity}</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <button onClick={() => decreaseQuantity(item.id)} className="p-1 bg-gray-200 rounded-md hover:bg-gray-300"><AiOutlineMinus /></button>
                                    <span className="text-md">{item.quantity}</span>
                                    <button onClick={() => addToCart(item)} className="p-1 bg-gray-200 rounded-md hover:bg-gray-300"><AiOutlinePlus /></button>
                                </div>
                            </div>
                        ))}
                        <p className="text-md font-bold mt-3">Total Price: ${totalPrice.toFixed(2)}</p>
                        <div className='flex gap-4 justify-center'>
                            <button className='bg-green-500 px-3 py-1.5 rounded-lg text-white' onClick={handleBuyNow}>Buy Now</button>
                            <button className='bg-green-500 px-4 py-1.5 rounded-lg text-white' onClick={hideCart}>Cancel</button>
                        </div>
                    </div>
                )}



                {address && (
                    <div className="fixed top-40 left-1/2 transform -translate-x-1/2 z-10 bg-white shadow-xl p-8 rounded-2xl border border-gray-300 w-96 text-center animate-fadeIn">
                       <span className='flex justify-between'> <h3 className="text-xl font-bold text-gray-800 mb-5">Enter Your Details</h3> <IoCloseOutline size={24} onClick={()=>setAddress(false)} className='cursor-pointer mt-2'/></span>
                        <form onSubmit={addressSubmit} className="space-y-4 text-left">
                            <div className="relative flex items-center">
                                <FaUser className="absolute left-4 text-gray-600" />
                                <input type="text" name="name" placeholder="Enter your name" className="w-full px-5 p-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none" required />
                            </div>
                            <div className="relative flex items-center">
                                <MdEmail  size={18} className="absolute left-4  text-gray-600" />
                                <input type="email" name="email" placeholder="123@gmail.com" className="w-full px-5 p-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none" required />
                            </div>
                            <div className="relative flex items-center">
                                <BsTelephoneFill className="absolute left-4 text-gray-600" />
                                <input type="tel" name="phone" placeholder="Phone Number" className="w-full px-5 p-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none" required />
                            </div>
                            <div className="relative flex items-center">
                                <FaLocationDot className="absolute left-4 top-3 text-gray-600" />
                                <textarea name="address" placeholder="Delivery Address" className="w-full px-5  p-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none" required></textarea>
                            </div>
                            <button type="submit" className="bg-green-500 text-white p-2 rounded-xl w-full hover:bg-green-600 transition-all duration-300 shadow-md">Confirm Order</button>
                        </form>
                    </div>
                )}



                {/* Order Confirmation Popup */}
                {orderConfirmed && (
                    <div className="fixed top-40 left-1/2 transform -translate-x-1/2 z-10 bg-white shadow-lg p-6 rounded-lg border border-gray-300 w-80 text-center">
                        <h3 className="text-lg font-semibold">🎉 Order Confirmed!</h3>
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-2 border-b pb-2">
                                <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full mb-2 object-cover" />
                                <p className="text-black">{item.name} x {item.quantity}</p>
                            </div>
                        ))}
                        <p className="text-gray-600 mt-2">Total Fruits: <b>{totalItems}kg</b></p>
                        <p className="text-gray-600">Total Price: <b>${totalPrice.toFixed(2)}</b></p>
                        <p className="text-gray-600 mt-3">Your order will be delivered in 24 hours.</p>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4" onClick={orderConfirm}>OK</button>
                    </div>
                )}

            </div>
        </>
    );
};

export default Fruits;
