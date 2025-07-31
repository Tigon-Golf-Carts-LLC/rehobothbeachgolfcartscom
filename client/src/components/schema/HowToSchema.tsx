interface HowToSchemaProps {
  name: string;
  description: string;
  image?: string;
  totalTime?: string;
  estimatedCost?: {
    currency: string;
    value: string;
  };
  supply?: string[];
  tool?: string[];
  steps: Array<{
    name: string;
    text: string;
    image?: string;
    url?: string;
  }>;
}

export default function HowToSchema({ 
  name, 
  description, 
  image, 
  totalTime, 
  estimatedCost, 
  supply = [], 
  tool = [], 
  steps 
}: HowToSchemaProps) {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    ...(image && { "image": image }),
    ...(totalTime && { "totalTime": totalTime }),
    ...(estimatedCost && {
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": estimatedCost.currency,
        "value": estimatedCost.value
      }
    }),
    ...(supply.length > 0 && {
      "supply": supply.map(item => ({
        "@type": "HowToSupply",
        "name": item
      }))
    }),
    ...(tool.length > 0 && {
      "tool": tool.map(item => ({
        "@type": "HowToTool",
        "name": item
      }))
    }),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image && { "image": step.image }),
      ...(step.url && { "url": step.url })
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
    />
  );
}