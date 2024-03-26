import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";

import { Providers } from "@/store/Providers";
import HeaderHome from "@/components/NavBar/HeaderHome";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="dark:bg-boxdark-2 dark:text-bodydark">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
