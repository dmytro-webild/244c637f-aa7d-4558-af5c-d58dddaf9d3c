"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterBase from '@/components/sections/footer/FooterBase';
import { LayoutTemplate } from "@/components/LayoutTemplate";

const AboutPage = () => {
  const navItems = [{ name: "Home", id: "home", href: "/" }, { name: "About Us", id: "about", href: "/about" }, { name: "Products", id: "products", href: "/products" }, { name: "Contact", id: "contact", href: "/contact" }];
  const footerNavItems = [{ title: "Company", items: [{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Products", href: "/products" }, { label: "Contact", href: "/contact" }] }, { title: "Contact Info", items: [{ label: "Tel: +82 53 563 0720", href: "tel:+82535630720" }] }];

  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" borderRadius="pill">
      <NavbarStyleFullscreen brandName="JONG HYUK TEXTILE" navItems={navItems} />
      <main className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <p className="text-lg mb-6">JONG HYUK TEXTILE CO., LTD. is a premier Korean textile exporter with over 30 years of experience. We specialize in high-quality silky polyester, rayon, nylon, brocade, and intricate digital print fabrics.</p>
        <p className="text-lg">Our expertise lies in bridging the gap between innovative Korean fabric technology and global fashion manufacturers, ensuring superior quality and timely delivery.</p>
      </main>
      <FooterBase columns={footerNavItems} />
    </ThemeProvider>
  );
};
export default AboutPage;