import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Feedback from "./Components/Feedback";
import Footer from "./Components/Footer";



const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Contact />
      <Feedback />

      <footer>
        <Footer />
      </footer>

    </>
  );
};

export default App;
