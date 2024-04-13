export default interface Paquete {
    id: string,
    nombre: string,
    descripcion?: string,
    color?: string,
    coberturasAmparadas: string[],
}