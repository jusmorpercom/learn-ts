/**
 * Una clase abstacta en Typescript es una clase de la que no se puede crear objetos o sea instancias 
 * y que puede contener propiedades o metodos abstractos que deben ser implementado. 
 * subclase (Interface). Tambien puede tener metododos o propiedades que tengan ya una implementacion
 * y los cuales seran heredadso por la subclase (Herencia). Tambien se peude sobreescribir los metodos y 
 * sepueden marcar con la palabra reservada override, permite el suso de modificadores de acceso. 
 */


export abstract class Empleado {

    abstract tipoEmpleado: string;
    

    
    constructor(public nombre: string, public id: number) {
    }

    public mostrarInformacion(): void {
        console.log(` Nombre: ${this.nombre}, ID: ${this.id}`);
    }

    // Metodo abstracto
    //Firma de un metodo - quien la use la clase base debe implementar 
    public abstract calcularSalario(): number;
}

// si intentamos crear una variable de la clase, dice que no se puede crear una insancia de una clase abstracta 