import SubCobertura from "@/interface/SubCobertura";

const subCoberturas:SubCobertura[] = [
    {
        id: "01",
        nombre: "Responsabilidad Civil por Daños a Terceros.",
        abreviatura: "RDCT",
        idCoberturaPadre: '01'
    },
    {
        id: "02",
        nombre: "Gastos legales",
        abreviatura: "GL",
        idCoberturaPadre: '01'
    },
    {
        id: "03",
        nombre: "Gastos Médicos a Ocupantes.",
        abreviatura: "GMO",
        idCoberturaPadre: '02'
    },
    {
        id: "04",
        nombre: "Asistencia Vial.",
        abreviatura: "AV",
        idCoberturaPadre: '02'
    },
    {
        id: "05",
        nombre: "Robo total.",
        abreviatura: "RT",
        idCoberturaPadre: '03'
    },
    {
        id: "06",
        nombre: "Muerte del Conductor por Accidente Automovilístico.",
        abreviatura: "MCAA",
        idCoberturaPadre: '03'
    },
    {
        id: "07",
        nombre: "Daños Materiales.",
        abreviatura: "DM",
        idCoberturaPadre: '04'
    },
         
]

export default subCoberturas;