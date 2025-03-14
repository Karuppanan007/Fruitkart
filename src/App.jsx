import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Fruits from "./Components/Products/Fruits";
import Contact from "./Components/Contact";
import Feedback from "./Components/Feedback";



const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Fruits />
      <Contact />
      <Feedback />
    </>
  );
};

export default App;
