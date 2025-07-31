interface CollectionPageSchemaProps {
  name: string;
  description: string;
  url: string;
  mainEntity: Array<{
    name: string;
    url: string;
    description?: string;
    image?: string;
  }>;
  breadcrumb?: Array<{
    name: string;
    url: string;
  }>;
}

export default function CollectionPageSchema({ 
  name, 
  description, 
  url, 
  mainEntity, 
  breadcrumb = [] 
}: CollectionPageSchemaProps) {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": name,
    "description": description,
    "url": url,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": mainEntity.length,
      "itemListElement": mainEntity.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "name": item.name,
          "url": item.url,
          ...(item.description && { "description": item.description }),
          ...(item.image && { "image": item.image })
        }
      }))
    },
    ...(breadcrumb.length > 0 && {
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumb.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
    />
  );
}