import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import { Providers } from "@/store/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body suppressHydrationWarning={true}>
        <Providers>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {children}
        </div>
        </Providers>
      </body>
    </html>
  );
}
