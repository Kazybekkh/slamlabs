import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SLAM-Kit.ai | No-Code Robotics-as-a-Service",
  description: "From Scan to Action in 60 Seconds. The first No-Code, Edge-Native brain for industrial robots.",
  keywords: ["robotics", "automation", "AI", "machine learning", "industrial robotics", "RaaS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
