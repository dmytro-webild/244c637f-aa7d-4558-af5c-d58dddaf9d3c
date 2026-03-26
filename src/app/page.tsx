"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Lightbulb, Gauge, Award, Globe } from "lucide-react";

const HomePage = () => {
  const resolvedAssets = {
    "hero-fabric-rolls": "http://img.b2bpic.net/free-photo/close-up-man-male-senior-tailor-selecting-fabric-shelf_23-2148180337.jpg",    "testimonial-avatar-1": "http://img.b2bpic.net/free-photo/indoor-shot-attractive-caucasian-teenage-woman-with-long-dark-hair-sitting-desk-with-lots-textbooks_273609-1136.jpg",    "feature-fabric-development": "http://img.b2bpic.net/free-photo/still-life-fashion-designer-s-office_23-2150543686.jpg",    "feature-quality-control": "http://img.b2bpic.net/free-photo/store-customer-waiting-counter_482257-85808.jpg",    "product-silky-polyester": "http://img.b2bpic.net/free-photo/silk-fabric-creme-material-home-decoration_23-2148516038.jpg",    "product-brocade-fabric": "http://img.b2bpic.net/free-photo/top-view-pinecone-beige-shawl-dark-surface_140725-63512.jpg"
  };

  const navItems = [
    { name: "Home", id: "home", href: "/" },
    { name: "About Us", id: "about", href: "/about" },
    { name: "Products", id: "products", href: "/products" },
    { name: "Contact", id: "contact", href: "/contact" },
  ];

  const footerNavItems = [
    { title: "Company", items: [{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Products", href: "/products" }, { label: "Contact", href: "/contact" }] },
    { title: "Contact Info", items: [{ label: "Tel: +82 53 563 0720", href: "tel:+82535630720" }] }
  ];

  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="background-highlight" borderRadius="pill" contentWidth="mediumSmall" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <div id="nav" data-section="nav"><NavbarStyleFullscreen brandName="JONG HYUK TEXTILE" navItems={navItems} /></div>
      <div id="hero" data-section="hero"><HeroSplitTestimonial title="Your Trusted Korean Textile Export Partner" description="Premium fabrics for global buyers." background={{ variant: "radial-gradient" }} testimonials={[{ name: "Sarah Chen", handle: "Fashion Buyer, USA", testimonial: "JONG HYUK TEXTILE consistently delivers exceptional quality.", rating: 5, imageSrc: resolvedAssets["testimonial-avatar-1"] }]} buttons={[{ text: "Request a Quote", href: "/contact" }]} imageSrc={resolvedAssets["hero-fabric-rolls"]} mediaAnimation="none" /></div>
      <div id="about-home" data-section="about-home"><AboutMetric title="About JONG HYUK TEXTILE CO., LTD." metrics={[{ icon: Gauge, label: "Years of Expertise", value: "30+" }, { icon: Award, label: "Quality Fabrics", value: "Premium" }, { icon: Globe, label: "Export Markets", value: "6+" }]} metricsAnimation="slide-up" useInvertedBackground={false} /></div>
      <div id="features-strengths" data-section="features-strengths"><FeatureCardTwentyFive animationType="slide-up" title="Our Core Strengths" description="Engineered for performance and aesthetic versatility." features={[{ title: "Silk-Like Polyester", description: "Engineered with proprietary filament structures to replicate natural silk's luster, drape, and breathability while maintaining high-tensile durability for intensive fashion applications.", icon: Sparkles, mediaItems: [{ imageSrc: resolvedAssets["feature-fabric-development"] }, { imageSrc: resolvedAssets["feature-quality-control"] }] }, { title: "Digital Print Fabrics", description: "High-precision sublimation printing technology that ensures saturated color fastness, razor-sharp pattern resolution, and infinite design scalability on premium synthetic substrates.", icon: Lightbulb, mediaItems: [{ imageSrc: resolvedAssets["feature-fabric-development"] }, { imageSrc: resolvedAssets["feature-quality-control"] }] }]} textboxLayout="default" useInvertedBackground={false} /></div>
      <div id="products-home" data-section="products-home"><ProductCardTwo animationType="slide-up" title="Our Premium Fabric Collections" description="High-performance materials designed for global fashion manufacturing." products={[{ id: "1", brand: "JONG HYUK", name: "Silky Polyester", price: "Request Sample", rating: 5, reviewCount: "120", imageSrc: resolvedAssets["product-silky-polyester"] }, { id: "2", brand: "JONG HYUK", name: "Brocade Fabrics", price: "Request Sample", rating: 5, reviewCount: "85", imageSrc: resolvedAssets["product-brocade-fabric"] }]} gridVariant="uniform-all-items-equal" textboxLayout="default" useInvertedBackground={true} /></div>
      <div id="contact-home" data-section="contact-home"><ContactCenter tag="Get in Touch" title="Partner with Us" description="Discuss your fabric needs." background={{ variant: "gradient-bars" }} useInvertedBackground={false} /></div>
      <div id="footer" data-section="footer"><FooterBase columns={footerNavItems} /></div>
    </ThemeProvider>
  );
};

export default HomePage;