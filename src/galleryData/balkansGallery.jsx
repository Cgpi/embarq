import img1 from "../assets/gallery/Balkans/Balkans-2023-1.jpg";
import img2 from "../assets/gallery/Balkans/Balkans-2023-2.jpg";
import img3 from "../assets/gallery/Balkans/Balkans-2023-3.jpg";
import img4 from "../assets/gallery/Balkans/Balkans-2023-4.jpg";
import img5 from "../assets/gallery/Balkans/Balkans-2023-5.jpg";
import img6 from "../assets/gallery/Balkans/Balkans-2023-6.jpg";
import img7 from "../assets/gallery/Balkans/Balkans-2023-7.jpg";
import img8 from "../assets/gallery/Balkans/Balkans-2023-8.jpg";
import img9 from "../assets/gallery/Balkans/Balkans-2023-9.jpg";
import img10 from "../assets/gallery/Balkans/Balkans-2023-10.jpg";
import img11 from "../assets/gallery/Balkans/Balkans-2023-11.jpg";
import img12 from "../assets/gallery/Balkans/Balkans-2023-12.jpg";

const balkansGallery = [
  // Row 1
  { img: img1, colSpan: 2, rowSpan: 2 }, // Big left
  { img: img2 }, // Top right
  { img: img3 }, // Top far right

  // Row 2
  { img: img4 }, // Small under img2
  { img: img5, rowSpan: 2 }, // Tall right image

  // Row 3
  { img: img6 }, // Small left
  { img: img7 }, // Small middle

  // Row 4
  { img: img8, colSpan: 2 }, // Wide bottom left
  { img: img9 },

  // Row 5
  { img: img10 },
  { img: img11 },
  { img: img12 },
];

export default balkansGallery;
