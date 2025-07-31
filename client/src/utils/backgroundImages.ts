// Background image utility for Lackawanna County Golf Carts
// Uses the 7 professional showroom images provided

const BACKGROUND_IMAGES = [
  '/attached_assets/a-photograph-of-a-bright-and-airy-modern_Mqxxf4iVS_KBQg3j-g8gnw_l8IbKCCSSuWoX6W2FLNsMw_1753887515749.png',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_Eeirsez3SNKojzCk7Dlpyg_l8IbKCCSSuWoX6W2FLNsMw_1753887515749.png',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_8LoG3LBnSEyHB6Yg0gn3xA_l8IbKCCSSuWoX6W2FLNsMw_1753887515750.png',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_SC7nA71FRMyTb8NgMq_-BQ_u_VoN3CNS0i8d_BqWtaCIQ_1753887515750.png',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_K_v7WdQsRLaTNn09aZyE2w_u_VoN3CNS0i8d_BqWtaCIQ_1753887515750.png',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_UY3frE8JQ2WEHGdFVwK7mw_vCbt8vjgTU-PP0t_dijFrQ_1753887515750.png',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_Ao6T71WaToGVaIAY93VA8Q_vCbt8vjgTU-PP0t_dijFrQ_1753887515750.png'
];

// Simple hash function to ensure consistent randomization based on seed
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

/**
 * Gets a consistent random background image based on a seed string
 * This ensures the same page always gets the same image, but different pages get different images
 */
export function getRandomBackgroundImage(seed: string): string {
  const index = simpleHash(seed) % BACKGROUND_IMAGES.length;
  return BACKGROUND_IMAGES[index];
}

/**
 * Gets the background style object for hero sections
 * Includes overlay for text readability
 */
export function getHeroBackgroundStyle(seed: string): React.CSSProperties {
  const image = getRandomBackgroundImage(seed);
  return {
    backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.8), rgba(14, 46, 85, 0.6)), url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
}

/**
 * Gets a lighter background style for vehicle pages and other content sections
 */
export function getLightBackgroundStyle(seed: string): React.CSSProperties {
  const image = getRandomBackgroundImage(seed);
  return {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
}

/**
 * Gets background style for call-to-action sections
 */
export function getCTABackgroundStyle(seed: string): React.CSSProperties {
  const image = getRandomBackgroundImage(seed);
  return {
    backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.9), rgba(14, 46, 85, 0.8)), url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
}