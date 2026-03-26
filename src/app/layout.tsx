import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'JONG HYUK TEXTILE - Korean Textile Exporter & Manufacturer',
  description: 'JONG HYUK TEXTILE CO., LTD. specializes in premium polyester, rayon, nylon, brocade, and digital print fabrics. Your trusted Korean textile export partner for global buyers.',
  keywords: ["Korean textile exporter, polyester fabric supplier Korea, silky polyester fabric exporter, digital print fabric supplier, Korean fabric manufacturer, textile exporter Daegu Korea, brocade fabric supplier, rayon nylon fabric exporter, JONG HYUK TEXTILE"],
  openGraph: {
    "title": "JONG HYUK TEXTILE - Korean Textile Exporter & Manufacturer",
    "description": "JONG HYUK TEXTILE CO., LTD. specializes in premium polyester, rayon, nylon, brocade, and digital print fabrics. Your trusted Korean textile export partner for global buyers.",
    "url": "https://www.jonghyuk.net",
    "siteName": "JONG HYUK TEXTILE CO., LTD.",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/close-up-man-male-senior-tailor-selecting-fabric-shelf_23-2148180337.jpg",
        "alt": "Premium fabric rolls in a modern textile factory"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "JONG HYUK TEXTILE - Korean Textile Exporter & Manufacturer",
    "description": "JONG HYUK TEXTILE CO., LTD. specializes in premium polyester, rayon, nylon, brocade, and digital print fabrics. Your trusted Korean textile export partner for global buyers.",
    "images": [
      "http://img.b2bpic.net/free-photo/close-up-man-male-senior-tailor-selecting-fabric-shelf_23-2148180337.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
