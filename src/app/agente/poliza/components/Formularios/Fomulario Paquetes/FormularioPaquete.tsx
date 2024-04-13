'use client';

// Librerias
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { getCookie } from "cookies-next";

// Componentes propios
import { CoberturasAmparadas } from "./CoberturasAmparadas";
import { FormularioSumasAseguradas } from "./FormularioSumasAseguradas";
import { Paquetes } from "./Paquetes";

// BD estatica
import paquetes from "@/lib/paquetes";
import coberturas from "@/lib/coberturas";
import cookiesBD from "@/lib/cookiesBD";

export const FormularioPaquete = () => {

    const paqueteSeleccionado = getCookie(cookiesBD.paqueteSeleccionado.key);
    console.log(paqueteSeleccionado);

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h2 className="font-medium text-black dark:text-white">
                    Paquete y coberturas
                </h2>
            </div>
            <div className="p-11">
                
                <Paquetes/>

                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <td className="w-1/4 border-t border-stroke px-7 py-5 dark:border-strokedark">
                                <h5 className="font-bold text-black dark:text-white">
                                    Cobertura
                                </h5>
                            </td>
                            <td className="w-1/4 border-t border-stroke px-7 py-5 dark:border-strokedark">
                                <h5 className="text-center font-bold text-black dark:text-white">
                                    Amparada
                                </h5>
                            </td>
                            <td className="w-1/4 border-t border-stroke px-7 py-5 dark:border-strokedark">
                                <h5 className="text-center font-bold text-black dark:text-white">
                                    {
                                        paqueteSeleccionado === ''
                                            ? "Amparada"
                                            : "Suma asegurada"
                                    }
                                </h5>
                            </td>
                            <td className="w-1/4 border-t border-stroke px-7 py-5 dark:border-strokedark">
                                <h5 className="text-center font-bold text-black dark:text-white">
                                    {
                                        paqueteSeleccionado === ''
                                            ? "Amparada"
                                            : "Deducible"
                                    }
                                </h5>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paqueteSeleccionado === ''
                                ? <CoberturasAmparadas/>
                                : <FormularioSumasAseguradas/>
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}
