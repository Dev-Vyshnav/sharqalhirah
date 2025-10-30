// src/app/layout.tsx
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";

const dm = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Poultry, HVAC & Steel Warehouse Projects | Sharq Al Hirah Dubai Sharjah",
  description:
    "Sharq Al Hirah Tech. Cont., established in 2012 in the UAE, is led by Managing Director Mr. Pillai Sethunath, who brings over 30 years of experience in poultry farm projects, HVAC systems, and steel warehouse construction. The company was previously known as Librus General Contracting, founded in 1994, marking the beginning of a long legacy of technical expertise and trusted service in the GCC region.Sharq Al Hirah is recognized as a certified equipment installation partner for LAE Cuxhaven across the GCC, specializing in advanced poultry equipment installation and turnkey farm solutions. Over the years, the company has collaborated with leading international brands such as Jansen, LAE- CUXHAVEN, Techno, Salmet, Big Dutchman, and Chore Time, delivering precision and reliability in every project.Expanding its operations, Sharq Al Hirah has successfully executed numerous HVAC projects, offering high-performance climate control and ventilation systems designed for industrial, commercial, and agricultural applications.In addition, the company has completed a wide range of steel warehouse construction projects in collaboration with industry leaders like Fabtech Steel, SIABCO, EBS, and Kirby, showcasing excellence, innovation, and quality workmanship across all its divisions.",
  keywords: [
    "steel warehouse UAE",
    "HVAC UAE",
    "poultry farm construction",
    "steel building contractors",
    "Dubai construction company",
    "Sharq Al Hirah Dubai Sharjah",
    "poultry equipment installation",
  ],
  authors: [
    { name: "Sharq Al Hirah Dubai Sharjah", url: "https://sharqalhirah.com" },
  ],
  creator: "Sharq Al Hirah Dubai Sharjah",
  publisher: "Sharq Al Hirah Dubai Sharjah",
  icons: {
    icon: "/favicon_io/favicon.ico",
  },
  openGraph: {
    title: "Poultry, HVAC & Steel Warehouse Projects | Sharq Al Hirah Dubai Sharjah",
    description:
      "Certified experts in poultry farm,  HVAC and steel warehouse construction projects with a decade of experience in the UAE and GCC.",
    url: "https://sharqalhirah.com",
    siteName: "Sharq Al Hirah Dubai Sharjah",
    images: [
      {
        url: "https://sharqalhirah.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sharq Al Hirah Steel & Poultry Projects",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poultry, HVAC & Steel Warehouse Projects | Sharq Al Hirah Dubai Sharjah",
    description:
      "Industry-leading  poultry farm,  HVAC and steel warehouse construction projects in the UAE.",
    images: ["https://sharqalhirah.com/og-image.jpg"],
    creator: "@Sharq_Al_Hirah_Dubai_Sharja", // optional if you have a Twitter handle
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          property="og:image"
          content="https://sharqalhirah.com/og-image.jpg"
        />
        <meta
          name="twitter:image"
          content="https://sharqalhirah.com/og-image.jpg"
        />
        <link
          rel="icon"
          href="https://sharqalhirah.com/favicon_io/favicon.ico"
        />
      </Head>
      <body className={dm.className}>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
        <Analytics />
      </body>
    </html>
  );
}
