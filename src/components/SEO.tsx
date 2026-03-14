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

      {/* Google Tag (gtag.js) - Placeholder */}
      {!window.location.pathname.startsWith("/dev/") && (
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VM5XFDRTBM"
        ></script>
      )}
      {!window.location.pathname.startsWith("/dev/") && (
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Default consent mode to denied
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'personalization_storage': 'denied',
              'functionality_storage': 'granted',
              'security_storage': 'granted'
            });

            gtag('js', new Date());
            gtag('config', 'G-VM5XFDRTBM');
          `}
        </script>
      )}
    </Helmet>
  );
};
