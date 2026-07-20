import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishard Dukes | IT Operations & Asset Management",
  description: "IT Operations and Asset Management professional supporting endpoint lifecycles, production technology, technical troubleshooting, and workflow automation.",
  metadataBase: new URL("https://risharddukes.com"),
  openGraph: {
    title: "Rishard Dukes | IT Operations & Asset Management",
    description: "Technical operations, endpoint support, asset lifecycle management, and practical automation.",
    url: "https://risharddukes.com",
    siteName: "Rishard Dukes",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
