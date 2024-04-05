"use client";

import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne"
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne"
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo"
import { useState } from "react";
import { IoCalendarOutline, IoCashOutline, IoClipboardOutline } from "react-icons/io5";

interface Props {
    setState: Function,
}

const vigencias = [
    { texto: "1 año", valor: 1 },
    { texto: "2 año", valor: 2 },
    { texto: "5 año", valor: 5 },
    { texto: "10 año", valor: 10 },
    { texto: "15 año", valor: 15 },
    { texto: "20 año", valor: 20 },
];

const iconoVigencia = <IoCalendarOutline />

const monedas = [
    { texto: "Soles (PEN)", valor: 0 },
    { texto: "Dolares (USD)", valor: 1 },
];

const iconoMonedac = <IoCashOutline/>

const tarifas = [
    { texto: "2311", valor: 2311 },
    { texto: "1234", valor: 1234 },
];

const iconoTarifas = <IoClipboardOutline/>

const politicasCancelacion = [
    { texto: "1 - 45 días", valor: 1 },
    { texto: "1 - 30 días", valor: 2 },
    { texto: "1 - 15 días", valor: 3 },
    { texto: "1 - 5 días", valor: 4 },
];

const getFechaActual = () => new Date().toLocaleDateString();
const getFechaHasta = (anios: number) => {
    const fecha = new Date();
    const formato = "dd/mm/yy";
    return formato.replace('mm', fecha.getMonth().toString())
    .replace('yy', (fecha.getFullYear() + anios).toString())
	.replace('dd', fecha.getDate().toString());
}



export const FormularioPolizaNueva = ({setState}: Props) => {
    
    const [vigencia, setVigencia] = useState(1);
    const [moneda, setMoneda] = useState(1);
    const [tarifa, setTarifa] = useState(1);
    const [politicaCompesacion, setPoliticaCompesacion] = useState(1);
    
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h2 className="font-medium text-black dark:text-white">
                    Poliza nueva
                </h2>
            </div>
            <form action="#">
                <div className="p-6.5">

                    <div className="grid grid-cols-3 gap-4 mb-4">

                        <div className="col-span-1">
                            <DatePickerOne label={"Vigencia desde"} fecha={getFechaActual()} activio={false} />
                        </div>

                        <div className="col-span-1">
                            <DatePickerOne label={"Vigencia hasta"} fecha={getFechaHasta(vigencia)} activio={false} />
                        </div>

                        <div className="col-span-1">
                            <SelectGroupTwo label={"Vigencia"} opciones={vigencias} icono={iconoVigencia} setOpcion={setVigencia} />
                        </div>

                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Oficina
                            </label>
                            <input
                                type="text"
                                placeholder="007 LIMA CENTRO"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                disabled
                            />
                        </div>

                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Tipo de cambio
                            </label>
                            <input
                                type="number"
                                placeholder="3.7210"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                disabled
                            />
                        </div>

                        <div className="col-span-1">
                            <SelectGroupTwo label={"Moneda"} opciones={monedas} icono={iconoMonedac} setOpcion={setMoneda} />
                        </div>
                        
                        <div className="col-span-1">
                            <SelectGroupTwo label={"Tarifa"} opciones={tarifas} icono={iconoTarifas} setOpcion={setTarifa} />
                        </div>

                        <div className="col-span-1">
                            <SelectGroupTwo label={"Politica de compesación"} opciones={politicasCancelacion} icono={iconoTarifas} setOpcion={setPoliticaCompesacion} />
                        </div>

                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Folio de suscripción
                            </label>
                            <input
                                type="number"
                                placeholder="0000000000"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                    </div>

                    {/* <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                First name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="w-full xl:w-1/2">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Last name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                    </div>

                    <div className="mb-4.5">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Email <span className="text-meta-1">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>

                    <div className="mb-4.5">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Subject
                        </label>
                        <input
                            type="text"
                            placeholder="Select subject"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>

                    <SelectGroupOne />

                    <div className="mb-6">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Message
                        </label>
                        <textarea
                            rows={6}
                            placeholder="Type your message"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        ></textarea>
                    </div> */}

                    <button 
                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                        onClick={() => setState(1)}
                    >
                        Guardar y continuar
                    </button>
                </div>
            </form>
        </div>
    )
}
