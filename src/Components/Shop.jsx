import React from 'react'
import speed from '../assets/delivery.png'
import gift from '../assets/gift.png'
import cash from '../assets/cash.png'

const Shop = () => {
    return (
        <>
            <div>
                <div id='shop' className='grid grid-cols-1 md:grid-cols-3 pt-20 gap-2 text-white'>
                    <div className="bg-green-300 h-44 w-full flex items-center justify-between px-5 rounded-lg">
                        <div>
                            <h4 className="mt-3 text-lg font-semibold">Speed Delivery!</h4>
                            <p className="text-sm">Your selected items will be delivered within 24 hours.</p>
                            <button className="bg-white text-black px-4 py-2 border border-gray-300 rounded-lg mt-2">
                                Details
                            </button>
                        </div>
                        <img src={speed} alt="Speed Delivery" className="h-32 md:h-40 object-contain rounded-lg" />
                    </div>

                    <div className="bg-red-300 h-44 w-full flex items-center justify-between px-5 rounded-lg">
                        <div>
                            <h4 className="mt-3 text-lg font-semibold">Gift Vouchers!</h4>
                            <p className="text-sm">Get special gift vouchers on selected items.</p>
                            <button className="bg-white border border-gray-700 text-black px-4 py-2 rounded-lg mt-2">Details</button>
                        </div>
                        <img src={gift} alt="Gift Vouchers" className="h-32 md:h-40 object-contain" />
                    </div>

                    <div className="bg-yellow-300 h-44 w-full flex items-center justify-between px-5 rounded-lg">
                        <div>
                            <h4 className="mt-3 text-lg font-semibold">Cash on Delivery!</h4>
                            <p className="text-sm">Cash on delivery is available for your selected items.</p>
                            <button className="bg-white text-black px-4 py-2 rounded-lg mt-2">Details</button>
                        </div>
                        <img src={cash} alt="Cash on Delivery" className="h-32 md:h-40 object-contain" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop;
