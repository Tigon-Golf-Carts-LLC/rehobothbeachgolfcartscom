import { useEffect } from "react";

interface Review {
  author: string;
  reviewBody: string;
  reviewRating: number;
  datePublished: string;
  headline?: string;
}

interface ReviewSchemaProps {
  itemReviewed: {
    name: string;
    type: string;
    url?: string;
  };
  reviews: Review[];
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
    bestRating?: string;
    worstRating?: string;
  };
}

export default function ReviewSchema({
  itemReviewed,
  reviews,
  aggregateRating = {
    ratingValue: "4.7",
    reviewCount: reviews.length.toString(),
    bestRating: "5",
    worstRating: "1"
  }
}: ReviewSchemaProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": itemReviewed.name,
      ...(itemReviewed.url && { "url": itemReviewed.url }),
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue,
        "reviewCount": aggregateRating.reviewCount,
        "bestRating": aggregateRating.bestRating,
        "worstRating": aggregateRating.worstRating
      },
      "review": reviews.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "reviewBody": review.reviewBody,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.reviewRating,
          "bestRating": "5",
          "worstRating": "1"
        },
        "datePublished": review.datePublished,
        ...(review.headline && { "headline": review.headline })
      }))
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-reviews]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-reviews", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-reviews]');
      if (script) {
        script.remove();
      }
    };
  }, [itemReviewed, reviews, aggregateRating]);

  return null;
}