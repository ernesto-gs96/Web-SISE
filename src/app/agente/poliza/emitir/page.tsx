"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import { FormularioAsegurado } from "../components/Formularios/FormularioAsegurado";
import { FormularioPolizaNueva } from "../components/Formularios/FormularioPolizaNueva";
import { useEffect, useState } from "react";
import { FormularioVehiculo } from "../components/Formularios/FormularioVehiculo";
import { FormularioPaquete } from "../components/Formularios/Fomulario Paquetes/FormularioPaquete";
import { FormularioPrimas } from "../components/Formularios/FormularioPrimas";

// export const metadata: Metadata = {
//   title: "Emicion de poliza",
//   description: "Pagina de Emicion de poliza",
// };

const datosCapturar = ["Poliza nueva", "Asegurado", "Vehiculo"]

export default function EmitirPolizaPage() {

  const [numeroFormulario, setNumeroFormulario] = useState<number>(0);
  const [datosCaptura, setDatosCaptura] = useState<string>(datosCapturar[0]);

  useEffect(() => {
    setDatosCaptura(datosCapturar[numeroFormulario])
  }, [numeroFormulario])

  return (
    <>
      {/* <Breadcrumb pageName={datosCaptura} /> */}
      {
        numeroFormulario == 0
          ? <FormularioPolizaNueva setState={setNumeroFormulario} />
          : numeroFormulario == 1
            ? <FormularioAsegurado setState={setNumeroFormulario} />
            : numeroFormulario == 2
            ? <FormularioVehiculo/>
            : numeroFormulario == 3 
              ? <FormularioPaquete/>
              : <FormularioPrimas/>
      }
      <div className="flex justify-center gap-4 mt-4">
        {
          numeroFormulario > 0 &&
          <button
            onClick={() => setNumeroFormulario(numeroFormulario - 1)}
            className="inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Regresar
          </button>
        }

        {
          numeroFormulario <= 3 &&
          <button
            onClick={() => setNumeroFormulario(numeroFormulario + 1)}
            className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Siguiente
          </button>
        }
      </div>
    </>
  );
}
