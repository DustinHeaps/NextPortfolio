import { Analytics } from '@vercel/analytics/next';

import type { Metadata } from "next";

import "./globals.css";
import { CSPostHogProvider } from "./providers";

export const metadata: Metadata = {
  title: "Dustin Heaps | Portfolio",
  description:
    "Welcome to Dustin Heaps' portfolio - a web developer specializing in creating stunning web experiences using Javascript. Explore Dustin's projects and achievements in HTML, CSS, JavaScript, and 3D design. Contact Dustin Okpukpan today to learn how they can bring your next web project to life!",
  keywords:
    "Portfolio, Developer, HTML, CSS, JavaScript, Web, Front-End, Frontend development, Software Engineer, User interface, User experience, Responsive design, Mobile-first design, Cross-browser compatibility, React, Website optimization, Performance optimization, Code quality, SEO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>
        <CSPostHogProvider>
          {children}
          <Analytics />
          </CSPostHogProvider>
      </body>
    </html>
  );
}
