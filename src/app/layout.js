import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export const metadata = {
  title: "ECO Pallety KZ – палеты и ящики оптом",
  description: "Продажа надёжных палетов и деревянных ящиков в Казахстане. Высокое качество, доступные цены и доставка по всей стране.",
  keywords: "палеты, деревянные ящики, поддоны, покупка палетов, Казахстан",
  openGraph: {
    title: "ECO Pallety KZ – палеты и ящики оптом",
    description: "Продажа надёжных палетов и деревянных ящиков в Казахстане. Высокое качество, доступные цены и доставка по всей стране.",
    url: "https://ecopallety.vercel.app/", // замените на ваш домен
    siteName: "ECO Pallety KZ",
    images: [
      {
        url: "https://ecopallety.vercel.app/preview.png", // добавьте изображение для превью
        width: 1200,
        height: 630,
        alt: "Палеты и деревянные ящики",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECO Pallety KZ – палеты и ящики оптом",
    description: "Продажа надёжных палетов и деревянных ящиков в Казахстане. Высокое качество, доступные цены и доставка по всей стране.",
    images: ["https://ecopallety.vercel.app/preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
