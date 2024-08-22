import type { Metadata } from "next";
import { Raleway, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Rishikesh",
  description: `Hi, I’m Rishikesh Revandikar, a web developer from India. I’m
            passionate about creating innovative web solutions and have
            experience leading diverse projects. I’m always eager to tackle new
            challenges and improve my skills.`,
};

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
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
