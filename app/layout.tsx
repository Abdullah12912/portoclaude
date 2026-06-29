import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rifqi Abdullah",
    template: "%s — Rifqi Abdullah",
  },
  description: "Building systems, documenting ideas, and learning in public.",
  authors: [{ name: "Rifqi Abdullah" }],
  creator: "Rifqi Abdullah",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://rifqiabdullah.com",
    siteName: "Rifqi Abdullah",
    title: "Rifqi Abdullah",
    description: "Building systems, documenting ideas, and learning in public.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rifqi Abdullah",
    description: "Building systems, documenting ideas, and learning in public.",
    creator: "@rifqiabdullah",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
