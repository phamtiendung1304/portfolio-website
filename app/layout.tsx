import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pham Tien Dung | Data & Risk Analytics Portfolio",
  description:
    "Economic Mathematics student at NEU specializing in Data Analytics, Risk Management, and Quantitative Finance. Founder of CMET, TEDx Organizer, former athletics medalist.",
  keywords: [
    "Pham Tien Dung",
    "portfolio",
    "data analytics",
    "risk management",
    "quantitative finance",
    "NEU",
    "credit risk",
    "machine learning finance",
    "Vietnam",
  ],
  authors: [{ name: "Pham Tien Dung" }],
  openGraph: {
    title: "Pham Tien Dung | Data & Risk Analytics Portfolio",
    description:
      "Economic Mathematics student at NEU. Data Analytics · Risk Management · Quantitative Finance.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "var(--font-body)", WebkitFontSmoothing: "antialiased" }}>{children}</body>
    </html>
  );
}
