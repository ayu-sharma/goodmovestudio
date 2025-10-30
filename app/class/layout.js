export const metadata = {
  title: "Dance Classes | Good Move Studio",
  description: "Professional dance classes for all levels. Learn various dance styles with experienced instructors at Good Move Studio.",
  openGraph: {
    title: "Dance Classes | Good Move Studio",
    description: "Professional dance classes for all levels. Learn various dance styles with experienced instructors at Good Move Studio.",
    url: "https://goodmovestudio.com/class",
    siteName: "Good Move Studio",
    images: [
      {
        url: "/images/regular.png",
        width: 1200,
        height: 630,
        alt: "Dance Classes at Good Move Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dance Classes | Good Move Studio",
    description: "Professional dance classes for all levels. Learn various dance styles with experienced instructors at Good Move Studio.",
    images: ["/images/regular.png"],
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

export default function ClassLayout({ children }) {
  return children;
}
