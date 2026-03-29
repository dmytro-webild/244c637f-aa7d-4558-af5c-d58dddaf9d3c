"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterBase from '@/components/sections/footer/FooterBase';

const ProductsPage = () => {
  const navItems = [{ name: "Home", id: "home", href: "/" }, { name: "About Us", id: "about", href: "/about" }, { name: "Products", id: "products", href: "/products" }, { name: "Contact", id: "contact", href: "/contact" }];
  const footerNavItems = [{ title: "Company", items: [{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Products", href: "/products" }, { label: "Contact", href: "/contact" }] }, { title: "Contact Info", items: [{ label: "Tel: +82 53 563 0720", href: "tel:+82535630720" }] }];

  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="pill" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <div id="nav" data-section="nav"><NavbarStyleFullscreen brandName="JONG HYUK TEXTILE CO., LTD." navItems={navItems} /></div>
      <main className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      </main>
      <div id="footer" data-section="footer"><FooterBase columns={footerNavItems} /></div>
    </ThemeProvider>
  );
};
export default ProductsPage;