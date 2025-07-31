import { useEffect } from "react";

interface NavigationItem {
  name: string;
  url: string;
  description?: string;
}

interface SiteNavigationSchemaProps {
  navigationItems?: NavigationItem[];
}

export default function SiteNavigationSchema({ 
  navigationItems = [
    { name: "Home", url: "https://lackawannagolfcarts.com/", description: "Lackawanna County Golf Carts homepage" },
    { name: "Inventory", url: "https://lackawannagolfcarts.com/inventory", description: "Browse our golf cart inventory" },
    { name: "Rentals", url: "https://lackawannagolfcarts.com/rentals", description: "Golf cart rental services" },
    { name: "Services", url: "https://lackawannagolfcarts.com/services", description: "Golf cart maintenance and repair services" },
    { name: "Showroom", url: "https://lackawannagolfcarts.com/showroom", description: "Visit our showroom locations" },
    { name: "About", url: "https://lackawannagolfcarts.com/about", description: "About Lackawanna County Golf Carts" },
    { name: "Contact", url: "https://lackawannagolfcarts.com/contact", description: "Contact information and locations" }
  ]
}: SiteNavigationSchemaProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "name": "Main Navigation",
      "about": {
        "@type": "WebSite",
        "name": "Atlantic County Golf Carts",
        "url": "https://lackawannagolfcarts.com"
      },
      "hasPart": navigationItems.map((item, index) => ({
        "@type": "WebPageElement",
        "name": item.name,
        "description": item.description,
        "url": item.url,
        "position": index + 1
      }))
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-navigation]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-navigation", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-navigation]');
      if (script) {
        script.remove();
      }
    };
  }, [navigationItems]);

  return null;
}