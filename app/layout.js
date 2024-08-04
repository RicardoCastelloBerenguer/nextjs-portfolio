// app/layout.js
import React from "react";
import Header from "../components/Header";
import "@fontsource-variable/onest";
import "./globals.css"; // Asegúrate de importar el CSS global

export const metadata = {
  title: "Bienvenido a mi portafolio",
  description: "Desarrollador web especializado en Astro y React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Desarrollador web especializado en Astro y React."
        />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>Bienvenido a mi portafolio</title>
      </head>
      <body className="flex flex-col min-h-screen bg-[#050505] text-white">
        <div className="fixed top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        <main id="content" className="flex-1">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
