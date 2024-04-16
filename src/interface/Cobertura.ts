import SubCobertura from "./SubCobertura";

export default interface Cobertura {
    id: string,
    nombre: string,
    abreviatura: string,
    sumaMaxima: number,
    sumaMinima: number,
    sumaDefecto: number,
    subCoberturas: SubCobertura[],
}