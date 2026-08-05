"use client";

interface FaqItem {
  question: string;
  answer: string;
}

export default function StructuredData({
  type,
  data,
  faqItems,
}: {
  type: "localBusiness" | "organization" | "faqPage";
  data?: Record<string, unknown>;
  faqItems?: FaqItem[];
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    ...(data || {}),
  };

  if (type === "localBusiness") {
    schema["@type"] = "LocalBusiness";
    schema.name = "Parque de Descanso";
    schema.image = "https://www.parquededescanso.com/assets/logo-full-green.png";
    schema.url = "https://www.parquededescanso.com";
    schema.telephone = "+54-261-4700700";
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: "Chacón s/n - Rodeo de la Cruz",
      addressLocality: "Guaymallén",
      addressRegion: "Mendoza",
      addressCountry: "AR",
    };
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: -32.8833,
      longitude: -68.7167,
    };
    schema.openingHoursSpecification = [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "18:00",
      },
    ];
    schema.sameAs = [
      "https://www.facebook.com/parquededescansooficial",
      "https://www.instagram.com/parque_de_descanso_/",
      "https://www.youtube.com/@ParquedeDescanso",
    ];
  }

  if (type === "organization") {
    schema["@type"] = "Organization";
    schema.name = "Parque de Descanso";
    schema.url = "https://www.parquededescanso.com";
    schema.logo = "https://www.parquededescanso.com/assets/logo-full-green.png";
    schema.sameAs = [
      "https://www.facebook.com/parquededescansooficial",
      "https://www.instagram.com/parque_de_descanso_/",
      "https://www.youtube.com/@ParquedeDescanso",
    ];
  }

  if (type === "faqPage" && faqItems) {
    schema["@type"] = "FAQPage";
    schema.mainEntity = faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }));
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}