interface AutoDealerSchemaProps {
  name: string;
  description: string;
  url: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone: string;
  email?: string;
  brands?: string[];
  services?: string[];
  paymentAccepted?: string[];
  openingHours?: Array<{
    dayOfWeek: string;
    opens: string;
    closes: string;
  }>;
}

export default function AutoDealerSchema({ 
  name, 
  description, 
  url, 
  address, 
  telephone, 
  email, 
  brands = [],
  services = [],
  paymentAccepted = ["Cash", "Credit Card", "Financing"],
  openingHours = []
}: AutoDealerSchemaProps) {
  const dealerSchema = {
    "@context": "https://schema.org",
    "@type": ["AutoDealer", "LocalBusiness"],
    "name": name,
    "description": description,
    "url": url,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "telephone": telephone,
    ...(email && { "email": email }),
    ...(brands.length > 0 && { "brand": brands }),
    ...(services.length > 0 && { "serviceType": services }),
    "paymentAccepted": paymentAccepted,
    ...(openingHours.length > 0 && {
      "openingHoursSpecification": openingHours.map(hours => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": hours.dayOfWeek,
        "opens": hours.opens,
        "closes": hours.closes
      }))
    }),
    "priceRange": "$$",
    "currenciesAccepted": "USD"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dealerSchema) }}
    />
  );
}