// Rehoboth Beach Golf Carts - Professional Dealership Background Images
// 8 new professional Rehoboth Beach Golf Carts dealership images for dynamic backgrounds

import image1 from "@assets/Rehobeth_Beach_Golf_Carts_1767905509928.jpeg";
import image2 from "@assets/Rehobeth_Beach_Golf_Carts_-1_1767905509928.jpeg";
import image3 from "@assets/Rehobeth_Beach_Golf_Carts_-2_1767905509928.jpeg";
import image4 from "@assets/Rehobeth_Beach_Golf_Carts_-3_1767905509929.jpeg";
import image5 from "@assets/Rehobeth_Beach_Golf_Carts_-4_1767905509929.jpeg";
import image6 from "@assets/Rehobeth_Beach_Golf_Carts_-5_1767905509929.jpeg";
import image7 from "@assets/Rehobeth_Beach_Golf_Carts_-6_1767905509930.jpeg";
import image8 from "@assets/Rehobeth_Beach_Golf_Carts_-7_1767905509930.jpeg";

export const backgroundImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

// Page-specific background image assignments for consistency
export const pageBackgrounds = {
  home: image1,           // Professional showroom for homepage
  inventory: image2,      // Multiple golf carts display
  rentals: image3,        // Service-focused dealership view
  services: image4,       // Professional service area
  about: image5,          // Welcoming dealership interior
  contact: image6,        // Professional customer service area
  showroom: image7,       // Showroom view with golf carts
  denago: image8,         // Professional dealership view
  evolution: image1,      // Professional showroom
  vehicle: image2,        // Individual vehicle detail pages
  vehicleDetail: image3,  // Alternative for vehicle details
  financing: image4,      // Financing page background
  locations: image5,      // Locations page background
  municipality: image6,   // Municipality pages
  town: image7,           // Town pages
  default: image8,        // Fallback to professional dealership
};

// Function to get background image for a specific page
export const getPageBackground = (pageName: string): string => {
  return pageBackgrounds[pageName as keyof typeof pageBackgrounds] || pageBackgrounds.default;
};

// Function to get a random background image
export const getRandomBackground = (): string => {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[randomIndex];
};

// Function to get hero background style with overlay for readability
export const getHeroBackgroundStyle = (pageName: string) => {
  const backgroundImage = getPageBackground(pageName);
  return {
    backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.75), rgba(14, 46, 85, 0.75)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
};

// Function to get lighter background style for content sections
export const getLightBackgroundStyle = (pageName: string) => {
  const backgroundImage = getPageBackground(pageName);
  return {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
};
