import type { Metadata ,Viewport} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  variable: "--font-motserrat",
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: "software developer Nelson",
  
  description: "Experienced software developer in Kenya specializing in web and mobile app development. Skilled in React, Node.js, Python, and more. Explore my portfolio and projects.",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
        <Toaster position="bottom-right"/> 
      </body>
    </html>
  );
}
