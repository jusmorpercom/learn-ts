import { IPersona } from "./IPersona"

class Residencial implements IPersona {
    nombre: string;
    apellido: string;
    edad: number;
    nombre_completo(): string {
        throw new Error("Method not implemented.");
    }

    constructor(pisos: number){
        this.pisos = pisos; 
    }

    impuestos(): number;
    numero_habitantes(): number;
    agregar_habitante(persona: IPersona);
    listar_habitantes(){

    }
    
}