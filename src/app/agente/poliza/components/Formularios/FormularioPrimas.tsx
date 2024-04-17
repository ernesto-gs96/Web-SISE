import TableOne from "@/components/Tables/TableOne"

export const FormularioPrimas = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h2 className="font-medium text-black dark:text-white">
                    Primas
                </h2>
            </div>
            <div className="p-11">
                <TableOne />
            </div>
        </div>
    )
}
