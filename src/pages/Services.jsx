import ServiceCard from "../components/ui/ServiceCard";

// Import preview images (one per folder)
import weddingImg from "../assets/wedding/sample.webp";
import shamiyanaImg from "../assets/shamiyana/sample.webp";
import soundSystemImg from "../assets/sound-system/sample.webp";
import babyShowerImg from "../assets/baby-shower/sample.webp";
import birthdayImg from "../assets/birthday-anniversary/sample.webp";
import carDecorationImg from "../assets/car-decoration/sample.webp";
import cateringImg from "../assets/catering/sample.webp";
import gatheringImg from "../assets/gathering/sample.webp";
import haladiImg from "../assets/haladi/sample.webp";
import homeOpeningImg from "../assets/home-opening/sample.webp";
import politicalImg from "../assets/political/sample.webp";

function Services() {

  const services = [
    { title: "Wedding", kannada: "(ಮದುವೆ)", image: weddingImg, link: "/services/wedding" },
    { title: "Shamiyana", kannada: "(ಶಾಮಿಯಾನ)", image: shamiyanaImg, link: "/services/shamiyana" },
    { title: "Sound System", kannada: "(ಸೌಂಡ್ ಸಿಸ್ಟಮ್)", image: soundSystemImg, link: "/services/sound-system" },
    { title: "Baby Shower", kannada: "(ನಾಮಕರಣ)", image: babyShowerImg, link: "/services/baby-shower" },
    { title: "Birthday & Anniversary", kannada: "(ಹುಟ್ಟುಹಬ್ಬ & ವಾರ್ಷಿಕೋತ್ಸವ)", image: birthdayImg, link: "/services/birthday-anniversary" },
    { title: "Car Decoration", kannada: "(ಕಾರು ಅಲಂಕಾರ)", image: carDecorationImg, link: "/services/car-decoration" },
    { title: "Catering Materials", kannada: "(ಭೋಜನ ಸಾಮಗ್ರಿ ವ್ಯವಸ್ಥೆ)", image: cateringImg, link: "/services/catering" },
    { title: "Gathering", kannada: "(ಸಭೆ / ಸಮಾರಂಭ)", image: gatheringImg, link: "/services/gathering" },
    { title: "Haladi", kannada: "(ಹಳದಿ ಕಾರ್ಯಕ್ರಮ)", image: haladiImg, link: "/services/haladi" },
    { title: "Home Opening", kannada: "(ಗೃಹ ಪ್ರವೇಶ)", image: homeOpeningImg, link: "/services/home-opening" },
    { title: "Political Events", kannada: "(ರಾಜಕೀಯ ಕಾರ್ಯಕ್ರಮ)", image: politicalImg, link: "/services/political" },
  ];

  return (
    <section className="section bg-section">
      <div className="container">

        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          Our Services
        </h1>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              kannada={service.kannada}
              image={service.image}
              link={service.link}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;