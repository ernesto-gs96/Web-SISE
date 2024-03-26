'use client'

import CardDataStats from "@/components/CardDataStats";
import ChartOne from "@/components/Charts/ChartOne";
import { BanknotesIcon, CurrencyDollarIcon, DocumentPlusIcon } from "@heroicons/react/24/outline";

const cards = [
    {
        titulo: 'Comisiones cobrada',
        total: '$28,000.00',
        icono: <CurrencyDollarIcon className="h-8 w-8" />,
        porcentaje: '38.9%',
        level: true,
    },
    {
        titulo: 'Comisiones pediente',
        total: '$12,000.00',
        icono: <CurrencyDollarIcon className="h-8 w-8" />,
        porcentaje: '18.9%',
        level: false,
    },
    {
        titulo: 'Polizas emitidas',
        total: '17',
        icono: <DocumentPlusIcon className="h-8 w-8" />,
        porcentaje: '12.45%',
        level: false,
    },
    {
        titulo: 'Prima generada',
        total: '$105,000.00',
        icono: <BanknotesIcon className="h-8 w-8" />,
        porcentaje: '28.63%',
        level: true,
    },
]

export const DashboardAgente = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">

                {cards.map(card =>
                    <CardDataStats key={card.titulo} {...card} />
                )}

            </div>

            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <ChartOne />
            </div>
        </>
    );
};
