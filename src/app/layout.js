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
    url: "http://ecopallety.kz/", // замените на ваш домен
    siteName: "ECO Pallety KZ",
    images: [
      {
        url: "http://ecopallety.kz/preview.png", // добавьте изображение для превью
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
    images: ["http://ecopallety.kz/preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
        <meta
          name="google-site-verification"
          content="M-b8RX8CGdlLEkicA1YdQ8dA8prg9i_lF9zDM7bwmvY"
        />
        <meta name="yandex-verification" content="c84465c9eadd6b44" />

      </head>
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
