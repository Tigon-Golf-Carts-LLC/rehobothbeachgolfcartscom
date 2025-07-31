interface RentalCarAgencySchemaProps {
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
  areaServed?: string;
  vehicleTypes?: string[];
  rentalPolicies?: Array<{
    type: string;
    description: string;
  }>;
  paymentMethods?: string[];
}

export default function RentalCarAgencySchema({ 
  name, 
  description, 
  url, 
  address, 
  telephone, 
  email, 
  areaServed,
  vehicleTypes = [],
  rentalPolicies = [],
  paymentMethods = ["Cash", "Credit Card"]
}: RentalCarAgencySchemaProps) {
  const rentalSchema = {
    "@context": "https://schema.org",
    "@type": ["RentalCarAgency", "LocalBusiness"],
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
    ...(areaServed && { "areaServed": areaServed }),
    ...(vehicleTypes.length > 0 && { "vehicleType": vehicleTypes }),
    "paymentAccepted": paymentMethods,
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    ...(rentalPolicies.length > 0 && {
      "termsOfService": rentalPolicies.map(policy => `${policy.type}: ${policy.description}`).join("; ")
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(rentalSchema) }}
    />
  );
}