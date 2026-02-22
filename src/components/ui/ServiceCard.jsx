import { Link } from "react-router-dom";

function ServiceCard({ title, kannada, image, link }) {
  return (
    <Link to={link} className="service-card">
      <div className="service-image">
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-kannada">{kannada}</p>
      </div>
    </Link>
  );
}

export default ServiceCard;