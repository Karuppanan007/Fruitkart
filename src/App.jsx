import React, { Suspense } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";



const LazyHome = React.lazy(() => import("./Components/Home"));
const LazyContact = React.lazy(() => import("./Components/Contact"));
const LazyFeedback = React.lazy(() => import("./Components/Feedback"));


const Loader = () => (
  <div className="loader-container">
    <div className="spinner"></div>
  </div>
);

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <LazyHome />
        <LazyContact />
        <LazyFeedback />
      </Suspense>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
