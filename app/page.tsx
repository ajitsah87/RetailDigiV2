import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
import USP from "./components/Hero/USP";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import D2CBanner from "./components/D2CBanner/D2CBanner";

import MarketplaceBanner from "./components/MarketplaceBanner/MarketplaceBanner";
import D2CCards from "./components/D2CCards/D2CCards";
import MarketplaceCards from "./components/MarketplaceCards/MarketplaceCards";
import ContentEcosystemBanner from "./components/ContentEcosystemBanner/ContentEcosystemBanner";
import ContentEcosystemCards from "./components/ContentEcosystemCards/ContentEcosystemCards";
import Clients from "./components/Clients/Clients";
// import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";



export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <Hero /> */}
      <USP />
      <About />
      <Services />
      <D2CBanner />

      {/* Service Detail Sections (Pages 6-9) with Stacked Animation */}
      <D2CCards />

      {/* Marketplace Scaling Banner (Page 10) */}
      <MarketplaceBanner />

      {/* Marketplace Services Cards */}
      <MarketplaceCards />

      {/* Content Ecosystem Banner */}
      <ContentEcosystemBanner />

      {/* Content Ecosystem Cards */}
      <ContentEcosystemCards />

      {/* Clients Section (Page 16) */}
      <Clients />

      {/* Contact CTA */}
      {/* <Contact /> */}

      {/* Footer */}
      <Footer />
    </main>
  );
}
