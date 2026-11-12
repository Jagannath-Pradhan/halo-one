import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans" });

export const metadata = {
  title: "Halo One — Wireless headphones in 3D",
  description: "An interactive 3D product showcase built with Next.js, React Three Fiber and Tailwind CSS.",
};
export const viewport = { themeColor: "#120b2e", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
