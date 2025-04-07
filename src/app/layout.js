import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export const metadata = {
  title: "ECO Pallety KZ – палеты и ящики оптом",
  description: "Продажа надёжных палетов и деревянных ящиков в Казахстане. Высокое качество, доступные цены и доставка по всей стране.",
  keywords: "палеты, деревянные ящики, поддоны, покупка палетов, Казахстан, Паллеты казахстан, Купить паллеты в казахстане, Паллеты, Поддоны казахстан, Купить поддоны в казахстане, Паллеты алматы, eco pallets kz",
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
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="палеты, деревянные ящики, поддоны, покупка палетов, Казахстан, Паллеты казахстан, Купить паллеты в казахстане, Паллеты, Поддоны казахстан, Купить поддоны в казахстане, Паллеты алматы, Anvarov Bilol Ahrorovich, eco pallets kz"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="canonical" href="https://ecopallety.kz/" />
        <meta property="og:image:alt" content="Логотип и баннер" />
        <meta
          property="og:image"
          content="https://ecopallety.kz/preview.png"
        />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
        <meta name="author" content="Bilol Anvarov" />
        <meta name="geo.placename" content="Kazakhstan" />
        <meta name="geo.region" content="KZ" /> 
        <meta name="geo.position" content="43.2567;76.9286" /> {/* Координаты города */}

        <meta name="og:locale" content="ru_KZ" />





        <script
          src="https://umnico.com/assets/widget-loader.js"
          type="text/javascript"
          charset="UTF-8"
          async
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.umnicoWidgetHash = 'a51f4b84cc6dd2120d773b9778b58422';
            `,
          }}
        />



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
