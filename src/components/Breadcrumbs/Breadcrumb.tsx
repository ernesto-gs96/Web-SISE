import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { IoCarOutline, IoCashOutline, IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex gap-2 justify-center">
      {/* <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        // {pageName}
      </h2> */}

      <Link
        href="#"
        className="text-xs inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-4"
      >
        <span><ClipboardDocumentListIcon className="h-6 w-6" /></span>
        1.- Póliza
      </Link>

      <Link
        href="#"
        className="text-xs inline-flex items-center justify-center gap-2 rounded-full border border-primary px-4 py-4 text-center font-medium text-primary hover:bg-opacity-90 lg:px-6 xl:px-4"
      >
        <span><IoPersonOutline/></span>
        2.- Asegurado
      </Link>

      <Link
        href="#"
        className="text-xs inline-flex items-center justify-center gap-2 rounded-full border border-primary px-4 py-4 text-center font-medium text-primary hover:bg-opacity-90 lg:px-6 xl:px-4"
      >
        <span><IoCarOutline/></span>
        3.- Vehiculo
      </Link>

      <Link
        href="#"
        className="text-xs inline-flex items-center justify-center gap-2 rounded-full border border-primary px-4 py-4 text-center font-medium text-primary hover:bg-opacity-90 lg:px-6 xl:px-4"
      >
        <span><IoSettingsOutline/></span>
        4.- Coberturas
      </Link>

      <Link
        href="#"
        className="text-xs inline-flex items-center justify-center gap-2 rounded-full border border-primary px-4 py-4 text-center font-medium text-primary hover:bg-opacity-90 lg:px-6 xl:px-4"
      >
        <span><IoCashOutline/></span>
        5.- Primas
      </Link>

      <Link
        href="#"
        className="text-xs inline-flex items-center justify-center gap-2 rounded-full border border-primary px-4 py-4 text-center font-medium text-primary hover:bg-opacity-90 lg:px-6 xl:px-4"
      >
        <span><IoCashOutline/></span>
        6.- Bonificaciones
      </Link>

      <Link
        href="#"
        className="text-xs inline-flex items-center justify-center gap-2 rounded-full border border-primary px-4 py-4 text-center font-medium text-primary hover:bg-opacity-90 lg:px-6 xl:px-4"
      >
        <span><IoCashOutline/></span>
        7.- Pago
      </Link>

      <Link
        href="#"
        className="text-xs inline-flex items-center justify-center gap-2 rounded-full border border-primary px-4 py-4 text-center font-medium text-primary hover:bg-opacity-90 lg:px-6 xl:px-4"
      >
        <span><IoCashOutline/></span>
        8.- Resumen
      </Link>
    </div>
  );
};

export default Breadcrumb;
