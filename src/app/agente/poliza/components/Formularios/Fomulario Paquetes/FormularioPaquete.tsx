// Librerias

// Componentes propios
import { CoberturasAmparadas } from "./CoberturasAmparadas";
import { FormularioSumasAseguradas } from "./FormularioSumasAseguradas";
import { Paquetes } from "./Paquetes";

// Actions propios
import { getCookiePaqueteSeleccionado } from "@/actions/Emision/actionsCookies";

// BD estatica


export const FormularioPaquete = () => {

    const paqueteSeleccionado = getCookiePaqueteSeleccionado();

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
                                        paqueteSeleccionado.id
                                            ? "Suma asegurada" 
                                            : "Amparada"
                                    }
                                </h5>
                            </td>
                            <td className="w-1/4 border-t border-stroke px-7 py-5 dark:border-strokedark">
                                <h5 className="text-center font-bold text-black dark:text-white">
                                    {
                                        paqueteSeleccionado.id
                                            ? "Deducible"
                                            : "Amparada"
                                    }
                                </h5>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paqueteSeleccionado.id
                                ? <FormularioSumasAseguradas/> 
                                : <CoberturasAmparadas/>
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}
