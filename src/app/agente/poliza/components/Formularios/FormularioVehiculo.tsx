import CheckboxTwo from "@/components/Checkboxes/CheckboxTwo";
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";
import { useState } from "react";
import RequiereInspeccion from "../Dialogos/MainDialog";
import { Inspeccion } from "../Otros/Inspeccion";

const amis = [
    { texto: "00001-NISSAN ALMERA 1.6 SG", valor: 1 },
    { texto: "00002-NISSAN ALMERA 1.8 XG-L", valor: 2 },
    { texto: "00003-NISSAN ALMERA PE 1.6", valor: 3 },
]

const marcas = [
    { texto: "AI - Audi", valor: 1 },
    { texto: "NN - Nissan", valor: 2 },
    { texto: "TY - Toyota", valor: 3 },
]

const usos = [
    { texto: "01 - Particular", valor: 1 },
    { texto: "02 - Auto reparto", valor: 2 },
]

const servicios = [
    { texto: "01 - Particular", valor: 1 },
    { texto: "02 - Publico", valor: 2 },
]

const colores = [
    { texto: "00 - Negro", valor: 1 },
    { texto: "01 - Blanco", valor: 2 },
    { texto: "03 - Azul", valor: 3 },
]

const transmisiones = [
    { texto: "Automatica", valor: 1 },
    { texto: "Manual", valor: 2 },
]

export const FormularioVehiculo = () => {

    const [requiereInspeccion, setrequiereInspeccion] = useState(true);

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 pt-4 dark:border-strokedark">
                <h2 className="font-medium text-black dark:text-white">
                    Informacion del vehiculo
                </h2>
            </div>
            <form action="#">
                <div className="pt-6.5 px-6.5">

                    <div className="grid grid-cols-3 gap-4 mb-4">
                        {/* Marca */}
                        <div className="col-span-1">
                            <SelectGroupTwo label={"Marca"} opciones={marcas} setOpcion={() => { }} />
                        </div>

                        {/* AMIS */}
                        <div className="col-span-2">
                            <SelectGroupTwo label={"AMIS"} opciones={amis} setOpcion={() => { }} />
                        </div>

                        {/* Subramo */}
                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Subramo
                            </label>
                            <input
                                type="number"
                                name="subramo"
                                placeholder="01 Automoviles residentes"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                disabled
                            />
                        </div>
                        
                        {/* Categoria */}
                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Categoria
                            </label>
                            <input
                                type="number"
                                name="subramo"
                                placeholder="100 Automoviles Nacion"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                disabled
                            />
                        </div>
                        
                        {/* Modelo */}
                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Modelo
                            </label>
                            <input
                                type="number"
                                name="modelo"
                                placeholder="56 CATEGORIA I"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                disabled
                            />
                        </div>
                        
                        {/* Año */}
                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Año <span className="text-meta-1">*</span>
                            </label>
                            <input
                                type="number"
                                name="anio"
                                placeholder="YYYY"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        {/* Uso */}
                        <div className="col-span-1">
                            <SelectGroupTwo label={"Uso"} opciones={usos} setOpcion={() => { }} />
                        </div>

                        {/* Servicio */}
                        <div className="col-span-1">
                            <SelectGroupTwo label={"Servicio"} opciones={servicios} setOpcion={() => { }} />
                        </div>

                        {/* Placa */}
                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Placa <span className="text-meta-1">*</span>
                            </label>
                            <input
                                type="number"
                                name="placa"
                                placeholder="XXX-YYYY"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        {/* Número de serie */}
                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Número de serie <span className="text-meta-1">*</span>
                            </label>
                            <input
                                type="number"
                                name="numeroSerie"
                                placeholder="17 Caracteres"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        {/* Número de motor */}
                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Número de motor <span className="text-meta-1">*</span>
                            </label>
                            <input
                                type="number"
                                name="numeroMotor"
                                placeholder="17 Caracteres"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        
                        {/* Color */}
                        <div className="col-span-1">
                            <SelectGroupTwo label={"Color"} opciones={colores} setOpcion={() => { }} />
                        </div>

                        {/* Transmisión */}
                        <div className="col-span-1">
                            <SelectGroupTwo label={"Transmision"} opciones={transmisiones} setOpcion={() => { }} />
                        </div>

                        {/* Cilindro */}
                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Cilindros <span className="text-meta-1">*</span>
                            </label>
                            <input
                                type="number"
                                name="cilindros"
                                placeholder="Número de cilindros"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        {/* Puertas */}
                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Puertas <span className="text-meta-1">*</span>
                            </label>
                            <input
                                type="number"
                                name="puertas"
                                placeholder="Número de puertas"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        {/* Ocupantes */}
                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Ocupantes <span className="text-meta-1">*</span>
                            </label>
                            <input
                                type="number"
                                name="ocupantes"
                                placeholder="Número de ocupantes"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        {/* Otros datos */}
                        <div className="col-span-3">
                            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                                    <h3 className="font-medium text-black dark:text-white">
                                        Otros datos
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-5.5 p-6.5 w-max">
                                    <CheckboxTwo label={"Requiere GPS"} id={"gps"} />
                                    <CheckboxTwo label={"Requiere inspeccion"} id={"inspeccion"} setState={setrequiereInspeccion}/>
                                    <CheckboxTwo label={"Unidad de salvamento"} id={"salvamento"} />
                                </div>
                                <div>
                                    <RequiereInspeccion abrir={requiereInspeccion}>
                                        <Inspeccion/>
                                    </RequiereInspeccion>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </form>

        </div>
    )
}
