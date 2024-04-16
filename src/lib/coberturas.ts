import Cobertura from "@/interface/Cobertura";
import subCoberturas from "./SubCoberturas";

const coberturas:Cobertura[] = [
    {
        id: "01",
        nombre: "Responsabilidad Civil por Daños a Terceros.",
        abreviatura: "RDCT",
        sumaMaxima: 1500000,
        sumaMinima: 500000,
        sumaDefecto: 1000000,
        subCoberturas: []
    },
    {
        id: "02",
        nombre: "Gastos legales",
        abreviatura: "GL",
        sumaMaxima: 2500000,
        sumaMinima: 1000000,
        sumaDefecto: 2000000,
        subCoberturas: []
    },
    {
        id: "03",
        nombre: "Gastos Médicos a Ocupantes.",
        abreviatura: "GMO",
        sumaMaxima: 3500000,
        sumaMinima: 1500000,
        sumaDefecto: 2000000,
        subCoberturas: []
    },
    {
        id: "04",
        nombre: "Asistencia Vial.",
        abreviatura: "AV",
        sumaMaxima: 1500000,
        sumaMinima: 500000,
        sumaDefecto: 1000000,
        subCoberturas: []
    },
    {
        id: "05",
        nombre: "Robo total.",
        abreviatura: "RT",
        sumaMaxima: 2500000,
        sumaMinima: 1000000,
        sumaDefecto: 2000000,
        subCoberturas: []
    },
    {
        id: "06",
        nombre: "Muerte del Conductor por Accidente Automovilístico.",
        abreviatura: "MCAA",
        sumaMaxima: 3500000,
        sumaMinima: 2500000,
        sumaDefecto: 2000000,
        subCoberturas: []
    },
    {
        id: "07",
        nombre: "Daños Materiales.",
        abreviatura: "DM",
        sumaMaxima: 1500000,
        sumaMinima: 500000,
        sumaDefecto: 1000000,
        subCoberturas: []
    },
         
]

coberturas.forEach(cobertura => {
    cobertura.subCoberturas = subCoberturas.filter(subCob => subCob.idCoberturaPadre === cobertura.id);
});

export default coberturas;