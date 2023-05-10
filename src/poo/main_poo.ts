interface IPersona {

    readonly nombre: string; // el metodo readonly sirve para que no se peuda cambiar el valor 
    readonly apellido: string;
    edad: number; 

    nombre_completo(): string;
}

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