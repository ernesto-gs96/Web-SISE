interface Cookie {
    key: string
}

interface Cookies {
    paqueteSeleccionado: Cookie
}

const cookiesBD:Cookies = {
    paqueteSeleccionado: { key: "paqueteSeleccionado" }
}

export default cookiesBD;
