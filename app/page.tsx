import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
import USP from "./components/Hero/USP";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import D2CBanner from "./components/D2CBanner/D2CBanner";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import MarketplaceBanner from "./components/MarketplaceBanner/MarketplaceBanner";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const serviceDetails = [
  {
    id: "website-building",
    label: "Website Building",
    title: "UI/UX & Identity",
    titleHighlight: "Design",
    highlightColor: "blue" as const,
    description:
      "Conversion-led design systems built on Shopify and custom platforms. We create storefronts that don't just look beautiful — they convert.",
    features: [
      {
        title: "Conversion-Led UI/UX",
        description:
          "Every element designed to guide users through the purchase journey seamlessly.",
      },
      {
        title: "Shopify Expertise",
        description:
          "Custom theme development and optimization for maximum store performance.",
      },
      {
        title: "Brand Identity Systems",
        description:
          "Cohesive visual language across web, packaging, and digital touchpoints.",
      },
    ],
    imageSrc: "/images/ecommerce-website.png",
    imageAlt: "E-commerce website design by RetailDigi",
    reverse: false,
    altBg: false,
  },
  {
    id: "paid-acquisition",
    label: "Paid Acquisition",
    title: "Meta & Google",
    titleHighlight: "Marketing",
    highlightColor: "blue" as const,
    description:
      "Driving aggressive acquisition through data-backed, multi-platform media buying.",
    features: [
      {
        title: "Precise Targeting",
        description:
          "Advanced audience targeting with behavioural insights and retargeting loops.",
      },
      {
        title: "Algorithmic Day-Parting",
        description:
          "Optimising ad delivery and bids during peak conversion windows.",
      },
      {
        title: "Cross-Platform Promotion",
        description:
          "Efficiently funnelling Meta & Google traffic to D2C websites and marketplaces.",
      },
    ],
    imageSrc: "/images/analytics-laptop.png",
    imageAlt: "Analytics dashboard for performance marketing",
    reverse: true,
    altBg: true,
  },
  {
    id: "social-media",
    label: "Social Media Management",
    title: "Community &",
    titleHighlight: "Brand Voice",
    highlightColor: "orange" as const,
    description:
      "Building authentic communities and maintaining a consistent brand voice across all social channels.",
    features: [
      {
        title: "Content Calendar Management",
        description:
          "Strategic planning and execution of platform-specific content.",
      },
      {
        title: "Community Engagement",
        description:
          "Active community management and real-time brand response.",
      },
      {
        title: "Influencer Collaborations",
        description:
          "Strategic partnerships with micro and macro influencers for authentic reach.",
      },
    ],
    imageSrc: "/images/social-media-woman.png",
    imageAlt: "Social media management by RetailDigi",
    reverse: false,
    altBg: false,
  },
];

const marketplaceServices = [
  {
    id: "ecommerce-growth",
    label: "Ecommerce Growth",
    title: "Amazon & Flipkart",
    titleHighlight: "Scaling",
    highlightColor: "orange" as const,
    description:
      "Comprehensive marketplace strategy focused on catalogue health, advertising, and conversion optimization.",
    features: [
      {
        title: "Catalog Health Optimization",
        description:
          "SEO-rich listings, A+ content, and strategic keyword placement.",
      },
      {
        title: "Marketplace Advertising",
        description:
          "Targeted PPC campaigns across Amazon and Flipkart ad platforms.",
      },
      {
        title: "Event Sales Strategy",
        description:
          "+3.5x Sales Uplift during Prime Day and Big Billion Days.",
      },
    ],
    imageSrc: "/images/brand-store.png",
    imageAlt: "Ecommerce marketplace scaling by RetailDigi",
    reverse: false,
    altBg: true,
  },
  {
    id: "quick-commerce",
    label: "Quick Commerce",
    title: "Hyperlocal",
    titleHighlight: "Sales",
    highlightColor: "blue" as const,
    description:
      "Optimizing for instant commerce platforms like Zepto, Blinkit, Swiggy Instamart, and BigBasket.",
    features: [
      {
        title: "Impulse Designing",
        description:
          "Product positioning optimized for quick-commerce discovery and impulse buys.",
      },
      {
        title: "Platform-Specific Strategy",
        description:
          "Tailored approaches for Zepto, Blinkit, Swiggy Instamart, and BigBasket.",
      },
      {
        title: "Hyperlocal Targeting",
        description:
          "Geo-targeted campaigns to drive sales in high-density areas.",
      },
    ],
    imageSrc: "/images/quick-commerce.png",
    imageAlt: "Quick commerce optimization by RetailDigi",
    reverse: true,
    altBg: false,
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <Hero /> */}
      <USP />
      <About />
      <Services />
      <D2CBanner />

      {/* Service Detail Sections (Pages 6-9) */}
      {serviceDetails.map((service) => (
        <ServiceDetail key={service.id} {...service} />
      ))}

      {/* Marketplace Scaling Banner (Page 10) */}
      <MarketplaceBanner />

      {/* Marketplace Services (Pages 11-13) */}
      {marketplaceServices.map((service) => (
        <ServiceDetail key={service.id} {...service} />
      ))}

      {/* Clients Section (Page 16) */}
      <Clients />

      {/* Contact CTA */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
