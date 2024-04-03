"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import { FormularioAsegurado } from "../components/Formularios/FormularioAsegurado";
import { FormularioPolizaNueva } from "../components/Formularios/FormularioPolizaNueva";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Emicion de poliza",
//   description: "Pagina de Emicion de poliza",
// };

export default function EmitirPolizaPage() {

  const [numeroFormulario, setNumeroFormulario] = useState<number>(1);

  return (
    <>
      {
        numeroFormulario == 1
          ? <FormularioPolizaNueva setState={setNumeroFormulario} />
          : numeroFormulario == 2
            ? <FormularioAsegurado setState={setNumeroFormulario} />
            : <button
              className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              onClick={() => setNumeroFormulario(1)}
            >
              Fin
            </button>
      }
    </>
  );
}
