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
  title: "Divyanshu Sharma | Portfolio",
  description:
    "Personal portfolio of Divyanshu Sharma — Data & AI professional. Specialized in transforming complex data into business intelligence using Python, SQL, Power BI and AI.",
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
  icons: {
    icon: "/Profile_icon.png",
    apple: "/Profile_icon.png",
  },
  openGraph: {
    title: "Divyanshu Sharma | Portfolio",
    description:
      "Personal portfolio of Divyanshu Sharma — Data & AI professional. Specialized in transforming complex data into business intelligence using Python, SQL, Power BI and AI.",
    url: "https://portfolio-pr837z6sl-divyanshu-sharma-s-projects1.vercel.app/",
    siteName: "Divyanshu Sharma | Portfolio",
    images: [
      {
        url: "/Profile_icon.png",
        width: 800,
        height: 800,
        alt: "Divyanshu Sharma",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyanshu Sharma | Portfolio",
    description:
      "Personal portfolio of Divyanshu Sharma — Data & AI professional.",
    images: ["/Profile_icon.png"],
  },
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
      <head>
        <link rel="icon" href="/Profile_icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/Profile_icon.png" />
        <link rel="shortcut icon" href="/Profile_icon.png" />
        <script dangerouslySetInnerHTML={{__html: `(async () => {
          try {
            const ICON = '/Profile_icon.png';
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.src = ICON;
            await new Promise((res, rej) => { img.onload = res; img.onerror = rej; });
            const size = 64;
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0,0,size,size);
            ctx.drawImage(img, 0, 0, size, size);
            const dataUrl = canvas.toDataURL('image/png');
            let link = document.querySelector('link[rel*="icon"]');
            if (!link) {
              link = document.createElement('link');
              link.rel = 'icon';
              document.head.appendChild(link);
            }
            link.type = 'image/png';
            link.href = dataUrl;
          } catch (e) {
            // fallback: ensure a link exists
            try {
              let link = document.querySelector('link[rel*="icon"]');
              if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
              }
              link.href = '/Profile_icon.png';
            } catch (e) {}
          }
        })();`}} />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#050816] text-white">
        {children}
      </body>
    </html>
  );
}
