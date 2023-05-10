import { IPersona } from "./IPersona";

class Mujer implements IPersona {
    nombre!: string;  //! Como no tiene constructor, le decimos a Typescript que validamos nosotros 
    apellido!: string;
    edad!: number;
    
    nombre_completo(): string {
        return this.nombre + ' ' + this.apellido
    }

    ir_cine(sala: string, pelicula: string): void {
        console.log(`Viendo pelicula ${pelicula} en ${sala}`);
    }
};