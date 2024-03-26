import Link from "next/link"

interface Props {
    titulo: string,
    mensaje: string,
    href: string,
    fecha: string
}

export const Notificacion = (props: Props) => {

    const { titulo, mensaje, href, fecha } = props;

    return (
        <li>
            <Link
                className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                href={href}
            >
                <p className="text-sm">
                    <span className="text-black dark:text-white font-semibold">
                        {titulo}
                    </span>
                    <br/>
                    {mensaje}
                </p>

                <p className="text-xs">{fecha}</p>
            </Link>
        </li>
    )
}
