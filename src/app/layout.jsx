import { Abyssinica_SIL } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const alex = Abyssinica_SIL({ subsets: ["latin"], weight:['400'] });

export const metadata = {
  title: "ecommerce website",
  description: "fundamentals of react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-400 ${alex.className}`}>
        <Navbar />
        <div className="text-3xl min-h-[80vh]">

        <h1>hello everyone</h1>
        {children}

        </div>
        <Footer />
      </body>
    </html>
  );
}
