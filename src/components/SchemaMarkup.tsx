
import React from 'react';

const SchemaMarkup = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Crescentia Consultoria",
    "url": "https://crescentia.pt",
    "logo": "https://crescentia.pt/lovable-uploads/65dcde66-bac8-477b-b9f9-f5fc973e7960.png",
    "description": "Consultoria de gestão especializada em fundos europeus, crescimento estratégico e transformação empresarial para PME portuguesas.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Porto",
      "addressCountry": "Portugal"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+351913960220",
      "contactType": "customer service",
      "email": "info@crescentia.pt"
    },
    "sameAs": [
      "https://www.linkedin.com/company/crescentiapt/",
      "https://www.instagram.com/crescentia.pt?igsh=NzBueGV6MmQ0OHA2&utm_source=qr"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Crescentia Consultoria",
    "image": "https://crescentia.pt/lovable-uploads/65dcde66-bac8-477b-b9f9-f5fc973e7960.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Porto",
      "addressCountry": "Portugal"
    },
    "telephone": "+351913960220",
    "email": "info@crescentia.pt",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Consultoria de Fundos Europeus",
    "provider": {
      "@type": "Organization",
      "name": "Crescentia Consultoria"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Portugal"
    },
    "description": "Ajudamos PME portuguesas a crescer com apoios do Portugal 2030 e PRR. Candidaturas, planos de negócio e gestão estratégica, com acompanhamento completo.",
    "offers": {
      "@type": "Offer",
      "price": "500",
      "priceCurrency": "EUR"
    }
  };

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
};

export default SchemaMarkup;
