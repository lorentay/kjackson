const photos = [
  {
    src: "images/amber-jeff-wedding2.jpg",
    alt: "Backview of the bride dancing with her husband looking at the camera over her shoulder",
    orientation: "horizontal",
  },
  {
    src: "images/amber-jeff-wedding-veil.jpeg",
    alt: "Bride and groom facing each other with the bride's veil over their heads. Pink flower bouquet in the foreground",
    orientation: "vertical",
  },
  {
    src: "images/amber-jeff-wedding-bands.jpg",
    alt: "Hands-only of the bride and groom overlaying the bride's dress",
    orientation: "horizontal",
  },
  {
    src: "images/amber-jeff-wedding-flowers.jpeg",
    alt: "The bride gazing down at her bouquet of pink amber-jeff-wedding-flowers",
    orientation: "vertical",
  },
  {
    src: "images/becca-weber-bride1.jpg",
    alt: "Portrait of a bride with dark hair, long curls, and tiara",
    orientation: "vertical",
  },
  {
    src: "images/becca-weber-bride2.jpg",
    alt: "A black and white photo of a bride lounging on a chaise",
    orientation: "horizontal",
  },
  {
    src: "images/becca-weber-bride3.jpg",
    alt: "A black and white portrait of a bride with dark hair, long curls, and tiara",
    orientation: "horizontal",
  },
  {
    src: "images/dougarena-wedding-party.jpeg",
    alt: "Wedding party portrait in a church",
    orientation: "horizontal",
  },
  {
    src: "images/dougarena-church-door.jpeg",
    alt: "Wedding party portrait in a church",
    orientation: "vertical",
  },

  {
    src: "images/doug-arena-brides-ring.jpg",
    alt: "Bride's hand surrounded by the veil",
    orientation: "vertical",
  },
  {
    src: "images/sarah-bridals1.jpeg",
    alt: "A blonde bride",
    orientation: "vertical",
  },
  {
    src: "images/sarah-bridals2.jpeg",
    alt: "A blonde bride",
    orientation: "vertical",
  },
  {
    src: "images/amberjeff-engagement-train-station.jpeg",
    alt: "",
    orientation: "horizontal",
  },

  {
    src: "images/amberjeff-engagement-fence.jpg",
    alt: "",
    orientation: "horizontal",
  },

  {
    src: "images/jennys-7th-anniversary1.jpg",
    alt: "Headshot of a brunette woman under a white umbrella, blocking the sun",
    orientation: "vertical",
  },
  {
    src: "images/amber-in-a-field.jpeg",
    alt: "A young woman in a field of tall golden grasses, her head turned away",
    orientation: "vertical",
  },
  {
    src: "images/amber-falling-off-fence.jpeg",
    alt: "A girl falling backward off a white fence",
    orientation: "vertical",
  },
  {
    src: "images/amber-by-the-fence.jpeg",
    alt: "A girl sitting on the ground, leaning against a white fence with a white barn in the background",
    orientation: "vertical",
  },
  {
    src: "images/amber-in-the-pool.jpeg",
    alt: "Woman with short hair in a pool leaning on edge looking into the camera",
    orientation: "horizontal",
  },
  {
    src: "images/amber-in-the-pool2.jpeg",
    alt: "Woman emerging from a pool and throwing her back while water creates a halo around her head",
    orientation: "horizontal",
  },
  {
    src: "images/amber-sunflowers.jpeg",
    alt: "Portrait of a women by a garden of sunflowers",
    orientation: "horizontal",
  },
  {
    src: "images/amber-in-red1.jpeg",
    alt: "A girl in red",
    orientation: "vertical",
  },
  {
    src: "images/amber-in-red3.jpeg",
    alt: "A girl in red",
    orientation: "vertical",
  },
  {
    src: "images/bride-in-thought.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/wedding-dress-and-shoes.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/joanna-wedding-back-frenchdoors.jpg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/natalie-bridals-chaise.jpg",
    alt: "",
    orientation: "horizontal",
  },

  {
    src: "images/wedding-car.jpeg",
    alt: "",
    orientation: "horizontal",
  },

  {
    src: "images/bride-with-pearls-in-black-and-white.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/melanie-bridal-sette-mirror.jpg",
    alt: "",
    orientation: "horizontal",
  },
  {
    src: "images/melanie-wedding-dance-ceiling-canapy.jpg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/over-the-shoulder-topview.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/melanie-maternity-standing.jpg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/melanie-maternity-sitting.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/chocolate-face.jpeg",
    alt: "",
    orientation: "horizontal",
  },
  {
    src: "images/Kirk.jpg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/beercan-curlers1.jpeg",
    alt: "",
    orientation: "horizontal",
  },
  {
    src: "images/amber-corset-chair.jpeg",
    alt: "A woman dressed in a white corset and pink ruffle and lace skirt, sitting in a chair drinking a coupe of champagne",
    orientation: "vertical",
  },
  {
    src: "images/amber-hippie-dry-grass-leaning.jpeg",
    alt: "",
    orientation: "horizontal",
  },
  {
    src: "images/amber-corset-close-hand.jpg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/amber-corset-oliver.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/amber-corset-yellow-van.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/amber-hippie-dry-grass-sitting.jpg",
    alt: "",
    orientation: "horizontal",
  },
  {
    src: "images/amber-red-hair.jpg",
    alt: "",
    orientation: "horizontal",
    fit: "contain",
  },
  // {
  //   src: "images/anna-ruth-violin-red-couch-close.jpg",
  //   alt: "",
  //   orientation: "horizontal",
  // },
  {
    src: "images/amber-snow-red-boa.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/anna-ruth-violin-red-couch.jpg",
    alt: "",
    orientation: "horizontal",
  },
  {
    src: "images/annika-sr-leaves.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/annika-the-moviestar.jpeg",
    alt: "Portrait of woman dressed in a fur coat and pearls, looking over her left shoulder",
    orientation: "vertical",
  },
  {
    src: "images/betinabeverly-water.jpg",
    alt: "",
    orientation: "horizontal",
  },
  {
    src: "images/amber-in-pink-and-white2.jpeg",
    alt: "A woman wearing a white bustier and pink ruffled skirt, dressed for a wedding",
    orientation: "vertical",
  },
  {
    src: "images/cannonbeach-rowan-kite.jpg",
    alt: "A small child on the beach with a red kite flying overhead",
    orientation: "vertical",
  },
  {
    src: "images/cara-yellow-balloons-leap.jpeg",
    alt: "",
    orientation: "horizontal",
  },
  {
    src: "images/cosby-clan-focus.jpg",
    alt: "",
    orientation: "horizontal",
  },
  {
    src: "images/dana-greenfield-sr.jpg",
    alt: "",
    orientation: "horizontal",
  },
  {
    src: "images/dillaways-pumpkins.jpeg",
    alt: "",
    orientation: "horizontal",
  },
  {
    src: "images/draggin-the-ave-cowgirl.jpg",
    alt: "Black and white photo of young woman with straw hat and arm flexed showing tattoo of a bat and pumpkin",
    orientation: "horizontal",
  },
  {
    src: "images/jess-irish-sr.jpg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/julieb-stairs-back.jpg",
    alt: "A brunette woman dressed elegantly in black, posing with her back toward the camera and her head gazing to the ground",
    orientation: "vertical",
  },
  {
    src: "images/susie-black-dress-entryway.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/amber-cherry-blossom.jpg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/kaley-ray-pond.jpg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/katie-maternity-shoes.jpg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/katie-maternity-tree.jpg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/kirk-jamie-license-hands.jpg",
    alt: "Hands of the bride and groom on the marriage certificate, in black and white",
    orientation: "horizontal",
  },
  {
    src: "images/kirk-jamie-wedding-ring.jpg",
    alt: "A close-up shot of a groom's hand on his hip, showing his wedding ring",
    orientation: "horizontal",
  },
  {
    src: "images/lee-family-tree.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/lindsay-louis-engagement.jpeg",
    alt: "",
    orientation: "vertical",
  },

  {
    src: "images/amber-mary-poppins.jpeg",
    alt: "",
    orientation: "vertical",
  },

  {
    src: "images/ligia-claudiu-bouquet-kiss.jpeg",
    alt: "",
    orientation: "vertical",
    // fit: "contain",
  },
  {
    src: "images/looking-fancy-white-car.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/ligia-claudiu-wedding-charger-sunglasses.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/ligia-claudiu-wedding-compact-mirror.jpg",
    alt: "",
    orientation: "horizontal",
    fit: "contain",
  },
  {
    src: "images/ligia-claudiu-wedding-robe.jpg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/ligia-claudiu-wedding-seated-snuggle.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/melanie-wedding-feet-car.jpg",
    alt: "",
    orientation: "horizontal",
    fit: "contain",
  },
  {
    src: "images/ligia-claudiu-wedding-shoes.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/ligia-claudiu-wedding-sunset.jpg",
    alt: "",
    orientation: "horizontal",
    fit: "contain",
  },
  {
    src: "images/lizgobble-bridal-altar.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/lizgobble-bridal-back-at-window.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/lizgobble-bridal-close.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/miya-natsuhara-weights.jpg",
    alt: "",
    orientation: "horizontal",
    fit: "contain",
  },
  {
    src: "images/amber-red-hair-white-ruffles.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/natsuhara-christmas-bowling.jpeg",
    alt: "",
    orientation: "horizontal",
    fit: "contain",
  },
  {
    src: "images/natsuhara-christmas-singing.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/niko-stathokopoulos-guitar-dabi.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/rebecca-bridals-outdoor-chaise.jpg",
    alt: "",
    orientation: "horizontal",
    fit: "contain",
  },
  {
    src: "images/cara-in-red-laughing.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/wanda-darcy-50th.jpg",
    alt: "",
    orientation: "horizontal",
    fit: "contain",
  },
  {
    src: "images/susie-christmas-chair-legs.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/susie-christmas-mia-snuggle.jpg",
    alt: "",
    orientation: "horizontal",
    fit: "contain",
  },

  {
    src: "images/susie-christmas-cleveage.jpeg",
    alt: "",
    orientation: "vertical",
  },
  {
    src: "images/susie-christmas-dogs-legs.jpeg",
    alt: "",
    orientation: "horizontal",
    fit: "contain",
  },
  {
    src: "images/yellow-umbrella1.jpeg",
    alt: "",
    orientation: "horizontal",
    fit: "contain",
  },
  {
    src: "images/amber-flying-yellow-umbrella.jpg",
    alt: "",
    orientation: "horizontal",
    fit: "contain",
  },
  {
    src: "images/yellow-umbrella3.jpeg",
    alt: "",
    orientation: "horizontal",
    fit: "contain",
  },
  {
    src: "images/yellow-umbrella4.jpeg",
    alt: "",
    orientation: "horizontal",
    fit: "contain",
  },
];

const galleryContainer = document.getElementById("photo-gallery");

photos.forEach((photo, index) => {
  const item = document.createElement("div");
  item.className = `item ${photo.orientation} mosaic-item${index + 1}`;

  const img = document.createElement("img");
  img.src = photo.src;
  img.alt = photo.alt;


  // Apply lazy loading only for images after the first 10
  if (index >= 10) {
    img.loading = "lazy";
  }

  // Apply object-fit dynamically based on the `fit` property
  if (photo.fit) {
    img.style.objectFit = photo.fit; // Assign "contain" or "cover" dynamically
  } else {
    // Optional: provide a fallback fit if `fit` is not defined in the array
    img.style.objectFit = photo.orientation === "horizontal" ? "contain" : "cover";
  }


  item.appendChild(img);
  galleryContainer.appendChild(item);
});
