import Layout from "../home/Layout";
import PropertyGallery from "./components/PropertyGallery";
import PropertyInfo from "./components/PropertyInfo";
import AboutHome from "./components/AboutHome";
import Amenities from "./components/Amenities";
import Reviews from "./components/Reviews";

export const metadata = {
  title: "Brightwoods Cabin - Localhost",
  description: "A cozy cabin retreat nestled in the heart of Bridlepath, Ontario",
  alternates: {
    canonical: "https://localhost.com/property",
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "name": "Brightwoods Cabin",
      "description": "A cozy cabin retreat in Bridlepath, Ontario",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bridlepath",
        "addressRegion": "Ontario",
        "addressCountry": "Canada",
      },
      "priceRange": "$658/night",
    }),
  },
};

export default function PropertyPage() {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto px-5 py-6">
        <PropertyGallery />
        <PropertyInfo />
        <AboutHome />
        <Amenities />
        <Reviews />
      </div>
    </Layout>
  );
}