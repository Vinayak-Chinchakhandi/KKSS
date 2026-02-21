import { useParams, useNavigate } from "react-router-dom";
import GalleryGrid from "../../components/ui/GalleryGrid";
import Button from "../../components/ui/Button";

function ServiceDetails() {
  const { serviceName } = useParams();
  const navigate = useNavigate();

  // Convert slug into proper title
  const formattedTitle = serviceName
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <section className="section">
      <div className="container">

        {/* Back Button */}
        <div style={{ marginBottom: "30px" }}>
          <Button
            variant="outline"
            onClick={() => navigate("/services")}
          >
            ← Back to Services
          </Button>
        </div>

        {/* Page Title */}
        <h1 style={{ marginBottom: "40px" }}>
          {formattedTitle}
        </h1>

        {/* Dynamic Gallery */}
        <GalleryGrid folder={serviceName} />

      </div>
    </section>
  );
}

export default ServiceDetails;