import { Metadata } from "next";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { DashboardAgente } from "@/components/Dashboard/DashboardAgente";

export const metadata: Metadata = {
  title: "Agente inicio",
  description: "Pagina de inicio de agente de ",
};

export default function Home() {
  return (
    <>
      <DashboardAgente/>
    </>
  );
}
