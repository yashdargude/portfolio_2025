import type { Metadata } from "next";
import { Raleway, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Yash D | Portfolio",
  description: `Hi, I’m Yash Dargude, a web developer from India. I’m
            passionate about creating innovative web solutions and have
            experience leading diverse projects. I’m always eager to tackle new
            challenges and improve my skills.`,
  icons: {
    icon: "/favicon.ico",
  },
};

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
  display: "swap",
  fallback: ["sans-serif"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          raleway.variable,
          nunito.variable,
          "flex items-center min-h-screen flex-col "
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
