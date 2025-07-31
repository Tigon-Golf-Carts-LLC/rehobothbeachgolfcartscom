interface ContactPointSchemaProps {
  contactType: string;
  telephone: string;
  email?: string;
  areaServed?: string;
  availableLanguage?: string[];
  hoursAvailable?: Array<{
    dayOfWeek: string;
    opens: string;
    closes: string;
  }>;
}

export default function ContactPointSchema({ 
  contactType, 
  telephone, 
  email, 
  areaServed, 
  availableLanguage = ["English"],
  hoursAvailable 
}: ContactPointSchemaProps) {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "contactType": contactType,
    "telephone": telephone,
    ...(email && { "email": email }),
    ...(areaServed && { "areaServed": areaServed }),
    "availableLanguage": availableLanguage,
    ...(hoursAvailable && {
      "hoursAvailable": hoursAvailable.map(hours => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": hours.dayOfWeek,
        "opens": hours.opens,
        "closes": hours.closes
      }))
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
    />
  );
}