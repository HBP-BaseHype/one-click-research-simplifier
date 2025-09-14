import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One-Click Research Simplifier",
  description: "A web application that makes research papers, news articles, and policy documents easier to understand using Chrome's built-in AI APIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
