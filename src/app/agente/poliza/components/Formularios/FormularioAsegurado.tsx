"use client";

import { useState } from "react"
import { FormularioInformacionAsegurado } from "./FormularioInformacionAsegurado";

interface Props {
    setState: Function,
}

export const FormularioAsegurado = ({ setState }: Props) => {

    const [formAseg, setFormAseg] = useState<boolean>(false);
    const [formResultado, setFormResultado] = useState<boolean>(false);

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h2 className="font-medium text-black dark:text-white">
                    Asegurado
                </h2>
            </div>
            <form action="#">
                <div className="p-6.5">

                    <div className="grid grid-cols-3 gap-4 mb-4">

                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Código de asegurado
                            </label>
                            <input
                                type="number"
                                placeholder="0000000000"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="col-span-1 flex justify-center items-center gap-4 pt-6">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                                onClick={() => {
                                    setFormAseg(false)
                                    setFormResultado(true)
                                }}
                            >
                                Buscar
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-full bg-meta-3 px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                                onClick={() => {
                                    setFormAseg(true)
                                    setFormResultado(false)
                                }}
                            >
                                Nuevo
                            </button>

                        </div>

                    </div>
                </div>
            </form>

            {
                formResultado
                ? <FormularioInformacionAsegurado titulo={"Asegurado encontrado"} activo={false} />
                : <FormularioInformacionAsegurado titulo={"Registrar nuevo asegurado"} accion={"registrar"}/>
            }
        </div>
    )
}
