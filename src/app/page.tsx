import {
  HeroSection,
  TrustedPartners,
  HighlightsSection,
  EmpoweringTrade,
  JourneySteps,
  ProductCategories,
  BusinessSectors,
  ZareaServices,
  ContactSection,
  MarketPrices,
  StayInformed,
  MobileApp,
  NewsSection,
  PromoStats,
} from "@/components/sections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HighlightsSection />
      <TrustedPartners />
      <EmpoweringTrade />
      <PromoStats />
      <JourneySteps />
      <ProductCategories />
      <BusinessSectors />
      <ZareaServices />
      <ContactSection />
      <MarketPrices />
      <StayInformed />
      <MobileApp />
      <NewsSection />
    </div>
  );
}
