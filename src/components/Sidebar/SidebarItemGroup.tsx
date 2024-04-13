import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { useEffect, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

interface Item {
  nombre: string;
  href: string;
  icono?: JSX.Element;
}

interface Props {
  nombre: string;
  href: string;
  icono?: JSX.Element;
  grupo?: Item[];
}

export const SidebarItemGroup = (props: Props) => {
  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  const pathname = usePathname();
  const { nombre, href, icono, grupo } = props;

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <SidebarLinkGroup
      activeCondition={pathname === href || pathname.includes(href)}
    >
      {(handleClick, open) => {
        return (
          <>
            <Link
              href="#"
              className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                (pathname === href || pathname.includes(href)) &&
                "bg-graydark dark:bg-meta-4"
              }`}
              onClick={(e) => {
                e.preventDefault();
                sidebarExpanded ? handleClick() : setSidebarExpanded(true);
              }}
            >
              {icono && icono}
              {nombre}
              <IoChevronDownOutline className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && "rotate-180"}`} size={20} />
            </Link>
            {/* <!-- Dropdown Menu Start --> */}
            <div
              className={`translate transform overflow-hidden ${
                !open && "hidden"
              }`}
            >
              <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                {grupo && grupo.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                        pathname === item.href && "text-white"
                      }`}
                    >
                      {item.icono && item.icono}
                      {item.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* <!-- Dropdown Menu End --> */}
          </>
        );
      }}
    </SidebarLinkGroup>
  );
};
