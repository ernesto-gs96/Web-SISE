"use client";

import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne"
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne"
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";

interface Props {
    setState: Function,
}

export const FormularioAsegurado = ({setState}: Props) => {
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

                    </div>

                    <button 
                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                        onClick={() => setState(3)}
                    >
                        Guardar y continuar
                    </button>
                </div>
            </form>
        </div>
    )
}
