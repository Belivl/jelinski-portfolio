import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  lang?: string;
}

export const SEO = ({
  title,
  description,
  image,
  url = window.location.href, // Be careful with this on server side, but fine for SPA client side
  type = "website",
  lang = "en",
}: SEOProps) => {
  const siteTitle = "Photo Portfolio";
  const finalTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  const metaDescription =
    description ||
    "A photography portfolio showcasing works in design, art, and 3D.";

  return (
    <Helmet title={finalTitle} htmlAttributes={{ lang }}>
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      <link rel="icon" type="image/x-icon" href="/logo.png" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={metaDescription} />
      {image && (
        <meta
          property="og:image"
          content={
            image.startsWith("http")
              ? image
              : `${window.location.origin}/${image}`
          }
        />
      )}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={metaDescription} />
      {image && (
        <meta
          property="twitter:image"
          content={
            image.startsWith("http")
              ? image
              : `${window.location.origin}/${image}`
          }
        />
      )}
    </Helmet>
  );
};
