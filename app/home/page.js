import Layout from "./Layout";
import Hero from "./components/Hero";
import StaysSection from "./components/StaysSection";

export const metadata = {
  title: "Home - Localhost | Find a host for every journey",
  description: "Discover the best local rental properties that fits your every travel needs",
  keywords: "rental, property, accommodation, travel, localhost",
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Localhost",
      "url": "https://localhost.com",
    }),
  },
};

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <StaysSection />
    </Layout>
  );
}