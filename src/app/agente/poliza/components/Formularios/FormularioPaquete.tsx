import SwitcherThree from "@/components/Switchers/SwitcherThree";
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

const paquetes = [
    {
        id: "01",
        nombre: "Básico",
        descripcion: "Descripción del paquete básico.",
        color: "bg-black",
        coberturasAmparadas: [true, true, true, true, false, false]
    },
    {
        id: "02",
        nombre: "Limitado",
        descripcion: "Descripción del paquete limitado.",
        color: "bg-[#13C296]",
        coberturasAmparadas: [true, true, true, true, true, false]
    },
    {
        id: "03",
        nombre: "Amplia",
        descripcion: "Descripción del paquete Amplia.",
        color: "bg-primary",
        coberturasAmparadas: [true, true, true, true, true, true]
    }
]

const coberturas = ["RCD a terceros", "Gastos legales", "GM ocupantes", "Asistencia Vial", "Robot total", "Daños materias"]

export const FormularioPaquete = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h2 className="font-medium text-black dark:text-white">
                    Paquete y coberturas
                </h2>
            </div>
            <div className="p-11">
                {/* <div className="w-full overflow-x-auto"> */}
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="w-1/4 px-5" />
                                {
                                    paquetes.map(paquete => (
                                        <th key={"Paquete-" + paquete.id} className="w-1/4 px-5">
                                            <div className="mb-10 text-left transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-105 duration-300">
                                                <span className="text-center mb-3.5 block text-2xl font-bold text-black dark:text-white">
                                                    {paquete.nombre}
                                                </span>
                                                {/* <h4 className="mb-4">
                                            <span className="text-[28px] font-bold text-black dark:text-white lg:text-[32px]">
                                                $100
                                            </span> */}
                                                {/* <span className="font-medium">Anual</span> */}
                                                {/* </h4> */}
                                                {/* <p className="mb-6 text-base font-medium">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, adipisci.
                                        </p> */}
                                                <a
                                                    className={`block w-full rounded-md ${paquete.color} p-3 text-center font-medium text-white transition hover:bg-opacity-90`}
                                                    href="#"
                                                >
                                                    Elegir
                                                </a>
                                            </div>
                                        </th>
                                    ))
                                }

                                {/* <th className="w-1/4 min-w-[200px] px-5 hover:shadow-2xl hover:shadow-[#13C296]">
                                    <div className="mb-10 text-left">
                                        <span className="mb-3.5 block text-xl font-bold text-black dark:text-white">
                                            Limitado
                                        </span>
                                        <h4 className="mb-4">
                                            <span className="text-[28px] font-bold text-black dark:text-white lg:text-[32px]">
                                                $200
                                            </span>
                                        </h4>
                                        <p className="mb-6 font-medium">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptatem!
                                        </p>
                                        <a
                                            className="block w-full rounded-md bg-[#13C296] p-3 text-center font-medium text-white transition hover:bg-opacity-90"
                                            href="#"
                                        >
                                            Elegir
                                        </a>
                                    </div>
                                </th>
                                <th className="w-1/4 min-w-[200px] px-5 hover:shadow-2xl hover:shadow-primary">
                                    <div className="mb-10 text-left">
                                        <span className="mb-3.5 block text-xl font-bold text-black dark:text-white">
                                            Amplia
                                        </span>
                                        <h4 className="mb-4">
                                            <span className="text-[28px] font-bold text-black dark:text-white lg:text-[32px]">
                                                $400
                                            </span>
                                        </h4>
                                        <p className="mb-6 font-medium">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sed?
                                        </p>
                                        <a
                                            className="block w-full rounded-md bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90"
                                            href="#"
                                        >
                                            Elegir
                                        </a>
                                    </div>
                                </th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <h5 className="font-bold text-black dark:text-white">
                                        Cobertura
                                    </h5>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <h5 className="text-center font-bold text-black dark:text-white">
                                        Amparada
                                    </h5>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <h5 className="text-center font-bold text-black dark:text-white">
                                        Suma asegurada
                                    </h5>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <h5 className="text-center font-bold text-black dark:text-white">
                                        Deducible
                                    </h5>
                                </td>
                            </tr>
                            {
                                coberturas.map((cobertura, index) => {

                                    const amparada = paquetes[0].coberturasAmparadas[index];
                                    const amparada1 = paquetes[1].coberturasAmparadas[index];
                                    const amparada2 = paquetes[2].coberturasAmparadas[index];
                                    const color = amparada ? "green" : "red";
                                    
                                    return (
                                    <tr key={"Cobertura-"+cobertura}>
                                        <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                            <p className="font-medium">{cobertura}</p>
                                        </td>
                                        <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                            <div className="flex justify-center">
                                                {
                                                    amparada
                                                        ? <IoCheckmarkCircleOutline size={30} color={color}/>
                                                        : <IoCloseCircleOutline size={30} color={color}/>
                                                }
                                            </div>
                                        </td>
                                        <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                            <div className="flex justify-center">
                                                {
                                                    amparada1
                                                        ? <IoCheckmarkCircleOutline size={30} color={amparada1 ? "green" : "red"}/>
                                                        : <IoCloseCircleOutline size={30} color={amparada1 ? "green" : "red"}/>
                                                }
                                            </div>
                                        </td>
                                        <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                            <div className="flex justify-center">
                                                {
                                                    amparada2
                                                        ? <IoCheckmarkCircleOutline size={30} color={amparada2 ? "green" : "red"}/>
                                                        : <IoCloseCircleOutline size={30} color={amparada2 ? "green" : "red"}/>
                                                }
                                            </div>
                                        </td>
                                    </tr>
                                )})
                            }

                            {/* <tr>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="font-medium">Deducible hasta</p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="text-center font-medium">20 %</p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="text-center font-medium">15 %</p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="text-center font-medium">10 %</p>
                                </td>
                            </tr> */}
                            {/* <tr>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="font-medium">Email Support</p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="text-center font-medium">6 Months</p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="text-center font-medium">6 Months</p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="text-center font-medium">6 Months</p>
                                </td>
                            </tr> */}
                            {/* <tr>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="font-medium">RCD a Terceros</p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="flex justify-center text-center">
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                                fill="#13C296"
                                            />
                                            <path
                                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="flex justify-center text-center">
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                                fill="#13C296"
                                            />
                                            <path
                                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="flex justify-center text-center">
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                                fill="#13C296"
                                            />
                                            <path
                                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </p>
                                </td>
                            </tr> */}
                            {/* <tr>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="font-medium">Gastos legales</p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="flex justify-center text-center">
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                                fill="#13C296"
                                            />
                                            <path
                                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="flex justify-center text-center">
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                                fill="#13C296"
                                            />
                                            <path
                                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="flex justify-center text-center">
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                                fill="#13C296"
                                            />
                                            <path
                                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </p>
                                </td>
                            </tr> */}
                            {/* <tr>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="font-medium">GM ocupantes</p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="flex justify-center text-center">
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                                fill="#13C296"
                                            />
                                            <path
                                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="flex justify-center text-center">
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                                fill="#13C296"
                                            />
                                            <path
                                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="flex justify-center text-center">
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                                fill="#13C296"
                                            />
                                            <path
                                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </p>
                                </td>
                            </tr> */}
                            {/* <tr>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="font-medium">Asistencia vial</p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="flex justify-center text-center">
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                                fill="#13C296"
                                            />
                                            <path
                                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="flex justify-center text-center">
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                                fill="#13C296"
                                            />
                                            <path
                                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="flex justify-center text-center">
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                                fill="#13C296"
                                            />
                                            <path
                                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </p>
                                </td>
                            </tr> */}
                            {/* <tr>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="font-medium">Robo total</p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="flex justify-center text-center">
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.4797 0C5.56911 0 0 5.56911 0 12.4797C0 19.3902 5.56911 25 12.4797 25C19.3902 25 25 19.3902 25 12.4797C25 5.56911 19.3902 0 12.4797 0ZM12.4797 23.5772C6.38211 23.5772 1.42276 18.5772 1.42276 12.4797C1.42276 6.38211 6.38211 1.42276 12.4797 1.42276C18.5772 1.42276 23.5772 6.38211 23.5772 12.4797C23.5772 18.5772 18.5772 23.5772 12.4797 23.5772Z"
                                                fill="#FF9494"
                                            />
                                            <path
                                                d="M16.2204 8.73978C15.9359 8.45523 15.4887 8.45523 15.2042 8.73978L12.4806 11.4634L9.75702 8.73978C9.47247 8.45523 9.02531 8.45523 8.74076 8.73978C8.45621 9.02433 8.45621 9.47149 8.74076 9.75604L11.4643 12.4796L8.74076 15.2032C8.45621 15.4878 8.45621 15.9349 8.74076 16.2195C8.86271 16.3414 9.06596 16.4227 9.22856 16.4227C9.39117 16.4227 9.59442 16.3414 9.71637 16.2195L12.4399 13.4959L15.1635 16.2195C15.2855 16.3414 15.4887 16.4227 15.6513 16.4227C15.8139 16.4227 16.0172 16.3414 16.1391 16.2195C16.4237 15.9349 16.4237 15.4878 16.1391 15.2032L13.4969 12.4796L16.2204 9.75604C16.4643 9.47149 16.4643 9.02433 16.2204 8.73978Z"
                                                fill="#FF9494"
                                            />
                                        </svg>
                                    </p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="flex justify-center text-center">
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                                fill="#13C296"
                                            />
                                            <path
                                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="flex justify-center text-center">
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                                fill="#13C296"
                                            />
                                            <path
                                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </p>
                                </td>
                            </tr> */}
                            {/* <tr>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="font-medium">Daños materiales</p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="flex justify-center text-center">
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.4797 0C5.56911 0 0 5.56911 0 12.4797C0 19.3902 5.56911 25 12.4797 25C19.3902 25 25 19.3902 25 12.4797C25 5.56911 19.3902 0 12.4797 0ZM12.4797 23.5772C6.38211 23.5772 1.42276 18.5772 1.42276 12.4797C1.42276 6.38211 6.38211 1.42276 12.4797 1.42276C18.5772 1.42276 23.5772 6.38211 23.5772 12.4797C23.5772 18.5772 18.5772 23.5772 12.4797 23.5772Z"
                                                fill="#FF9494"
                                            />
                                            <path
                                                d="M16.2204 8.73978C15.9359 8.45523 15.4887 8.45523 15.2042 8.73978L12.4806 11.4634L9.75702 8.73978C9.47247 8.45523 9.02531 8.45523 8.74076 8.73978C8.45621 9.02433 8.45621 9.47149 8.74076 9.75604L11.4643 12.4796L8.74076 15.2032C8.45621 15.4878 8.45621 15.9349 8.74076 16.2195C8.86271 16.3414 9.06596 16.4227 9.22856 16.4227C9.39117 16.4227 9.59442 16.3414 9.71637 16.2195L12.4399 13.4959L15.1635 16.2195C15.2855 16.3414 15.4887 16.4227 15.6513 16.4227C15.8139 16.4227 16.0172 16.3414 16.1391 16.2195C16.4237 15.9349 16.4237 15.4878 16.1391 15.2032L13.4969 12.4796L16.2204 9.75604C16.4643 9.47149 16.4643 9.02433 16.2204 8.73978Z"
                                                fill="#FF9494"
                                            />
                                        </svg>
                                    </p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="flex justify-center text-center">
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.4797 0C5.56911 0 0 5.56911 0 12.4797C0 19.3902 5.56911 25 12.4797 25C19.3902 25 25 19.3902 25 12.4797C25 5.56911 19.3902 0 12.4797 0ZM12.4797 23.5772C6.38211 23.5772 1.42276 18.5772 1.42276 12.4797C1.42276 6.38211 6.38211 1.42276 12.4797 1.42276C18.5772 1.42276 23.5772 6.38211 23.5772 12.4797C23.5772 18.5772 18.5772 23.5772 12.4797 23.5772Z"
                                                fill="#FF9494"
                                            />
                                            <path
                                                d="M16.2204 8.73978C15.9359 8.45523 15.4887 8.45523 15.2042 8.73978L12.4806 11.4634L9.75702 8.73978C9.47247 8.45523 9.02531 8.45523 8.74076 8.73978C8.45621 9.02433 8.45621 9.47149 8.74076 9.75604L11.4643 12.4796L8.74076 15.2032C8.45621 15.4878 8.45621 15.9349 8.74076 16.2195C8.86271 16.3414 9.06596 16.4227 9.22856 16.4227C9.39117 16.4227 9.59442 16.3414 9.71637 16.2195L12.4399 13.4959L15.1635 16.2195C15.2855 16.3414 15.4887 16.4227 15.6513 16.4227C15.8139 16.4227 16.0172 16.3414 16.1391 16.2195C16.4237 15.9349 16.4237 15.4878 16.1391 15.2032L13.4969 12.4796L16.2204 9.75604C16.4643 9.47149 16.4643 9.02433 16.2204 8.73978Z"
                                                fill="#FF9494"
                                            />
                                        </svg>
                                    </p>
                                </td>
                                <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                                    <p className="flex justify-center text-center">
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                                fill="#13C296"
                                            />
                                            <path
                                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </p>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                {/* </div> */}
                {/* <div>
                    <span className="absolute left-0 top-0 -z-1">
                        <svg
                            width={213}
                            height={188}
                            viewBox="0 0 213 188"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx={75} cy={50} r={138} fill="url(#paint0_linear)" />
                            <defs>
                                <linearGradient
                                    id="paint0_linear"
                                    x1={75}
                                    y1={-88}
                                    x2={75}
                                    y2={188}
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#3056D3" stopOpacity="0.15" />
                                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    <span className="absolute left-11 top-30 -z-1">
                        <svg
                            width={50}
                            height={109}
                            viewBox="0 0 50 109"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="47.71"
                                cy="107.259"
                                r="1.74121"
                                transform="rotate(180 47.71 107.259)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="47.71"
                                cy="91.9355"
                                r="1.74121"
                                transform="rotate(180 47.71 91.9355)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="47.71"
                                cy="76.6133"
                                r="1.74121"
                                transform="rotate(180 47.71 76.6133)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="47.71"
                                cy="47.0132"
                                r="1.74121"
                                transform="rotate(180 47.71 47.0132)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="47.71"
                                cy="16.7158"
                                r="1.74121"
                                transform="rotate(180 47.71 16.7158)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="47.71"
                                cy="61.6392"
                                r="1.74121"
                                transform="rotate(180 47.71 61.6392)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="47.71"
                                cy="32.0386"
                                r="1.74121"
                                transform="rotate(180 47.71 32.0386)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="47.71"
                                cy="1.74121"
                                r="1.74121"
                                transform="rotate(180 47.71 1.74121)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="32.3877"
                                cy="107.259"
                                r="1.74121"
                                transform="rotate(180 32.3877 107.259)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="32.3877"
                                cy="91.9355"
                                r="1.74121"
                                transform="rotate(180 32.3877 91.9355)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="32.3877"
                                cy="76.6133"
                                r="1.74121"
                                transform="rotate(180 32.3877 76.6133)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="32.3877"
                                cy="47.0132"
                                r="1.74121"
                                transform="rotate(180 32.3877 47.0132)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="32.3877"
                                cy="16.7158"
                                r="1.74121"
                                transform="rotate(180 32.3877 16.7158)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="32.3877"
                                cy="61.6392"
                                r="1.74121"
                                transform="rotate(180 32.3877 61.6392)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="32.3877"
                                cy="32.0386"
                                r="1.74121"
                                transform="rotate(180 32.3877 32.0386)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="32.3877"
                                cy="1.74121"
                                r="1.74121"
                                transform="rotate(180 32.3877 1.74121)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="17.0654"
                                cy="107.259"
                                r="1.74121"
                                transform="rotate(180 17.0654 107.259)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="17.0654"
                                cy="91.9355"
                                r="1.74121"
                                transform="rotate(180 17.0654 91.9355)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="17.0654"
                                cy="76.6133"
                                r="1.74121"
                                transform="rotate(180 17.0654 76.6133)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="17.0654"
                                cy="47.0132"
                                r="1.74121"
                                transform="rotate(180 17.0654 47.0132)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="17.0654"
                                cy="16.7158"
                                r="1.74121"
                                transform="rotate(180 17.0654 16.7158)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="17.0654"
                                cy="61.6392"
                                r="1.74121"
                                transform="rotate(180 17.0654 61.6392)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="17.0654"
                                cy="32.0386"
                                r="1.74121"
                                transform="rotate(180 17.0654 32.0386)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="17.0654"
                                cy="1.74121"
                                r="1.74121"
                                transform="rotate(180 17.0654 1.74121)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.74121"
                                cy="107.259"
                                r="1.74121"
                                transform="rotate(180 1.74121 107.259)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.74121"
                                cy="91.9355"
                                r="1.74121"
                                transform="rotate(180 1.74121 91.9355)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.74121"
                                cy="76.6133"
                                r="1.74121"
                                transform="rotate(180 1.74121 76.6133)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.74121"
                                cy="47.0132"
                                r="1.74121"
                                transform="rotate(180 1.74121 47.0132)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.74121"
                                cy="16.7158"
                                r="1.74121"
                                transform="rotate(180 1.74121 16.7158)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.74121"
                                cy="61.6392"
                                r="1.74121"
                                transform="rotate(180 1.74121 61.6392)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.74121"
                                cy="32.0386"
                                r="1.74121"
                                transform="rotate(180 1.74121 32.0386)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.74121"
                                cy="1.74121"
                                r="1.74121"
                                transform="rotate(180 1.74121 1.74121)"
                                fill="#3056D3"
                            />
                        </svg>
                    </span>
                </div> */}
            </div>
        </div>

    )
}
