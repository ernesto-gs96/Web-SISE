import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pruebas a agente",
  description: "Pagina de Pruebas a agente",
};

const elementos = [
  { href: 'pruebas/calendar/' },
  { href: 'pruebas/chart/' },
  { href: 'pruebas/forms/form-elements/' },
  { href: 'pruebas/forms/form-layout/' },
  { href: 'pruebas/profile/' },
  { href: 'pruebas/settings/' },
  { href: 'pruebas/ui/alerts/' },
  { href: 'pruebas/ui/buttons/' },
]

export default function PruebasAgentePage() {
  return (
    <>
        <div className="grid grid-col-1 gap-4">
        {
          elementos.map( elemento => 
            <Link
              key={elemento.href}
              href={elemento.href}
              className="inline-flex items-center justify-center bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              {elemento.href}
            </Link>  
          )
        }
        </div>
    </>
  );
}
