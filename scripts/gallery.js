const photos = [
  {
    src: "images/amber-jeff-wedding1.jpg",
    alt: "Backview of the bride dancing with her husband",
    orientation: "horizontal",
  },
  {
    src: "images/amber-jeff-wedding2.jpg",
    alt: "Backview of the bride dancing with her husband looking at the camera over her shoulder",
    orientation: "horizontal",
    span: 14,
    fit: "cover",
  }, // Using cover for artistic look
  {
    src: "images/amber-jeff-wedding3.jpg",
    alt: "Backview of the bride dancing with her husband side-angle",
    orientation: "vertical",
  },
  {
    src: "images/amber-jeff-wedding-bands.jpg",
    alt: "Hands-only of the bride and groom overlaying the bride's dress",
    orientation: "horizontal",
  },
  {
    src: "images/amber-jeff-wedding-flowers.jpg",
    alt: "The bride gazing down at her bouquet of pink flowers",
    orientation: "vertical",
    fit: "cover",
  }, 
  {
    src: "images/amber-in-the-pool.jpeg",
    alt: "Woman with short hair is in the pool leaning on edge looking into the camera",
    orientation: "horizontal",
    // fit: "cover",
  }
];

const galleryContainer = document.getElementById("photo-gallery");

photos.forEach((photo, index) => {
  const item = document.createElement("div");
  item.className = `item ${photo.orientation} mosaic-item${index + 1}`;

  // Apply custom grid-row span if it exists
  if (photo.span) {
    item.style.gridRow = `span ${photo.span}`;
  }

  const img = document.createElement("img");
  img.src = photo.src;
  img.alt = photo.alt;

  // Apply object-fit based on the 'fit' property or default to 'contain'
  img.style.objectFit = photo.fit || "contain";

  item.appendChild(img);
  galleryContainer.appendChild(item);
});
