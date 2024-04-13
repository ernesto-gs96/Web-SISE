import Paquete from "@/interface/Paquete"

const paquetes:Paquete[] = [
    {
        id: "01",
        nombre: "Básico",
        descripcion: "Descripción del paquete básico.",
        color: "bg-black",
        coberturasAmparadas: ["01","02","03","04"]
    },
    {
        id: "02",
        nombre: "Limitado",
        descripcion: "Descripción del paquete limitado.",
        color: "bg-[#13C296]",
        coberturasAmparadas: ["01","02","03","04","05","06"]
    },
    {
        id: "03",
        nombre: "Amplia",
        descripcion: "Descripción del paquete Amplia.",
        color: "bg-primary",
        coberturasAmparadas: ["01","02","03","04","05","06","07"]
    }
]

export default paquetes;