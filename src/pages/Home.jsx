import Button from "../components/ui/Button";
import heroImage from "../assets/hero/hero.webp";

import Services from "./Services";
import Contact from "./Contact";

function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section id="home" className="hero section">
        <div className="container hero-wrapper">

          <div className="hero-content">
            <h1>
              Kala Kaleshwara <br />
              Sounds & Shamiyana
            </h1>

            <p className="pro-name">
              Proprietor: Iranna Talikoti & Sons
            </p>

            <p>
              Divine Sound. Grand Celebrations.
              Premium event setup services in Gajendragada and surrounding areas.
            </p>

            <div className="hero-buttons">
              <a href="tel:+919986690087">
                <Button variant="primary">Call Now</Button>
              </a>

              <a
                href="https://wa.me/917483761587"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary">WhatsApp</Button>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src={heroImage} alt="KKSS Event Setup" />
          </div>

        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="section bg-section">
        <Services />
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="section">
        <Contact />
      </section>
    </>
  );
}

export default Home;