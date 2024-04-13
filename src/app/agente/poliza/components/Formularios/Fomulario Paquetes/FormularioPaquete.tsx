'use client';

// Librerias
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

// Componentes propios
import { CoberturasAmparadas } from "./CoberturasAmparadas";
import { FormularioSumasAseguradas } from "./FormularioSumasAseguradas";

// BD estatica
import paquetes from "@/lib/paquetes";
import coberturas from "@/lib/coberturas";

export const FormularioPaquete = () => {

    const [paqueteSeleccionado, setpaqueteSeleccionado] = useState<string>('');

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h2 className="font-medium text-black dark:text-white">
                    Paquete y coberturas
                </h2>
            </div>
            <div className="p-11">
                <table className="table-auto w-full">
                    <thead>
                        {
                            paqueteSeleccionado === ''
                                ? <tr>
                                    <th className="w-1/4 px-5" />
                                    {
                                        paquetes.map(paquete => (
                                            <th key={"Paquete-" + paquete.id} className="w-1/4 px-5">
                                                <div className="mb-10 text-center transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-105 duration-300">
                                                    <span className="mb-3.5 block text-2xl font-bold text-black dark:text-white">
                                                        {paquete.nombre}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        className={`block w-full rounded-md ${paquete.color} p-3 text-center font-medium text-white transition hover:bg-opacity-90`}
                                                        onClick={() => setpaqueteSeleccionado(paquete.id)}
                                                    >
                                                        Elegir
                                                    </button>
                                                </div>
                                            </th>
                                        ))
                                    }
                                </tr>
                                : <tr>
                                    <th className="w-1/4 px-5" />
                                    <th className="w-1/4 px-5">
                                        <div className="mb-10 text-center">
                                            <span className="mb-3.5 block text-2xl font-bold text-black dark:text-white">
                                                Paquete {paquetes.filter(paquete => paquete.id === paqueteSeleccionado)[0].nombre}
                                            </span>
                                            <button
                                                type="button"
                                                className={`block w-full rounded-md bg-slate-300 p-3 text-center font-medium text-black transition hover:bg-opacity-90 ease-in-out delay-15 hover:-translate-y-1 hover:scale-105 duration-300`}
                                                onClick={() => setpaqueteSeleccionado('')}
                                            >
                                                <div className="flex justify-center items-center gap-2">
                                                    <IoCloseCircleOutline size={18} /> Cambiar paquete
                                                </div>
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                        }
                    </thead>
                    <tbody>
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
                        {
                            paqueteSeleccionado === ''
                                ? <CoberturasAmparadas coberturas={coberturas} paquetes={paquetes} />
                                : <FormularioSumasAseguradas coberturas={coberturas} paquete={paquetes.filter(paquete => paquete.id === paqueteSeleccionado)[0]} />
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}
