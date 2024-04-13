import Cobertura from "@/interface/Cobertura";
import Paquete from "@/interface/Paquete";
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

interface Props {
    coberturas: Cobertura[],
    paquetes: Paquete[]
  }

export const CoberturasAmparadas = ({ coberturas, paquetes }: Props) => {
    return (
        <>
            {
                coberturas.map( cobertura => (
                    <tr key={"Todas-coberturas-" + cobertura.id}>
                        <td className="w-1/4 border-t border-stroke px-7 py-5 dark:border-strokedark">
                            <p className="font-medium">{cobertura.nombre}</p>
                        </td>
                        {
                            paquetes.map(paquete => {
                                
                                // TODO: Buscar si hay una mejor forma que la doble negación
                                const amparada = !!paquete.coberturasAmparadas.find(cobe => cobe === cobertura.id)
                                const color = amparada ? "green" : "red";

                                return (
                                    <td className="w-1/4 border-t border-stroke px-7 py-5 dark:border-strokedark">
                                        <div className="flex justify-center">
                                            {
                                                amparada
                                                    ? <IoCheckmarkCircleOutline size={30} color={color} />
                                                    : <IoCloseCircleOutline size={30} color={color} />
                                            }
                                        </div>
                                    </td>
                                )
                            })
                        }
                    </tr>
                )
                )
            }
        </>
    )
}
