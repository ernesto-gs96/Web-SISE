import SubCobertura from "@/interface/SubCobertura";

const subCoberturas:SubCobertura[] = [
    {
        id: "01",
        nombre: "subCobertura 01",
        abreviatura: "RDCT",
        sumaMaxima: 1500000,
        sumaMinima: 500000,
        sumaDefecto: 1000000,
        deducibleMaxima: 100,
        deducibleMinima: 0,
        deducibleDefecto: 15,
        prima: 100,
        idCoberturaPadre: '01'
    },
    {
        id: "02",
        nombre: "subCobertura 02",
        abreviatura: "GL",
        sumaMaxima: 2500000,
        sumaMinima: 1000000,
        sumaDefecto: 2000000,
        deducibleMaxima: 100,
        deducibleMinima: 10,
        deducibleDefecto: 10,
        prima: 200,
        idCoberturaPadre: '01'
    },
    {
        id: "03",
        nombre: "subCobertura 03",
        abreviatura: "GMO",
        sumaMaxima: 3500000,
        sumaMinima: 1500000,
        sumaDefecto: 2000000,
        deducibleMaxima: 100,
        deducibleMinima: 15,
        deducibleDefecto: 15,
        prima: 150,
        idCoberturaPadre: '02'
    },
    {
        id: "04",
        nombre: "subCobertura 04",
        abreviatura: "AV",
        sumaMaxima: 1500000,
        sumaMinima: 500000,
        sumaDefecto: 1000000,
        deducibleMaxima: 100,
        deducibleMinima: 0,
        deducibleDefecto: 15,
        prima: 100,
        idCoberturaPadre: '02'
    },
    {
        id: "05",
        nombre: "subCobertura 05",
        abreviatura: "RT",
        sumaMaxima: 2500000,
        sumaMinima: 1000000,
        sumaDefecto: 2000000,
        deducibleMaxima: 100,
        deducibleMinima: 10,
        deducibleDefecto: 10,
        prima: 200,
        idCoberturaPadre: '03'
    },
    {
        id: "06",
        nombre: "subCobertura 06",
        abreviatura: "MCAA",
        sumaMaxima: 3500000,
        sumaMinima: 2500000,
        sumaDefecto: 2000000,
        deducibleMaxima: 100,
        deducibleMinima: 15,
        deducibleDefecto: 15,
        prima: 200,
        idCoberturaPadre: '03'
    },
    {
        id: "07",
        nombre: "subCobertura 07",
        abreviatura: "DM",
        sumaMaxima: 1500000,
        sumaMinima: 500000,
        sumaDefecto: 1000000,
        deducibleMaxima: 100,
        deducibleMinima: 0,
        deducibleDefecto: 15,
        prima: 100,
        idCoberturaPadre: '04'
    },
         
]

export default subCoberturas;