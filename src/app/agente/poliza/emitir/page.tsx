"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import { FormularioAsegurado } from "../components/Formularios/FormularioAsegurado";
import { FormularioPolizaNueva } from "../components/Formularios/FormularioPolizaNueva";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "Emicion de poliza",
//   description: "Pagina de Emicion de poliza",
// };

const datosCapturar = ["Poliza nueva","Asegurado","Vehiculo"]

export default function EmitirPolizaPage() {

  const [numeroFormulario, setNumeroFormulario] = useState<number>(0);
  const [ datosCaptura, setDatosCaptura ] = useState<string>(datosCapturar[0]);

  useEffect( () => {
    setDatosCaptura(datosCapturar[numeroFormulario])
  },[numeroFormulario])

  return (
    <>
      <Breadcrumb pageName={datosCaptura}/>
      {
        numeroFormulario == 0
          ? <FormularioPolizaNueva setState={setNumeroFormulario} />
          : numeroFormulario == 1
            ? <FormularioAsegurado setState={setNumeroFormulario} />
            : <button
              className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              onClick={() => setNumeroFormulario(0)}
            >
              Fin
            </button>
      }
    </>
  );
}
