import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  );
}
