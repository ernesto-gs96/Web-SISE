"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftStartOnRectangleIcon, CalculatorIcon, ChartBarIcon, ChevronDownIcon, ClipboardDocumentListIcon, Cog8ToothIcon, DocumentChartBarIcon, DocumentMagnifyingGlassIcon, DocumentMinusIcon, DocumentPlusIcon, DocumentTextIcon, LifebuoyIcon, MagnifyingGlassIcon, UserIcon, UserPlusIcon, UsersIcon } from "@heroicons/react/24/outline";
import { SidebarItem } from "./SidebarItem";
import { SidebarItemGroup } from "./SidebarItemGroup";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const opciones = [
  {
    nombre: 'Inicio',
    href: '/agente/',
    icono: <ChartBarIcon className="h-6 w-6" />
  },
  {
    nombre: 'Polizas',
    href: '/agente/',
    icono: <ClipboardDocumentListIcon className="h-6 w-6" />,
    grupo: [
      {
        nombre: 'Emitir',
        href: '/agente/poliza/emitir',
        icono: <DocumentPlusIcon className="h-6 w-6" />
      },
      {
        nombre: 'Cotizar',
        href: '/agente/poliza/cotizar',
        icono: <CalculatorIcon className="h-6 w-6" />
      },
      {
        nombre: 'Consultar',
        href: '/agente/poliza/consultar',
        icono: <DocumentMagnifyingGlassIcon className="h-6 w-6" />
      },
      {
        nombre: 'Renovar',
        href: '/agente/poliza/renovar',
        icono: <DocumentTextIcon className="h-6 w-6" />
      },
      {
        nombre: 'Cancelar',
        href: '/agente/poliza/cancelar',
        icono: <DocumentMinusIcon className="h-6 w-6" />
      },
      {
        nombre: 'Reportes',
        href: '/agente/poliza/reportes',
        icono: <DocumentChartBarIcon className="h-6 w-6" />
      },
    ]
  },
  {
    nombre: 'Asegurados',
    href: '/agente/asegurado',
    icono: <UserIcon className="h-6 w-6" />,
    grupo: [
      {
        nombre: 'Registrar',
        href: '/agente/asegurado/registrar',
        icono: <UserPlusIcon className="h-6 w-6" />
      },
      {
        nombre: 'Consultar',
        href: '/agente/asegurado/consultar',
        icono: <MagnifyingGlassIcon className="h-6 w-6" />
      },
      {
        nombre: 'Reportes',
        href: '/agente/asegurado/reportes',
        icono: <DocumentChartBarIcon className="h-6 w-6" />
      },
    ]
  },
  {
    nombre: 'Sub agentes',
    href: '/agente/subAgente',
    icono: <UsersIcon className="h-6 w-6" />,
    grupo: [
      {
        nombre: 'Registrar',
        href: '/agente/subAgente/registrar',
        icono: <UserPlusIcon className="h-6 w-6" />
      },
      {
        nombre: 'Consultar',
        href: '/agente/subAgente/consultar',
        icono: <MagnifyingGlassIcon className="h-6 w-6" />
      },
      {
        nombre: 'Reportes',
        href: '/agente/subAgente/reportes',
        icono: <DocumentChartBarIcon className="h-6 w-6" />
      },
    ]
  },
];

const otrasOpciones = [
  {
    nombre: 'Configuraciones',
    href: '/agente/configuraciones',
    icono: <Cog8ToothIcon className="h-6 w-6" />,
    grupo: [
      {
        nombre: 'Pruebas',
        href: '/agente/pruebas',
        icono: <Cog8ToothIcon className="h-6 w-6" />,
      }
    ]
  },
  {
    nombre: 'Ayuda',
    href: '/agente/ayuda',
    icono: <LifebuoyIcon className="h-6 w-6" />
  },
  {
    nombre: 'Cerrar sesion',
    href: '/agente/auth/signin',
    icono: <ArrowLeftStartOnRectangleIcon className="h-6 w-6" />
  },
]

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <Image
            width={176}
            height={32}
            src={"/images/logo/logo.svg"}
            alt="Logo"
            priority
          />
        </Link>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>
            <ul className="mb-6 flex flex-col gap-1.5">
              {opciones.map(opcion => opcion.grupo ? <SidebarItemGroup key={opcion.href} {...opcion} /> : <SidebarItem key={opcion.href} {...opcion} />)}
            </ul>
          </div>

          {/* <!-- Others Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              OTRAS
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {otrasOpciones.map(opcion => opcion.grupo ? <SidebarItemGroup key={opcion.href} {...opcion} /> : <SidebarItem key={opcion.href} {...opcion} />)}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
