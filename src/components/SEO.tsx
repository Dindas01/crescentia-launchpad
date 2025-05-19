
import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Crescentia Consultoria – Fundos Europeus e Estratégia Empresarial",
  description = "Ajudamos PME portuguesas a crescer com apoios do Portugal 2030 e PRR. Candidaturas, planos de negócio e gestão estratégica, com acompanhamento completo.",
  canonical = "https://crescentia.pt/",
  image = "/lovable-uploads/484bd9fa-9746-4785-a7b3-649232b78d95.png",
  type = "website",
}) => {
  const siteUrl = "https://crescentia.pt";
  const fullCanonicalUrl = canonical.startsWith("http") ? canonical : `${siteUrl}${canonical}`;
  const fullImageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="Crescentia Consultoria" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@crescentia" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
};

export default SEO;
