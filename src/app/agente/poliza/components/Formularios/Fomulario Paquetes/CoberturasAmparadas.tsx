import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

interface Props {
    coberturas: string[],
    paquetes: object[]
}

export const CoberturasAmparadas = ({ coberturas, paquetes }: Props) => {
    return (
        <>
            {
                coberturas.map((cobertura, index) => (
                    <tr key={"Cobertura-" + cobertura}>
                        <td className="w-1/4 border-t border-stroke px-7 py-5 dark:border-strokedark">
                            <p className="font-medium">{cobertura}</p>
                        </td>
                        {
                            paquetes.map(paquete => {
                                const amparada = paquete.coberturasAmparadas[index];
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
