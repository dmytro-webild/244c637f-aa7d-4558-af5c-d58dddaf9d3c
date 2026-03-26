"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Lightbulb, DollarSign, Rocket, CheckCircle, Gauge, Award, Globe } from "lucide-react";

const HomePage = () => {
  const resolvedAssets = {
    "hero-fabric-rolls": "http://img.b2bpic.net/free-photo/close-up-man-male-senior-tailor-selecting-fabric-shelf_23-2148180337.jpg",    "testimonial-avatar-1": "http://img.b2bpic.net/free-photo/indoor-shot-attractive-caucasian-teenage-woman-with-long-dark-hair-sitting-desk-with-lots-textbooks_273609-1136.jpg",    "testimonial-avatar-2": "http://img.b2bpic.net/free-photo/confident-young-businesswoman-standing-city-smiling-generated-by-ai_188544-20361.jpg",    "testimonial-avatar-3": "http://img.b2bpic.net/free-photo/confident-african-american-businessman-black-classic-jacket-isolated-dark-background_613910-17869.jpg",    "testimonial-avatar-4": "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1652.jpg",    "hero-avatar-1": "http://img.b2bpic.net/free-photo/senior-man-taking-measurement-fabric-customer-shop_23-2148180333.jpg",    "hero-avatar-2": "http://img.b2bpic.net/free-photo/handsome-bearded-fashion-designer-taking-break-from-work-thinking-about-new-designs_613910-5289.jpg",    "hero-avatar-3": "http://img.b2bpic.net/free-photo/portrait-young-business-man-posing-with-crossed-arms_23-2149206526.jpg",    "hero-avatar-4": "http://img.b2bpic.net/free-photo/medium-shot-brazilian-woman-working-as-clothing-designer_23-2150762234.jpg",    "hero-avatar-5": "http://img.b2bpic.net/free-photo/happy-professional-partners-posing-photo-smiling-looking-camera-african-american-successful-businessman-caucasian-businesswoman-taking-selfie-teamwork-business-concept_74855-7442.jpg",    "feature-fabric-development": "http://img.b2bpic.net/free-photo/still-life-fashion-designer-s-office_23-2150543686.jpg",    "feature-quality-control": "http://img.b2bpic.net/free-photo/store-customer-waiting-counter_482257-85808.jpg",    "feature-quick-delivery": "http://img.b2bpic.net/free-photo/close-up-volunteer-oganizing-stuff-donation_23-2149134476.jpg",    "feature-competitive-price": "http://img.b2bpic.net/free-photo/vintage-woman-sewing-cloth-by-hand-with-embroidery-set-wooden-table-people-handmade-diy-housework-concept_1150-13525.jpg",    "product-silky-polyester": "http://img.b2bpic.net/free-photo/silk-fabric-creme-material-home-decoration_23-2148516038.jpg",    "product-rayon-fabric": "http://img.b2bpic.net/free-photo/closeup-shot-colorful-fabric-section-outdoor-market_181624-17441.jpg",    "product-nylon-fabric": "http://img.b2bpic.net/free-photo/smooth-elegant-purple-fabric-material-texture_23-2148402307.jpg",    "product-brocade-fabric": "http://img.b2bpic.net/free-photo/top-view-pinecone-beige-shawl-dark-surface_140725-63512.jpg",    "contact-background": "http://img.b2bpic.net/free-photo/close-up-glasses-with-employees-background_1098-2575.jpg"
  };

  const navItems = [
    { name: "Home", id: "home", href: "/" },
    { name: "About Us", id: "about", href: "/about" },
    { name: "Products", id: "products", href: "/products" },
    { name: "Contact", id: "contact", href: "/contact" },
  ];

  const footerNavItems = [
    { title: "Company", items: [{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Products", href: "/products" }, { label: "Contact", href: "/contact" }] },
    { title: "Contact Info", items: [{ label: "Tel: +82 53 563 0720", href: "tel:+82535630720" }, { label: "Email: jonghyuk-tex@hanmail.net", href: "mailto:jonghyuk-tex@hanmail.net" }] },
    { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] },
  ];

  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="background-highlight" borderRadius="pill" contentWidth="mediumSmall" sizing="large" background="blurBottom" cardStyle="layered-gradient" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="extrabold">
      <div id="nav" data-section="nav"><NavbarStyleFullscreen brandName="JONG HYUK TEXTILE" navItems={navItems} /></div>
      <div id="hero" data-section="hero"><HeroSplitTestimonial title="Your Trusted Korean Textile Export Partner" description="Premium silky polyester, rayon, nylon, brocade, and digital print fabrics for global buyers and fashion manufacturers." background={{ variant: "radial-gradient" }} testimonials={[{ name: "Sarah Chen", handle: "Fashion Buyer, USA", testimonial: "JONG HYUK TEXTILE consistently delivers exceptional quality.", rating: 5, imageSrc: resolvedAssets["testimonial-avatar-1"] }]} buttons={[{ text: "Request a Quote", href: "/contact" }, { text: "View Products", href: "/products" }]} imageSrc={resolvedAssets["hero-fabric-rolls"]} /></div>
      <div id="about-home" data-section="about-home"><AboutMetric title="About JONG HYUK TEXTILE CO., LTD." metrics={[{ icon: Gauge, label: "Years of Expertise", value: "30+" }, { icon: Award, label: "Quality Fabrics", value: "Premium" }, { icon: Globe, label: "Export Markets", value: "6+" }]} /></div>
      <div id="features-strengths" data-section="features-strengths"><FeatureCardTwentyFive animationType="slide-up" title="Our Core Strengths & Expertise" description="Cutting-edge technology meets customer-centric service." features={[{ title: "Silk-Like Polyester", description: "Luxurious feel and look.", icon: Sparkles, mediaItems: [{ imageSrc: resolvedAssets["feature-fabric-development"] }, { imageSrc: resolvedAssets["feature-quality-control"] }] }, { title: "Digital Print Fabrics", description: "High-end design capabilities.", icon: Lightbulb, mediaItems: [{ imageSrc: resolvedAssets["feature-fabric-development"] }, { imageSrc: resolvedAssets["feature-quality-control"] }] }]} textboxLayout="default" useInvertedBackground={false} /></div>
      <div id="products-home" data-section="products-home"><ProductCardTwo animationType="slide-up" title="Our Premium Fabric Collections" description="Premium polyester, brocade, and digital print fabrics." products={[{ id: "1", brand: "JONG HYUK", name: "Silky Polyester", price: "Inquire", rating: 5, imageSrc: resolvedAssets["product-silky-polyester"] }, { id: "2", brand: "JONG HYUK", name: "Brocade Fabrics", price: "Inquire", rating: 5, imageSrc: resolvedAssets["product-brocade-fabric"] }]} gridVariant="uniform-all-items-equal" textboxLayout="default" useInvertedBackground={true} /></div>
      <div id="contact-home" data-section="contact-home"><ContactCenter tag="Get in Touch" title="Partner with Us" description="Discuss your fabric needs." buttonText="Send Inquiry" /></div>
      <div id="footer" data-section="footer"><FooterBase columns={footerNavItems} /></div>
    </ThemeProvider>
  );
};

export default HomePage;