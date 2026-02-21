import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

// Service Pages
import Wedding from "./pages/services/Wedding";
import Shamiyana from "./pages/services/Shamiyana";
import SoundSystem from "./pages/services/SoundSystem";
import BabyShower from "./pages/services/BabyShower";
import BirthdayAnniversary from "./pages/services/BirthdayAnniversary";
import CarDecoration from "./pages/services/CarDecoration";
import Catering from "./pages/services/Catering";
import Gathering from "./pages/services/Gathering";
import Haladi from "./pages/services/Haladi";
import HomeOpening from "./pages/services/HomeOpening";
import Political from "./pages/services/Political";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/services/wedding" element={<Wedding />} />
        <Route path="/services/shamiyana" element={<Shamiyana />} />
        <Route path="/services/sound-system" element={<SoundSystem />} />
        <Route path="/services/baby-shower" element={<BabyShower />} />
        <Route path="/services/birthday-anniversary" element={<BirthdayAnniversary />} />
        <Route path="/services/car-decoration" element={<CarDecoration />} />
        <Route path="/services/catering" element={<Catering />} />
        <Route path="/services/gathering" element={<Gathering />} />
        <Route path="/services/haladi" element={<Haladi />} />
        <Route path="/services/home-opening" element={<HomeOpening />} />
        <Route path="/services/political" element={<Political />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;