"use client";

// Librerias
import { useState } from "react";
import { IoCheckmarkCircleOutline, IoChevronDownOutline, IoCloseCircleOutline } from "react-icons/io5";

// BD estatica
import coberturas from "@/lib/coberturas";
import { getCookiePaqueteSeleccionado } from "@/actions/Emision/actionsCookies";


export const FormularioSumasAseguradas = () => {

  const paqueteSeleccionado = getCookiePaqueteSeleccionado();
  const [coberturaSeleccionada, setcoberturaSeleccionada] = useState<string>('');

  const seleccionarCobertura = (id: string) => {
    if (coberturaSeleccionada !== id) {
      setcoberturaSeleccionada(id);
    } else {
      setcoberturaSeleccionada('');
    }
  }

  return (
    <>
      {
        coberturas.map(cobertura => {

          // TODO: Buscar si hay una mejor forma que la doble negación
          const amparada = !!paqueteSeleccionado.coberturasAmparadas.find(cobe => cobe === cobertura.id)
          const color = amparada ? "green" : "red";

          return (
            <tr key={"Cobertura-" + cobertura.abreviatura}>
              <td className="w-1/4 border-t border-stroke px-7 py-5 dark:border-strokedark">
                <div className="flex justify-between gap-2 font-medium duration-300 ease-in-out">
                  {cobertura.nombre}
                  <IoChevronDownOutline size={20}
                    className={`${cobertura.id === coberturaSeleccionada && "rotate-180"}`}
                    onClick={() => seleccionarCobertura(cobertura.id)}
                  />
                </div>

                {/* Nombres de coberturas hijas */}
                <div className={`translate transform overflow-hidden ${!(cobertura.id === coberturaSeleccionada) && "hidden"}`}>
                  {cobertura.subCoberturas.map(subCob => (
                    <div className="font-medium mt-5" key={"nombre" + subCob.abreviatura + subCob.id}>
                      {subCob.nombre}
                    </div>
                  ))}
                </div>
              </td>
              <td className={`w-full border-t border-stroke px-7 py-5 dark:border-strokedark flex justify-center`}>
                {
                  amparada
                    ? <IoCheckmarkCircleOutline size={30} color={color} />
                    : <IoCloseCircleOutline size={30} color={color} />
                }
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

                {/* Sumas de coberturas hijas */}
                <div className={`${!(cobertura.id === coberturaSeleccionada) && "hidden"}`}>
                  {cobertura.subCoberturas.map(subCob => (
                    <div className="flex justify-center mt-3" key={"Suma" + subCob.abreviatura + subCob.id}>
                      <input
                        name={`sumaAsegurada${subCob.abreviatura}`}
                        type="number"
                        placeholder={`Suma asegurada ${subCob.abreviatura}`}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  ))}
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

                {/* Deducibles de coberturas hijas */}
                <div className={`${!(cobertura.id === coberturaSeleccionada) && "hidden"}`}>
                  {cobertura.subCoberturas.map(subCob => (
                    <div className="flex justify-center mt-3" key={"Deducible" + subCob.abreviatura + subCob.id}>
                      <input
                        name={`deducible${cobertura.abreviatura}`}
                        type="number"
                        placeholder={`Deducible ${subCob.abreviatura}`}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          )
        })
      }
    </>
  )
}
