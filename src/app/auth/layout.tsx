import HeaderHome from "@/components/NavBar/HeaderHome";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <HeaderHome />
      <main className="relative isolate px-6 pt-18 pb-4 lg:px-8 flex justify-center">
        {children}
      </main>
    </>
  );
}
