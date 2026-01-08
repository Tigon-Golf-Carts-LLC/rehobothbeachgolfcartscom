interface SchemaMarkupProps {
  schema: object;
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Schema generators for different page types
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rehoboth Beach Golf Carts",
  "alternateName": "CCGC",
  "description": "Premier golf cart dealer in Sussex County, Delaware specializing in DENAGO and EVOLUTION electric vehicles with sales, service, and rentals.",
  "url": "https://rehobothbeachgolfcarts.com",
  "logo": "https://rehobothbeachgolfcarts.com/attached_assets/rehoboth_beach_golf_carts_1767888623214.png",
  "image": [
    "https://rehobothbeachgolfcarts.com/attached_assets/rehoboth_beach_golf_carts_1767888623214.png",
    "https://rehobothbeachgolfcarts.com/attached_assets/a-photograph-of-a-modern-golf-cart-deale_1Cnk505HSlGhjw-TPLFg9w_nDZV9Dn5QHiGR5OY8JPBgA_1753453234033.png"
  ],
  "telephone": "(302) 200-3151",
  "email": "rehobothbeachgolfcarts@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "DE",
    "addressCountry": "US",
    "addressLocality": "Sussex County"
  },
  "areaServed": {
    "@type": "State",
    "name": "Delaware"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 38.6800,
      "longitude": -75.3400
    },
    "geoRadius": "50000"
  },
  "foundingDate": "2008",
  "numberOfEmployees": "15-25",
  "slogan": "Professional golf cart services delivered to your town",
  "brand": ["DENAGO", "EVOLUTION"],
  "sameAs": [
    "https://www.facebook.com/rehobothbeachgolfcarts",
    "https://www.instagram.com/rehobothbeachgolfcarts"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Cart Sales and Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Electric Golf Carts"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Rentals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Service & Repair"
        }
      }
    ]
  }
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://rehobothbeachgolfcarts.com/#localbusiness",
  "name": "Rehoboth Beach Golf Carts",
  "description": "Premier golf cart dealer serving all 24 Sussex County municipalities with electric vehicle sales, service, and rentals.",
  "url": "https://rehobothbeachgolfcarts.com",
  "telephone": "(302) 200-3151",
  "email": "rehobothbeachgolfcarts@gmail.com",
  "priceRange": "$$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Financing",
  "openingHours": [
    "Mo-Fr 09:00-17:00",
    "Sa 09:00-17:00"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "DE",
    "addressCountry": "US",
    "addressLocality": "Sussex County"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.7208,
    "longitude": -75.0760
  },
  "areaServed": [
    "Rehoboth Beach", "Bethany Beach", "Lewes", "Dewey Beach", "Fenwick Island", "South Bethany",
    "Georgetown", "Seaford", "Milford", "Milton", "Laurel", "Millsboro", "Bridgeville",
    "Ocean View", "Frankford", "Selbyville", "Dagsboro", "Delmar", "Ellendale", "Greenwood",
    "Henlopen Acres", "Millville", "Bethel", "Blades"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Cart Products and Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "DENAGO Electric Golf Carts",
          "brand": "DENAGO"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "EVOLUTION Golf Carts",
          "brand": "EVOLUTION"
        }
      }
    ]
  }
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://rehobothbeachgolfcarts.com/#website",
  "name": "Rehoboth Beach Golf Carts",
  "description": "Official website for Rehoboth Beach Golf Carts - Delaware's premier electric golf cart dealer",
  "url": "https://rehobothbeachgolfcarts.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://rehobothbeachgolfcarts.com/inventory?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Rehoboth Beach Golf Carts"
  }
});

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateProductSchema = (vehicle: any) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `https://rehobothbeachgolfcarts.com/vehicles/${vehicle.id}#product`,
  "name": vehicle.name,
  "description": vehicle.description,
  "brand": {
    "@type": "Brand",
    "name": vehicle.brand
  },
  "category": vehicle.category,
  "image": vehicle.images?.map((img: string) => `https://rehobothbeachgolfcarts.com${img}`) || [],
  "offers": {
    "@type": "Offer",
    "price": vehicle.price,
    "priceCurrency": "USD",
    "availability": vehicle.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "seller": {
      "@type": "Organization",
      "name": "Rehoboth Beach Golf Carts",
      "telephone": "(302) 200-3151",
      "email": "info@rehobothbeachgolfcarts.com"
    },
    "url": `https://rehobothbeachgolfcarts.com/vehicles/${vehicle.id}`
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "23",
    "bestRating": "5",
    "worstRating": "1"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Top Speed",
      "value": vehicle.specifications?.topSpeed
    },
    {
      "@type": "PropertyValue", 
      "name": "Range",
      "value": vehicle.specifications?.range
    },
    {
      "@type": "PropertyValue",
      "name": "Seating Capacity",
      "value": vehicle.specifications?.seatingCapacity
    },
    {
      "@type": "PropertyValue",
      "name": "Battery Type",
      "value": vehicle.specifications?.batteryType
    }
  ],
  "manufacturer": {
    "@type": "Organization",
    "name": vehicle.brand
  }
});

export const generateServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Golf Cart Services",
  "description": "Comprehensive golf cart sales, service, repair, and rental services in Sussex County, Delaware",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Rehoboth Beach Golf Carts"
  },
  "areaServed": {
    "@type": "State",
    "name": "Delaware"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Cart Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Sales",
          "description": "New and used electric golf cart sales"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Golf Cart Rentals",
          "description": "Daily, weekly, and monthly golf cart rentals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Service & Repair",
          "description": "Professional maintenance and repair services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Parts",
          "description": "Genuine parts and accessories"
        }
      }
    ]
  }
});

export const generateOfferCatalogSchema = (vehicles: any[]) => ({
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Golf Cart Inventory",
  "description": "Complete inventory of electric golf carts available for sale",
  "itemListElement": vehicles.map(vehicle => ({
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": vehicle.name,
      "brand": vehicle.brand,
      "image": vehicle.images?.[0] ? `https://rehobothbeachgolfcarts.com${vehicle.images[0]}` : undefined
    },
    "price": vehicle.price,
    "priceCurrency": "USD",
    "availability": vehicle.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "url": `https://rehobothbeachgolfcarts.com/vehicles/${vehicle.id}`
  }))
});

export const generateContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Ocean County Golf Carts",
  "description": "Get in touch with Ocean County Golf Carts for sales, service, rentals, and support",
  "url": "https://rehobothbeachgolfcarts.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Ocean County Golf Carts",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "(302) 200-3151",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "email": "rehobothbeachgolfcarts@gmail.com",
        "contactType": "sales",
        "areaServed": "US"
      }
    ]
  }
});

export const generateTownPageSchema = (townName: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": `Golf Carts in ${townName}`,
  "description": `Professional golf cart sales, service, and rentals delivered to ${townName}, Sussex County, Delaware`,
  "url": `https://rehobothbeachgolfcarts.com/towns/${townName.toLowerCase().replace(/\s+/g, '-')}`,
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Rehoboth Beach Golf Carts",
    "areaServed": {
      "@type": "City",
      "name": townName,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Sussex County",
        "containedInPlace": {
          "@type": "State",
          "name": "Delaware"
        }
      }
    }
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rehobothbeachgolfcarts.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": `${townName} Golf Carts`,
        "item": `https://rehobothbeachgolfcarts.com/towns/${townName.toLowerCase().replace(/\s+/g, '-')}`
      }
    ]
  }
});