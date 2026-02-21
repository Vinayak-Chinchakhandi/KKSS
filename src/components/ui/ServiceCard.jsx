import { Link } from "react-router-dom";

function ServiceCard({ title, image, link }) {
  return (
    <Link to={link} className="service-card">
      <div className="service-image">
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className="service-content">
        <h3>{title}</h3>
      </div>
    </Link>
  );
}

export default ServiceCard;