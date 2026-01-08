// Rehoboth Beach Golf Carts - Professional Dealership Background Images
// 6 new professional golf cart dealership images for dynamic backgrounds

import image1 from "@assets/a-photograph-of-a-modern-golf-cart-deale_ZIJgnM0qSLqCnmqzAiha0w_Tcds7ckvRe6FNLFDKo_aDg_1755541056710.jpeg";
import image2 from "@assets/a-photograph-of-a-modern-golf-cart-deale_HQLrBC_STwCeCd7iep9YOA_Tcds7ckvRe6FNLFDKo_aDg_1755541056710.jpeg";
import image3 from "@assets/a-photograph-of-a-modern-golf-cart-deale_dw-CxZw4SSq1umi72SC6bw_qUKFPYosR52Nhi9vhPGJ5A_1755541056711.jpeg";
import image4 from "@assets/a-photograph-of-a-modern-golf-cart-deale_BmkjJPKgRKmt_qykvK10yQ_qUKFPYosR52Nhi9vhPGJ5A_1755541056711.jpeg";
import image5 from "@assets/a-photograph-of-a-modern-golf-cart-deale_Bqa4S713QQqktKcOLRa_wg_eJnoFKA0TtWJ--h6aqGbvw_1755541056711.jpeg";
import image6 from "@assets/a-photograph-of-a-modern-golf-cart-deale_9KgglZ9VRFSOpjjp3ewMxA_eJnoFKA0TtWJ--h6aqGbvw_1755541056711.jpeg";

export const backgroundImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];

// Page-specific background image assignments for consistency
export const pageBackgrounds = {
  home: image1,           // Professional showroom for homepage
  inventory: image2,      // Multiple golf carts display
  rentals: image3,        // Service-focused dealership view
  services: image4,       // Professional service area
  about: image5,          // Welcoming dealership interior
  contact: image6,        // Professional customer service area
  showroom: image1,       // Same as home for consistency
  denago: image5,         // Changed to welcoming dealership interior
  evolution: image6,      // Changed to professional customer service area
  vehicle: image4,        // Individual vehicle detail pages
  vehicleDetail: image3,  // Alternative for vehicle details
  default: image2,        // Changed fallback to multiple golf carts display
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