"use client";

// Librerias
import { getCookie } from "cookies-next";
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

// BD estatica
import coberturas from "@/lib/coberturas";
import cookiesBD from "@/lib/cookiesBD";
import { getCookiePaqueteSeleccionado } from "@/actions/Emision/actionsCookies";

export const FormularioSumasAseguradas = () => {

  const paqueteSeleccionado = getCookiePaqueteSeleccionado();

  return (
    <>
      {
        coberturas.map(cobertura => {

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
                  <input
                      name={`sumaAsegurada${cobertura.abreviatura}`}
                      type="number"
                      placeholder={`Suma asegurada ${cobertura.abreviatura}`}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
              </td>
              <td className="w-1/4 border-t border-stroke px-7 py-5 dark:border-strokedark">
                <div className="flex justify-center">
                <input
                      name={`deducible${cobertura.abreviatura}`}
                      type="number"
                      placeholder={`Deducible ${cobertura.abreviatura}`}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
              </td>
            </tr>
          )
        })
      }
    </>
  )
}
