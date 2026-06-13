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
  title: "Divyanshu Sharma | The Intelligence Architect - Portfolio",
  description: "Personal Portfolio of Divyanshu Sharma - Data Analyst, Business Analyst, AI Enthusiast, and Technology Consultant. Specialized in transforming complex data into business intelligence using Python, SQL, Power BI, and LangChain.",
  keywords: [
    "Divyanshu Sharma",
    "Data Analyst Portfolio",
    "Business Analyst",
    "AI Enthusiast",
    "Technology Consultant",
    "LangChain",
    "Python Data Scientist",
    "Power BI",
    "SQL Developer",
    "DRDO ISSA Intern",
    "PwC Deloitte Deloitte style Portfolio"
  ],
  authors: [{ name: "Divyanshu Sharma" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#050816] text-white">
        {children}
      </body>
    </html>
  );
}
