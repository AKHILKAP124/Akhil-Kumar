import React from "react";
import { Helmet } from "react-helmet";
import { BASE_URL, defaultSEO } from "../seo/SEOConfig";

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
  type,
}) {
  const seo = {
    title: title || defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    image: image || defaultSEO.image,
    url: url || BASE_URL,
    type: type || defaultSEO.type,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={defaultSEO.author} />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph */}
      <meta property="og:type" content={seo.type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={defaultSEO.twitterUsername} />

      {/* Structured Data for Person */}
      <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Akhil Kumar",
        "url": "https://akhilkumar.online/",
        "image": "${defaultSEO.image}",
        "jobTitle": "Full Stack Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance / SaaS Projects"
        },
        "sameAs": [
          "https://x.com/AkhilKumar_39",
          "https://github.com/akhilkumar39",
          "https://www.linkedin.com/in/akhilkumar39"
        ]
      }
      `}</script>s
    </Helmet>
  );
}
