import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import NotFound from "./page/NotFound";
import Product from "./page/Product";
import Men from "./page/Men";
import Women from "./page/Women";
import Course from "./page/Course";
import CourseDetail from "./page/CourseDetail";

const App = () => {
  return (
    <div className="text-white h-screen w-full flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/product" element={<Product />}>
            <Route
              index
              element={
                <div className="p-8 text-center text-lg text-slate-200">
                  Select a product category above.
                </div>
              }
            />
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
