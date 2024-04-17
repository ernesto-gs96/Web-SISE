import Cobertura from "@/interface/Cobertura"
import SubCobertura from "@/interface/SubCobertura"

export const FilaTableOne = (data:Cobertura | SubCobertura,) => {

    const {nombre,sumaDefecto,deducibleDefecto,prima} = data;
    
    return (
        <div
            className={`grid grid-cols-3 sm:grid-cols-4 border-b border-stroke dark:border-strokedark"`}
        >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                {/* <div className="flex-shrink-0">
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div> */}
                <p className={`hidden text-black dark:text-white sm:block ${'subCoberturas' in data && "font-bold"}`}>
                    {nombre}
                </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{sumaDefecto.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-primary dark:text-white">{deducibleDefecto}%</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{prima.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            </div>

            {/* <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}%</p>
            </div> */}
        </div>
    )
}
