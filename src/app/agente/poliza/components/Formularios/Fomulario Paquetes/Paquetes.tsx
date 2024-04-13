"use client";

import cookiesBD from "@/lib/cookiesBD";
import paquetes from "@/lib/paquetes";
import { getCookie, setCookie } from "cookies-next"
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

export const Paquetes = () => {

    const [paqueteSeleccionado, setpaqueteSeleccionado] = useState<string>('');

    const seleccionarPaquete = (id: string) => {
        setpaqueteSeleccionado(id);
        const paquete = paquetes.filter(paquete => paquete.id === id)[0];
        setCookie(cookiesBD.paqueteSeleccionado.key, paquete)
    }

    return (
        <div className="flex justify-center w-full">
            <div className="w-1/4 mb-10 px-5"></div>
            {
                paqueteSeleccionado === ''
                    ? <>
                        {
                            paquetes.map(paquete => (
                                <div key={"Paquete-" + paquete.id} className="w-1/4 mb-10 px-5 text-center transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-105 duration-300">
                                    <span className="mb-3.5 block text-2xl font-bold text-black dark:text-white">
                                        {paquete.nombre}
                                    </span>
                                    <button
                                        type="button"
                                        className={`block w-full rounded-md ${paquete.color} p-3 text-center font-medium text-white transition hover:bg-opacity-90`}
                                        onClick={() => seleccionarPaquete(paquete.id)}
                                    >
                                        Elegir
                                    </button>
                                </div>
                            ))
                        }
                    </>
                    : <>
                        <div className="w-1/4 mb-10 px-5 text-center">
                            <span className="mb-3.5 block text-2xl font-bold text-black dark:text-white">
                                Paquete {paquetes.filter(paquete => paquete.id === paqueteSeleccionado)[0].nombre}
                            </span>
                            <button
                                type="button"
                                className={`block w-full rounded-md bg-slate-300 p-3 text-center font-medium text-black transition hover:bg-opacity-90 ease-in-out delay-15 hover:-translate-y-1 hover:scale-105 duration-300`}
                                onClick={() => seleccionarPaquete('')}
                            >
                                <div className="flex justify-center items-center gap-2">
                                    <IoCloseCircleOutline size={18} /> Cambiar paquete
                                </div>
                            </button>
                        </div>
                    </>
            }
        </div>
    )
}
