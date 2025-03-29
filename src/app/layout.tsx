// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Head from "next/head";

const dm = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Steel Warehouse & Poultry Projects | Sharq Al Hirah Dubai Sharjah",
  description:
    "Over 10 years of experience in steel warehouse construction and poultry farm projects across the UAE and GCC. Trusted by top brands for equipment installation and custom construction.",
  keywords: [
    "steel warehouse UAE",
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
    title: "Steel Warehouse & Poultry Projects | Sharqalhirah Dubai Sharjah",
    description:
      "Certified experts in steel warehouse construction and poultry farm projects with a decade of experience in the UAE and GCC.",
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
    title: "Steel Warehouse & Poultry Projects | Sharq Al Hirah Dubai Sharja",
    description:
      "Industry-leading steel building and poultry farm construction in the UAE.",
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RC2YGHTET6"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RC2YGHTET6');
    `,
          }}
        ></script>
      </Head>
      <body className={dm.className}>{children}</body>
    </html>
  );
}
