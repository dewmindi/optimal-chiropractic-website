import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Optimal Chiropractic | Dr. Jengis Zekirovski",
  description: "Precision Chiropractic Care for Total Spinal Wellness led by Dr. Jengis Zekirovski.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('message', function handleIFrameMessage (e) { 
                var clinikoBookings = document.getElementById('cliniko-65580028'); 
                if (typeof e.data !== 'string') return; 
                if (e.data.search('cliniko-bookings-resize') > -1) { 
                  var height = Number(e.data.split(':')[1]); 
                  clinikoBookings.style.height = height + 'px'; 
                } 
                e.data.search('cliniko-bookings-page') > -1 && clinikoBookings.scrollIntoView(); 
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
