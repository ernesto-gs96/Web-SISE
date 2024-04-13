"use client";

// Librerias
import { getCookie } from "cookies-next";
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

// BD estatica
import coberturas from "@/lib/coberturas";
import cookiesBD from "@/lib/cookiesBD";

export const FormularioSumasAseguradas = () => {

  const paqueteSeleccionado = JSON.parse(getCookie(cookiesBD.paqueteSeleccionado.key) ?? '');

  return (
    <>
      {
        coberturas.map( cobertura => {

          // TODO: Buscar si hay una mejor forma que la doble negación
          const amparada = !!paqueteSeleccionado.coberturasAmparadas.find(cobe => cobe === cobertura.id)
          const color = amparada ? "green" : "red";

          return (
            <tr key={"Cobertura-" + cobertura}>
              <td className="w-1/4 border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="font-medium">{cobertura.nombre}</p>
              </td>
              <td className="w-1/4 border-t border-stroke px-7 py-5 dark:border-strokedark">
                <div className="flex justify-center">
                  {
                    amparada
                      ? <IoCheckmarkCircleOutline size={30} color={color} />
                      : <IoCloseCircleOutline size={30} color={color} />
                  }
                </div>
              </td>
              <td className="w-1/4 border-t border-stroke px-7 py-5 dark:border-strokedark">
                <div className="flex justify-center">
                  Ingrese suma
                </div>
              </td>
              <td className="w-1/4 border-t border-stroke px-7 py-5 dark:border-strokedark">
                <div className="flex justify-center">
                  Ingrese deducible
                </div>
              </td>
            </tr>
          )
        })
      }
    </>
  )
}
