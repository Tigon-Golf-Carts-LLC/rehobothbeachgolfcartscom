import { useEffect } from "react";

interface AggregateRatingSchemaProps {
  itemReviewed: {
    name: string;
    type: string;
    url?: string;
  };
  ratingValue: string;
  reviewCount: string;
  bestRating?: string;
  worstRating?: string;
  ratingExplanation?: string;
}

export default function AggregateRatingSchema({
  itemReviewed,
  ratingValue,
  reviewCount,
  bestRating = "5",
  worstRating = "1",
  ratingExplanation
}: AggregateRatingSchemaProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AggregateRating",
      "itemReviewed": {
        "@type": itemReviewed.type,
        "name": itemReviewed.name,
        ...(itemReviewed.url && { "url": itemReviewed.url })
      },
      "ratingValue": ratingValue,
      "reviewCount": reviewCount,
      "bestRating": bestRating,
      "worstRating": worstRating,
      ...(ratingExplanation && { "ratingExplanation": ratingExplanation })
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-aggregaterating]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-aggregaterating", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-aggregaterating]');
      if (script) {
        script.remove();
      }
    };
  }, [itemReviewed, ratingValue, reviewCount, bestRating, worstRating]);

  return null;
}