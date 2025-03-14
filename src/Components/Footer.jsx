import React from "react";
import logo from '../assets/logo copy.png';

const Footer = () => {
    return (
        <footer id="contact" className="bg-green-300 text-white py-4 mt-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
                
                {/* Logo and Brand */}
                <div className="flex flex-row gap-2 items-center md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-3">
                    <img src={logo} alt="FruitShop Logo" className="w-14 h-14" />
                    <span className="text-2xl font-semibold">FruitShop</span>
                </div>

                {/* Navigation Links */}
                <div>
                    <h4 className="mb-3">Quick Links</h4>
                <div className="flex gap-5 flex-row md:flex-row space-y-3 md:space-y-0 md:space-x-6">
                    <a href="#home" className="hover:text-gray-200 transition text-decoration-none text-white">Home</a>
                    <a href="#shop" className="hover:text-gray-200 transition text-decoration-none text-white">Shop</a>
                    <a href="#contact" className="hover:text-gray-200 transition text-decoration-none text-white">Contact</a>
                </div>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col items-center  space-y-2">
                    <h4 className="text-lg font-semibold">Contact Us</h4>
                    <p>📞 +91 7339137389</p>
                    <p>✉️ karuppusurya007@gmail.com</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
