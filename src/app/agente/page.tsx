import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Inicio } from "./components/Inicio";

export const metadata: Metadata = {
  title: "Agente inicio",
  description: "Pagina de inicio de agente de ",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        {/* <ECommerce /> */}
        <Inicio/>
      </DefaultLayout>
    </>
  );
}
