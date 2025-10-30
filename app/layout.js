import "./globals.css";
import { DataProvider } from "./context/DataContext";

export const metadata = {
  title: "Good Move Studio",
  description: "Dance classes and workshops for all levels",
  openGraph: {
    title: "Good Move Studio",
    description: "Dance classes and workshops for all levels",
    url: "https://goodmovestudio.com",
    siteName: "Good Move Studio",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Good Move Studio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Good Move Studio",
    description: "Dance classes and workshops for all levels",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DataProvider>
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
