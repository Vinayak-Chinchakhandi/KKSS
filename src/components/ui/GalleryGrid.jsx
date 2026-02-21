import React from "react";

// Load ALL images from assets folder (static glob)
const allImages = import.meta.glob("../../assets/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
});

function GalleryGrid({ folder }) {
  // Filter images by folder name
  const images = Object.entries(allImages)
    .filter(([path]) => path.includes(`/assets/${folder}/`))
    .map(([, module]) => module.default);

  return (
    <div className="gallery-grid">
      {images.length === 0 ? (
        <p style={{ textAlign: "center" }}>No images available.</p>
      ) : (
        images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`${folder}-${index}`} loading="lazy" />
          </div>
        ))
      )}
    </div>
  );
}

export default GalleryGrid;