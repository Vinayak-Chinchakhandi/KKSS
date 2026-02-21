import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

import Home from "./pages/Home";
import ServiceDetails from "./pages/services/ServiceDetails";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:serviceName" element={<ServiceDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;