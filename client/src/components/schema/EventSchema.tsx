interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: {
    name: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
  };
  organizer: {
    name: string;
    url?: string;
  };
  eventStatus?: "EventScheduled" | "EventCancelled" | "EventMovedOnline" | "EventPostponed" | "EventRescheduled";
  eventAttendanceMode?: "OfflineEventAttendanceMode" | "OnlineEventAttendanceMode" | "MixedEventAttendanceMode";
}

export default function EventSchema({ 
  name, 
  description, 
  startDate, 
  endDate, 
  location, 
  organizer,
  eventStatus = "EventScheduled",
  eventAttendanceMode = "OfflineEventAttendanceMode"
}: EventSchemaProps) {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": name,
    "description": description,
    "startDate": startDate,
    ...(endDate && { "endDate": endDate }),
    "eventStatus": `https://schema.org/${eventStatus}`,
    "eventAttendanceMode": `https://schema.org/${eventAttendanceMode}`,
    "location": {
      "@type": "Place",
      "name": location.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": location.address.streetAddress,
        "addressLocality": location.address.addressLocality,
        "addressRegion": location.address.addressRegion,
        "postalCode": location.address.postalCode,
        "addressCountry": location.address.addressCountry
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": organizer.name,
      ...(organizer.url && { "url": organizer.url })
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
    />
  );
}