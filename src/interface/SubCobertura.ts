export default interface SubCobertura {
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
    idCoberturaPadre: string,
}