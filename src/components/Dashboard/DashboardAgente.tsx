'use client'

import CardDataStats from "@/components/CardDataStats";
import ChartOne from "@/components/Charts/ChartOne";
import { BanknotesIcon, CurrencyDollarIcon, DocumentPlusIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import ChartTwo from "../Charts/ChartTwo";
import TableOne from "../Tables/TableOne";
import ChartThree from "../Charts/ChartThree";
import MapOne from "../Maps/MapOne";

const cards = [
    {
        titulo: 'Comisiones cobrada',
        total: '$35,000.00',
        icono: <CurrencyDollarIcon className="h-8 w-8" />,
        porcentaje: '70%',
        level: true,
    },
    {
        titulo: 'Comisiones pediente',
        total: '$15,000.00',
        icono: <CurrencyDollarIcon className="h-8 w-8" />,
        porcentaje: '30%',
        level: false,
    },
    {
        titulo: 'Polizas pagadas',
        total: '18',
        icono: <DocumentTextIcon className="h-8 w-8" />,
        porcentaje: '72%',
        level: true,
    },
    {
        titulo: 'Polizas pendientes',
        total: '7',
        icono: <DocumentTextIcon className="h-8 w-8" />,
        porcentaje: '38%',
        level: false,
    },
]

export const DashboardAgente = () => {

    // TODO: Pasar TableOne a movimientos o cartera, como se vaya a llamar en el futuro
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                    {cards.map(card =>
                        <CardDataStats key={card.titulo} {...card} />
                    )}

                </div>
                <div>
                    <ChartThree />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-4">
                <div className="lg:col-span-2">
                    <ChartOne />
                </div>
                <div>
                    <ChartTwo />
                </div>
            </div>
            
            {/* <div className="mt-4">
                <TableOne />
            </div> */}

        </>
    );
};
