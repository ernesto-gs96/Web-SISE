import DatePickerTwo from "@/components/FormElements/DatePicker/DatePickerTwo"
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo"

interface Props {
    titulo?: string,
    accion?: string,
    activo?: boolean,
}

const tipoPersonas = [
    { texto: "Fisica", valor: 1 },
    { texto: "Moral", valor: 2 },
]

const nacionalidades = [
    { texto: "Nacional", valor: 1 },
    { texto: "Extranjera", valor: 2 },
]

const sexos = [
    { texto: "Masculino", valor: 1 },
    { texto: "Femenino", valor: 2 },
]

const estados = [
    { texto: "CDMX", valor: 1 },
    { texto: "Estado de México", valor: 2 },
    { texto: "Oaxaca", valor: 2 },
]

export const FormularioInformacionAsegurado = ({ titulo, accion, activo = true }: Props) => {
    return (
        <form action="#">
            <div className="py-2 px-6">

                <h2 className="font-bold text-3xl text-center mb-4">{titulo}</h2>

                <h3 className="font-bold text-2xl text-center mb-4">Información personal</h3>
                <div className="grid grid-cols-3 gap-6 mb-6">

                    <div className="col-span-1">
                        <SelectGroupTwo label={"Tipo de persona"} opciones={tipoPersonas} setOpcion={() => { }} activo={activo} />
                    </div>

                    <div className="col-span-1">
                        <SelectGroupTwo label={"Nacionalidad"} opciones={nacionalidades} setOpcion={() => { }} activo={activo} />
                    </div>

                    <div className="col-span-1">
                        <SelectGroupTwo label={"Sexo"} opciones={sexos} setOpcion={() => { }} activo={activo} />
                    </div>

                    <div className="col-span-1">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Nombre(s) <span className="text-meta-1">*</span>
                        </label>
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre(s)"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            disabled={!activo}
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Apellido paterno <span className="text-meta-1">*</span>
                        </label>
                        <input
                            type="text"
                            name="apellidoP"
                            placeholder="Apellido paterno"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            disabled={!activo}
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Apellido materno
                        </label>
                        <input
                            type="text"
                            name="apellidoM"
                            placeholder="Apellido materno"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            disabled={!activo}
                        />
                    </div>

                    <div className="col-span-1">
                        <DatePickerTwo label={"Fecha de nacimiento"} activo={activo}/>
                    </div>

                    <div className="col-span-1">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            CURP
                        </label>
                        <input
                            type="text"
                            name="curp"
                            placeholder="CURP"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            disabled={!activo}
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            RFC
                        </label>
                        <input
                            type="text"
                            name="rfc"
                            placeholder="RFC"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            disabled={!activo}
                        />
                    </div>

                    <div className="sol-span-1">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Correo electronico <span className="text-meta-1">*</span>
                        </label>
                        <input
                            name="correo"
                            type="email"
                            placeholder="Correo electronico"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            disabled={!activo}
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Celular
                        </label>
                        <input
                            type="number"
                            name="celular"
                            placeholder="Celular"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            disabled={!activo}
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Telefono casa
                        </label>
                        <input
                            type="number"
                            name="telefoCasa"
                            placeholder="Telefono casa"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            disabled={!activo}
                        />
                    </div>

                </div>

                <h3 className="font-bold text-2xl text-center mb-4">Domicilio</h3>
                <div className="grid grid-cols-3 gap-6 mb-6">

                    <div className="col-span-1">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Calle
                        </label>
                        <input
                            type="text"
                            name="calle"
                            placeholder="Calle"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            disabled={!activo}
                        />
                    </div>

                    <div className="col-span-2 flex justify-between md:gap-4">

                        <div>
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Número interior
                            </label>
                            <input
                                type="text"
                                name="numeroInterior"
                                placeholder="Número interior"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                disabled={!activo}
                            />
                        </div>

                        <div>
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Número exterior
                            </label>
                            <input
                                type="text"
                                name="numeroExterior"
                                placeholder="Número exterior"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                disabled={!activo}
                            />
                        </div>

                        <div>
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Código postal
                            </label>
                            <input
                                type="text"
                                name="codigoPostal"
                                placeholder="Código postal"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                disabled={!activo}
                            />
                        </div>
                    </div>

                    <div className="col-span-1">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Colonia
                        </label>
                        <input
                            type="text"
                            name="colonia"
                            placeholder="Colonia"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            disabled={!activo}
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Municipio
                        </label>
                        <input
                            type="text"
                            name="Municipio"
                            placeholder="Municipio"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            disabled={!activo}
                        />
                    </div>

                    <div className="col-span-1">
                        <SelectGroupTwo label={"Estado"} opciones={estados} setOpcion={() => { }} activo={activo} />
                    </div>

                    <div className="col-span-3">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Referencias
                        </label>
                        <textarea
                            rows={6}
                            placeholder="Referencias"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            disabled={!activo}
                        ></textarea>
                    </div>

                </div>

                {
                    accion === "registrar" &&
                    <div className="flex justify-center items-center my-4">
                        <button
                            type="button"
                            className="rounded-full bg-meta-3 px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                        >
                            Registrar
                        </button>
                    </div>
                }

            </div>
        </form>
    )
}
