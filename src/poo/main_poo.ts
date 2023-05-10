interface IPersona {

    readonly nombre: string;
    readonly apellido: string;
    edad: number; 

    nombre_completo(): string
};

class Hombre implements IPersona {

    nombre: string | undefined;
    apellido: string | undefined;
    edad: number | undefined;
    nombre_completo(): string {
        return this.nombre + ' ' + this.apellido
    }

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    hablar_futbol(equipo: string, minutos: number): void {
        console.log(`Hablemos sobre el ${equipo} ${minutos}, pues esta jugando como los dioses`);
    }

}

class Mujer implements IPersona {
    nombre: string;
    apellido: string;
    edad: number | undefined;
    nombre_completo(): string {
        return this.nombre + ' ' + this.apellido
    }

    ir_cine(sala: string, pelicula: string) {
        console.log(`Viendo pelicula ${pelicula} en ${sala}`);
    }
}