import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import { FormularioAsegurado } from "./components/FormularioAsegurado";

export const metadata: Metadata = {
  title: "Emicion de poliza",
  description: "Pagina de Emicion de poliza",
};

export default function EmitirPolizaPage() {
  return (
    <>
      <FormularioAsegurado/>
    </>
  );
}
