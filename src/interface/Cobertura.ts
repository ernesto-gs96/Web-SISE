import SubCobertura from "./SubCobertura";

export default interface Cobertura {
    id: string,
    nombre: string,
    abreviatura: string,
    sumaMaxima: number,
    sumaMinima: number,
    sumaDefecto: number,
    deducibleMaxima: number,
    deducibleMinima: number,
    deducibleDefecto: number,
    prima: number,
    subCoberturas: SubCobertura[],
}