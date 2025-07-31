interface MenuSchemaProps {
  name: string;
  description: string;
  hasMenuSection: Array<{
    name: string;
    description: string;
    hasMenuItem: Array<{
      name: string;
      description: string;
      url: string;
      offers?: {
        price: string;
        priceCurrency: string;
      };
    }>;
  }>;
}

export default function MenuSchema({ name, description, hasMenuSection }: MenuSchemaProps) {
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": name,
    "description": description,
    "hasMenuSection": hasMenuSection.map(section => ({
      "@type": "MenuSection",
      "name": section.name,
      "description": section.description,
      "hasMenuItem": section.hasMenuItem.map(item => ({
        "@type": "MenuItem",
        "name": item.name,
        "description": item.description,
        "url": item.url,
        ...(item.offers && {
          "offers": {
            "@type": "Offer",
            "price": item.offers.price,
            "priceCurrency": item.offers.priceCurrency
          }
        })
      }))
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
    />
  );
}