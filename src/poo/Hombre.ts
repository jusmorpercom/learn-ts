import { IPersona } from "./IPersona";

class Hombre implements IPersona {

    nombre: string;
    apellido: string;
    edad!: number;
    nombre_completo(): string {
        return this.nombre + ' ' + this.apellido;
    }

    constructor(nombre?: string, apellido?: string) {
        this.nombre = nombre ?? '';
        this.apellido = apellido ?? '';
    }

    hablar_futbol(equipo: string, minutos: number): void {
        console.log(`Hablemos sobre el ${equipo} ${minutos}, pues esta jugando como los dioses`);
    }

};