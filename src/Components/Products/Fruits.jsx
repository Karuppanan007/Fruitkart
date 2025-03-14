
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Shop from "../Shop";
import { LuBaggageClaim } from "react-icons/lu";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const API = 'https://67cfc8d2823da0212a8352c7.mockapi.io/data';

const Fruits = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState({});
    const [visibleCount, setVisibleCount] = useState(8); 

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

    const cartItems = Object.values(cart);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (loading) return <p className="text-center mt-5 text-xl">Loading...</p>;
    if (error) return <p className="text-center text-red-500 mt-5">Error: {error}</p>;

    return (
        <>
            <Shop />
            <div className="p-4 mt-5">
                <div className="flex-grow flex justify-center">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                        {data.slice(0, visibleCount).map((item) => (
                            <div key={item.id} className="w-full border border-gray-300 rounded-lg shadow-md flex flex-col p-4">
                                <img src={item.image} alt={item.name} className="w-28 h-28 rounded-full mb-3 object-cover mx-auto" />
                                <h3 className="text-lg font-semibold text-center mt-1">{item.name}</h3>
                                <p className="text-sm text-gray-500 text-start">1 kg</p>
                                <div className='flex justify-between items-center'>
                                    <p className="text-md text-green-600 text-start font-semibold mt-3">${item.price}</p>
                                    <button
                                        className='border border-green-500 px-3 md:px-4 md:py-1 rounded-xl text-green-500 flex gap-2 hover:bg-green-500 hover:text-white transition'
                                        onClick={() => addToCart(item)}
                                    >
                                        <LuBaggageClaim className='mt-1' />Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Load More Button */}
                {visibleCount < data.length && (
                    <div className="flex justify-center mt-5">
                        <button
                            onClick={() => setVisibleCount((prev) => Math.min(prev + 8, data.length))} // Load more without exceeding array length
                            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
                        >
                            Load More
                        </button>
                    </div>
                )}

                {/* 🛒 Cart Summary */}
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
                            <button className='bg-green-500 px-3 py-1.5 rounded-lg text-white' onClick={() => alert('Your order will be delivered in 24 hours.')}>Buy Now</button>
                            <button className='bg-green-500 px-4 py-1.5 rounded-lg text-white' onClick={hideCart}>Cancel</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Fruits;


