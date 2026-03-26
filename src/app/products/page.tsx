"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterBase from '@/components/sections/footer/FooterBase';

const ProductsPage = () => {
  const navItems = [{ name: "Home", id: "home", href: "/" }, { name: "About Us", id: "about", href: "/about" }, { name: "Products", id: "products", href: "/products" }, { name: "Contact", id: "contact", href: "/contact" }];
  const footerNavItems = [{ title: "Company", items: [{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Products", href: "/products" }, { label: "Contact", href: "/contact" }] }, { title: "Contact Info", items: [{ label: "Tel: +82 53 563 0720", href: "tel:+82535630720" }] }];

  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" borderRadius="pill">
      <NavbarStyleFullscreen brandName="JONG HYUK TEXTILE" navItems={navItems} />
      <main className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="p-6 border rounded-xl"><h3>Silky Polyester</h3><p>Luxury feel, durable performance.</p></div>
           <div className="p-6 border rounded-xl"><h3>Digital Print Fabrics</h3><p>Infinite design possibilities.</p></div>
           <div className="p-6 border rounded-xl"><h3>Brocade Fabrics</h3><p>Elegant and intricate textures.</p></div>
        </div>
      </main>
      <FooterBase columns={footerNavItems} />
    </ThemeProvider>
  );
};
export default ProductsPage;