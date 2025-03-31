import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const autoScrollInterval = 2000; // Auto-scroll every 3s
  const [isHovered, setIsHovered] = useState(false); // Pause auto-scroll on hover

  useEffect(() => {
    fetch("https://67d3f9198bca322cc26bc3e5.mockapi.io/feedback")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data.slice(0, 10))) // Limiting to 10 feedbacks
      .catch((error) => console.error("Error fetching feedback:", error));
  }, []);

  useEffect(() => {
    if (!isHovered && feedbacks.length > 0) {
      const interval = setInterval(() => {
        handleNext();
      }, autoScrollInterval);
      return () => clearInterval(interval);
    }
  }, [feedbacks.length, isHovered, currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length);
  };

  return (
    <div className="max-w-3xl mx-auto mt-15 p-5 relative">
      <h1 className="text-2xl font-bold text-center mb-6">Customer Feedback</h1>

      <div
        className="relative overflow-hidden mt-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Feedback Display */}
        <AnimatePresence mode="wait">
          {feedbacks.length > 0 && (
            <motion.div
              key={currentIndex}
              initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex justify-center"
            >
              <div className="bg-white p-6 border border-green-700 rounded-lg shadow-lg text-center w-80">
                <img
                  src={feedbacks[currentIndex].image}
                  alt={feedbacks[currentIndex].name}
                  className="w-24 h-24 mx-auto rounded-full border border-green-300"
                />
                <h3 className="mt-4 font-semibold">{feedbacks[currentIndex].name}</h3>
                <p className="text-gray-600 mt-2">{feedbacks[currentIndex].feedback}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition"
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Feedback;

