import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Vérifiez ce chemin
import Footer from "./UI/footer";
import Banner from "./UI/banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Earth Reference Data and Models",
  description: "An EarthRef mock-up",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner title={"Geochemical Earth Reference Model"}/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
