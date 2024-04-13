import Paquete from "@/interface/Paquete";
import cookiesBD from "@/lib/cookiesBD";
import paquetes from "@/lib/paquetes";
import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";

export const getCookieIDpaqueteSeleccionado = ():string => {
    let idPaqueteSeleccionado: string = ''
    if( hasCookie(cookiesBD.paqueteSeleccionado.key) ){
        idPaqueteSeleccionado = JSON.parse( getCookie(cookiesBD.paqueteSeleccionado.key) as string ?? '' );
    }
    return idPaqueteSeleccionado;
}

export const getCookiePaqueteSeleccionado = ():Paquete => {
    let cookiePaqueteSeleccionado = {id:''} as Paquete;
    if( hasCookie(cookiesBD.paqueteSeleccionado.key) ){
        cookiePaqueteSeleccionado = JSON.parse( getCookie(cookiesBD.paqueteSeleccionado.key) as string ?? {} );
    }
    return cookiePaqueteSeleccionado;
}

export const setCookiePaqueteSeleccionado = ( id:string ):void => {
    const paquete = paquetes.filter(paquete => paquete.id === id)[0];
    if (paquete) {
        setCookie(cookiesBD.paqueteSeleccionado.key, JSON.stringify(paquete));
    }
}

export const deleteCookiePaqueteSeleccionado = ():void => {
    deleteCookie(cookiesBD.paqueteSeleccionado.key);
}