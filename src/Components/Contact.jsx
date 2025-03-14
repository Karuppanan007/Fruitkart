import React, { useState } from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FiPlusCircle } from "react-icons/fi";
import { IoMdClose } from 'react-icons/io';

const OrderForm = () => {
    const [phone, setPhone] = useState("");
    const [addPhone, setAddPhone] = useState("");
    const [showPhone, setShowPhone] = useState(false);

    const [name, setName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [showName, setShowName] = useState(false);

    const [billing, setBilling] = useState('');
    const [addBilling, setAddBilling] = useState('');
    const [showBilling, setShowBilling] = useState(false);

    const [ship, setShip] = useState('');
    const [addShip, setAddShip] = useState('');
    const [showShip, setShowShip] = useState(false);

    const [selectedDelivery, setSelectedDelivery] = useState('Express Delivery');


    const handleAddPhone = () => {
        if (phone) {
            setAddPhone(`+${phone}`);
            setShowPhone(true);
        }
    };

    const removePhone = () => {
        setAddPhone("");
        setShowPhone(false);
    };

    const handleAddName = () => {
        if (name.trim() !== "") {
            setDisplayName(name); // Store name for display
            setShowName(true);
        }
    };

    const removeName = () => {
        setDisplayName(""); // Clear name
        setShowName(false);
    };


    const handleBilling = () => {
        if (billing.trim() !== "") {
            setAddBilling(billing); // Store name for display
            setShowBilling(true);
        }
    };
    const removeBilling = () => {
        setAddBilling(""); // Clear name
        setShowBilling(false);
    };

    const handleShip = () => {
        if (ship.trim() !== "") {
            setAddShip(ship); // Store name for display
            setShowShip(true);
        }
    };
    const removeShip = () => {
        setAddShip(""); // Clear name
        setShowShip(false);
    };


    const deliveryOptions = [
        { label: 'Express Delivery', description: '90 min express delivery' },
        { label: 'Morning', description: '8:00 AM - 11:00 AM' },
        { label: 'Noon', description: '11:00 AM - 2:00 PM' },
        { label: 'Afternoon', description: '2:00 PM - 5:00 PM' },
        { label: 'Evening', description: '5:00 PM - 8:00 PM' },
    ];

    return (
        <div  className="p-6 pt-20">
                <h1 className='text-center mb-5'>Contact Page</h1>

            <div className="max-w-2xl mx-auto space-y-6">

                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold text-md flex items-center gap-2">
                            <span className="bg-green-500 px-2 mt-1 text-white rounded-full text-[25px]">1</span>Contact Number</h2>
                        <button onClick={handleAddPhone} className="text-green-600 flex gap-1 text-xl"><FiPlusCircle className="mt-1.5" /> Add</button>
                    </div>

                    {/* Phone Input Field */}
                    <PhoneInput country={"in"} value={phone} onChange={(value) => setPhone(value)}
                        inputClass="w-full p-2 mt-2 border rounded-md mx-5"
                        containerClass="mt-2"
                        placeholder="Enter phone number"
                    />

                    {/* Display Phone Number if Added */}
                    {showPhone && (
                        <p className="font-semibold mt-2 flex items-center gap-2">
                            {addPhone}
                            <button onClick={removePhone} className="text-red-500">
                                <IoMdClose size={18} />
                            </button>
                        </p>
                    )}
                </div>

                {/* Name */}

                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold text-md flex items-center gap-2">
                            <span className="bg-green-500 px-2 mt-1 text-white rounded-full text-[25px]">
                                2
                            </span>
                            Name
                        </h2>
                        <button
                            onClick={handleAddName}
                            className="text-green-600 flex gap-1 text-xl"
                        >
                            <FiPlusCircle className="mt-1.5" /> Add
                        </button>
                    </div>

                    {/* Name Input Field */}
                    <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full p-2 border rounded-md"
                    />
                    {showName && (
                        <p className="font-semibold mt-2 flex items-center gap-2">
                            {displayName}
                            <button onClick={removeName} className="text-red-500">
                                <IoMdClose size={18} />
                            </button>
                        </p>
                    )}
                </div>

                {/* Billing Address */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className='flex items-center justify-between'>
                        <h2 className="font-semibold text-md flex items-center gap-2 "><span className='bg-green-500 px-2 mt-1 text-white rounded-full text-[25px]'>3</span> Billing Address </h2>
                        <button onClick={handleBilling} className='text-green-600 flex gap-1 text-xl'><FiPlusCircle className='mt-1.5' />Add</button>
                    </div>
                    <textarea placeholder="Enter Billing Address" onChange={(e) => setBilling(e.target.value)} className="mt-2 w-full p-2 border rounded-md"></textarea>
                    {/* <p>{addBilling}</p> */}
                    {showBilling && (
                        <p className="font-semibold mt-2 flex items-center gap-2">
                            {addBilling}
                            <button onClick={removeBilling} className="text-red-500">
                                <IoMdClose size={18} />
                            </button>
                        </p>
                    )}
                </div>

                {/* Shipping Address */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className='flex items-center justify-between'>
                        <h2 className="font-semibold text-md flex items-center gap-2 "><span className='bg-green-500 px-2 mt-1 text-white rounded-full text-[25px]'>4</span> Shipping Address </h2>
                        <button onClick={handleShip} className='text-green-600 flex gap-1 text-xl'><FiPlusCircle className='mt-1.5' />Add</button>
                    </div>
                    <textarea placeholder="Enter Billing Address" onChange={(e) => setShip(e.target.value)} className="mt-2 w-full p-2 border rounded-md"></textarea>
                    {/* <p>{addShip}</p> */}
                    {showShip && (
                        <p className="font-semibold mt-2 flex items-center gap-2">
                            {addShip}
                            <button onClick={removeShip} className="text-red-500">
                                <IoMdClose size={18} />
                            </button>
                        </p>
                    )}
                </div>

                {/* Delivery Options  */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="font-semibold text-md flex items-center gap-2 "><span className='bg-green-500 px-2 mt-1 text-white rounded-full text-[25px]'>5</span> Delivery Schedule </h2>


                    <div className="grid grid-cols-2 gap-4 mt-3">
                        {deliveryOptions.map((option) => (
                            <button
                                key={option.label}
                                onClick={() => setSelectedDelivery(option.label)}
                                className={`p-4 border rounded-md transition-all duration-200 
                                 ${selectedDelivery === option.label ? "border-green-600 bg-green-200" : "border-green-600"}`}
                            >
                                <p className="font-semibold">{option.label}</p>
                                <p className="text-sm text-gray-600">{option.description}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Order Note */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="font-semibold text-lg flex items-center gap-2">6. Order Note</h2>
                    <textarea placeholder="Enter Order Note" className="mt-2 w-full p-2 border rounded-md"></textarea>
                </div>
                <button onClick={() => alert('Details Send Successfully!')} className='bg-green-500 p-2 text-white rounded-full font-semibold w-full '>Send Details</button>
            </div>
        </div>
    );
};

export default OrderForm;
