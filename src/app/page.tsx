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
import Link from "next/link";
import { Sparkles, Lightbulb, DollarSign, Rocket, CheckCircle, Gauge, Award, Globe } from "lucide-react";

const HomePage = () => {
  const resolvedAssets = {
    "hero-fabric-rolls": "http://img.b2bpic.net/free-photo/close-up-man-male-senior-tailor-selecting-fabric-shelf_23-2148180337.jpg",    "testimonial-avatar-1": "http://img.b2bpic.net/free-photo/indoor-shot-attractive-caucasian-teenage-woman-with-long-dark-hair-sitting-desk-with-lots-textbooks_273609-1136.jpg",    "testimonial-avatar-2": "http://img.b2bpic.net/free-photo/confident-young-businesswoman-standing-city-smiling-generated-by-ai_188544-20361.jpg",    "testimonial-avatar-3": "http://img.b2bpic.net/free-photo/confident-african-american-businessman-black-classic-jacket-isolated-dark-background_613910-17869.jpg",    "testimonial-avatar-4": "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1652.jpg",    "hero-avatar-1": "http://img.b2bpic.net/free-photo/senior-man-taking-measurement-fabric-customer-shop_23-2148180333.jpg",    "hero-avatar-2": "http://img.b2bpic.net/free-photo/handsome-bearded-fashion-designer-taking-break-from-work-thinking-about-new-designs_613910-5289.jpg",    "hero-avatar-3": "http://img.b2bpic.net/free-photo/portrait-young-business-man-posing-with-crossed-arms_23-2149206526.jpg",    "hero-avatar-4": "http://img.b2bpic.net/free-photo/medium-shot-brazilian-woman-working-as-clothing-designer_23-2150762234.jpg",    "hero-avatar-5": "http://img.b2bpic.net/free-photo/happy-professional-partners-posing-photo-smiling-looking-camera-african-american-successful-businessman-caucasian-businesswoman-taking-selfie-teamwork-business-concept_74855-7442.jpg",    "feature-fabric-development": "http://img.b2bpic.net/free-photo/still-life-fashion-designer-s-office_23-2150543686.jpg",    "feature-quality-control": "http://img.b2bpic.net/free-photo/store-customer-waiting-counter_482257-85808.jpg",    "feature-quick-delivery": "http://img.b2bpic.net/free-photo/close-up-volunteer-oganizing-stuff-donation_23-2149134476.jpg",    "feature-competitive-price": "http://img.b2bpic.net/free-photo/vintage-woman-sewing-cloth-by-hand-with-embroidery-set-wooden-table-people-handmade-diy-housework-concept_1150-13525.jpg",    "product-silky-polyester": "http://img.b2bpic.net/free-photo/silk-fabric-creme-material-home-decoration_23-2148516038.jpg",    "product-rayon-fabric": "http://img.b2bpic.net/free-photo/closeup-shot-colorful-fabric-section-outdoor-market_181624-17441.jpg",    "product-nylon-fabric": "http://img.b2bpic.net/free-photo/smooth-elegant-purple-fabric-material-texture_23-2148402307.jpg",    "product-brocade-fabric": "http://img.b2bpic.net/free-photo/top-view-pinecone-beige-shawl-dark-surface_140725-63512.jpg",    "product-digital-print": "http://img.b2bpic.net/free-photo/rolls-textiles-factory_23-2147774204.jpg",    "contact-background": "http://img.b2bpic.net/free-photo/close-up-glasses-with-employees-background_1098-2575.jpg"
  };

  const navItems = [
    { name: "Home", id: "home", href: "/" },
    { name: "About Us", id: "about", href: "/about" },
  ];

  const footerNavItems = [
    {
      title: "Company",      items: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" }
      ],
    },
    {
      title: "Contact Info",      items: [
        { label: "Tel: +82 53 563 0720", href: "tel:+82535630720" },
        { label: "Fax: +82 53 567 0722", href: "fax:+82535670722" },
        { label: "Email: jonghyuk-tex@hanmail.net", href: "mailto:jonghyuk-tex@hanmail.net" },
        { label: "Website: www.jonghyuk.net", href: "https://www.jonghyuk.net" },
        { label: "Address: 379 Waryong-ro, Seo-gu, Daegu, 41755, Korea", href: "#" },
      ],
    },
    {
      title: "Legal",      items: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="mediumSmall"
      sizing="large"
      background="blurBottom"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen brandName="JONG HYUK TEXTILE" navItems={navItems} />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          title="Your Trusted Korean Textile Export Partner"
          description="Premium silky polyester, rayon, nylon, brocade, and digital print fabrics for global buyers and fashion manufacturers."
          background={{ variant: "radial-gradient" }}
          testimonials={[
            {
              name: "Sarah Chen",              handle: "Fashion Buyer, USA",              testimonial: "JONG HYUK TEXTILE consistently delivers exceptional quality and innovative fabrics. Their silky polyester is unparalleled.",              rating: 5,
              imageSrc: resolvedAssets["testimonial-avatar-1"],
              imageAlt: "Sarah Chen, Fashion Buyer"
            },
            {
              name: "Ahmed Al-Mansoori",              handle: "Garment Manufacturer, UAE",              testimonial: "Reliable delivery and competitive pricing make JONG HYUK TEXTILE our preferred partner for diverse fabric needs.",              rating: 5,
              imageSrc: resolvedAssets["testimonial-avatar-2"],
              imageAlt: "Ahmed Al-Mansoori, Garment Manufacturer"
            },
            {
              name: "Maria Garcia",              handle: "Textile Importer, Spain",              testimonial: "Their commitment to customer-oriented development and quick response times are truly impressive. A fantastic partner.",              rating: 5,
              imageSrc: resolvedAssets["testimonial-avatar-3"],
              imageAlt: "Maria Garcia, Textile Importer"
            },
            {
              name: "Dr. Kenji Tanaka",              handle: "Design Director, Japan",              testimonial: "The versatility and quality of their digital print fabrics allow us endless creative possibilities every season.",              rating: 5,
              imageSrc: resolvedAssets["testimonial-avatar-4"],
              imageAlt: "Dr. Kenji Tanaka, Design Director"
            },
          ]}
          testimonialRotationInterval={5000}
          useInvertedBackground={false}
          buttons={[
            { text: "Request a Quote", href: "/contact" },
            { text: "View Products", href: "/products" },
          ]}
          buttonAnimation="slide-up"
          avatars={[
            { src: resolvedAssets["hero-avatar-1"], alt: "Global Buyer 1" },
            { src: resolvedAssets["hero-avatar-2"], alt: "Global Buyer 2" },
            { src: resolvedAssets["hero-avatar-3"], alt: "Global Buyer 3" },
            { src: resolvedAssets["hero-avatar-4"], alt: "Global Buyer 4" },
            { src: resolvedAssets["hero-avatar-5"], alt: "Global Buyer 5" },
          ]}
          avatarText="Trusted by leading fashion brands & manufacturers worldwide"
          imageSrc={resolvedAssets["hero-fabric-rolls"]}
          imageAlt="Premium fabric rolls in a modern textile factory"
          mediaAnimation="slide-up"
          imagePosition="right"
          fixedMediaHeight={true}
        />
      </div>

      <div id="about-home" data-section="about-home">
        <AboutMetric
          title="About JONG HYUK TEXTILE CO., LTD."
          metrics={[
            { icon: Gauge, label: "Years of Expertise", value: "30+" },
            { icon: Award, label: "Quality Fabrics", value: "Premium" },
            { icon: Globe, label: "Export Markets", value: "6+" },
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="features-strengths" data-section="features-strengths">
        <FeatureCardTwentyFive
          animationType="slide-up"
          title="Our Core Strengths & Expertise"
          description="Experience the JONG HYUK TEXTILE difference. We combine cutting-edge technology with customer-centric service to deliver unparalleled textile solutions."
          features={[
            {
              title: "Silk-Like Polyester Technology",              description: "Specialized in creating polyester fabrics with the luxurious look and feel of natural silk.",              icon: Sparkles,
              mediaItems: [
                { imageSrc: resolvedAssets["feature-fabric-development"], imageAlt: "Silk-like polyester fabric texture" },
                { imageSrc: resolvedAssets["feature-quality-control"], imageAlt: "Fabric quality inspection" }
              ],
            },
            {
              title: "Seasonal Fabric Development",              description: "Continuously developing new items inspired by global market trends and customer needs every season.",              icon: Lightbulb,
              mediaItems: [
                { imageSrc: resolvedAssets["feature-fabric-development"], imageAlt: "Fabric research and development" },
                { imageSrc: resolvedAssets["feature-quality-control"], imageAlt: "Fabric testing equipment" }
              ],
            },
            {
              title: "Competitive Pricing",              description: "Offering cost-effective solutions without compromising on the superior quality of our textiles.",              icon: DollarSign,
              mediaItems: [
                { imageSrc: resolvedAssets["feature-quick-delivery"], imageAlt: "Global shipping containers" },
                { imageSrc: resolvedAssets["feature-competitive-price"], imageAlt: "Competitive pricing chart" }
              ],
            },
            {
              title: "Quick Delivery",              description: "Streamlined logistics and efficient production ensure timely delivery to your global destinations.",              icon: Rocket,
              mediaItems: [
                { imageSrc: resolvedAssets["feature-quick-delivery"], imageAlt: "Cargo ship at port" },
                { imageSrc: resolvedAssets["feature-competitive-price"], imageAlt: "Logistics network map" }
              ],
            },
            {
              title: "Best Quality Guarantee",              description: "Rigorous quality control processes ensure every fabric meets international standards of excellence.",              icon: CheckCircle,
              mediaItems: [
                { imageSrc: resolvedAssets["feature-quality-control"], imageAlt: "Textile quality inspection" },
                { imageSrc: resolvedAssets["feature-fabric-development"], imageAlt: "Textile lab equipment" }
              ],
            },
            {
              title: "Reliable Export Experience",              description: "Decades of experience in export business, ensuring smooth and dependable transactions for overseas buyers.",              icon: CheckCircle,
              mediaItems: [
                { imageSrc: resolvedAssets["feature-quick-delivery"], imageAlt: "Export documentation" },
                { imageSrc: resolvedAssets["feature-competitive-price"], imageAlt: "Global business partners" }
              ],
            },
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="products-home" data-section="products-home">
        <ProductCardTwo
          animationType="slide-up"
          title="Our Premium Fabric Collections for Export"
          description="Explore our exceptional range of polyester-based fabrics, meticulously crafted for global fashion brands and garment manufacturers. Emphasizing luxury, innovation, and durability."
          products={[
            {
              id: "1",              brand: "JONG HYUK TEXTILE",              name: "Silky Polyester Fabrics",              price: "Inquire for Quote",              rating: 5,
              reviewCount: "120+",              imageSrc: resolvedAssets["product-silky-polyester"],
              imageAlt: "Luxurious silky polyester fabric with a smooth drape"
            },
            {
              id: "2",              brand: "JONG HYUK TEXTILE",              name: "Digital Print Fabrics",              price: "Inquire for Quote",              rating: 5,
              reviewCount: "95+",              imageSrc: resolvedAssets["product-digital-print"],
              imageAlt: "Rolls of fabric showcasing vibrant digital prints"
            },
            {
              id: "3",              brand: "JONG HYUK TEXTILE",              name: "Nylon Fabrics",              price: "Inquire for Quote",              rating: 5,
              reviewCount: "75+",              imageSrc: resolvedAssets["product-nylon-fabric"],
              imageAlt: "Durable and versatile nylon fabric in a rich purple hue"
            },
            {
              id: "4",              brand: "JONG HYUK TEXTILE",              name: "Brocade Fabrics",              price: "Inquire for Quote",              rating: 5,
              reviewCount: "60+",              imageSrc: resolvedAssets["product-brocade-fabric"],
              imageAlt: "Ornate brocade fabric with intricate woven patterns and rich texture"
            },
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="social-proof-markets" data-section="social-proof-markets">
        <SocialProofOne
          title="Serving Global Markets"
          description="Proudly supplying high-quality Korean textiles to discerning clients across key international markets."
          names={[
            "Morocco",            "Turkey",            "Saudi Arabia",            "U.A.E.",            "Europe",            "America",            "Asia Pacific"
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact-home" data-section="contact-home">
        <ContactCenter
          tag="Get in Touch"
          title="Partner with Us Today"
          description="Start your journey with a trusted Korean textile manufacturer. Send us your inquiry to discuss your fabric needs."
          background={{ variant: "plain" }}
          useInvertedBackground={true}
          buttonText="Send Inquiry"
          inputPlaceholder="Your Email Address"
          termsText="By submitting this form, you agree to receive communications from JONG HYUK TEXTILE CO., LTD. You can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="JONG HYUK TEXTILE"
          copyrightText="© 2024 JONG HYUK TEXTILE CO., LTD. All rights reserved."
          columns={footerNavItems}
        />
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
