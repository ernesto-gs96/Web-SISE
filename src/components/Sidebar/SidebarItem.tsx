import Link from "next/link"
import { usePathname } from "next/navigation";

interface Props {
    nombre: string,
    href: string,
    icono?: JSX.Element
}

export const SidebarItem = (props:Props) => {

    const pathname = usePathname();
    const { nombre, href, icono } = props;
    return (
        <Link
            href={href}
            className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "/" ||
                    pathname.includes("dashboard")) &&
                "bg-graydark dark:bg-meta-4"
                }`}
        >
            { icono && icono }
            { nombre }
        </Link>
    )
}
