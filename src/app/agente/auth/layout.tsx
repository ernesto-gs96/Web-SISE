import HeaderHome from "@/components/NavBar/HeaderHome";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <HeaderHome />
          <main className="relative isolate px-6 pt-18 pb-4 lg:px-8 flex justify-center">
              {children}
          </main>
        </div>
      </body>
    </html>
  );
}
