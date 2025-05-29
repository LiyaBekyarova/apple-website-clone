import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apple iPhone 15 Pro",
  description: "Experience the latest iPhone 15 Pro with cutting-edge features and stunning design.",
  icons: {
    icon: [
      {
        url: '/assets/images/apple.svg',
        type: 'image/svg+xml',
        sizes: 'any'
      },
      
    ]}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/apple.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#000000" />
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
