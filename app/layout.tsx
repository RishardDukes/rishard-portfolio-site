import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishard Dukes | IT Operations, Asset Management & Automation",
  description:
    "Portfolio of Rishard Dukes, an IT Operations and Asset Management professional with experience in endpoint support, automation, and computational science.",
};

const themeScript = `
(function () {
  try {
    var savedTheme = localStorage.getItem('theme');
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = savedTheme || (systemDark ? 'dark' : 'light');
  } catch (_) {}
})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
