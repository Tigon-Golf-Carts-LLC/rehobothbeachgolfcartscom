interface BrandSchemaProps {
  name: string;
  description: string;
  url: string;
  logo?: string;
  manufacturer?: string;
  slogan?: string;
  foundingDate?: string;
  products?: Array<{
    name: string;
    description: string;
    url: string;
    price?: string;
  }>;
}

export default function BrandSchema({ 
  name, 
  description, 
  url, 
  logo, 
  manufacturer, 
  slogan, 
  foundingDate, 
  products = [] 
}: BrandSchemaProps) {
  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": name,
    "description": description,
    "url": url,
    ...(logo && { 
      "logo": {
        "@type": "ImageObject",
        "url": logo
      }
    }),
    ...(manufacturer && { "manufacturer": manufacturer }),
    ...(slogan && { "slogan": slogan }),
    ...(foundingDate && { "foundingDate": foundingDate }),
    ...(products.length > 0 && {
      "makesOffer": products.map(product => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "url": product.url
        },
        ...(product.price && { "price": product.price, "priceCurrency": "USD" })
      }))
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
    />
  );
}