class Auto { //las llaves es el molde
    //Atributos de las clase o propiedades
    color: string = 'Negro'; // También podemos iniciarlo directamente, pero es buena practica hacerlo en el constructor
    puertas: number;
    marca?: string; // El ? quiere decir que es indefinido 
    
    // El primer método que ese ejecuta cuando se inicia una clase
    constructor(marca?: string) {  // espera a que le ingresen la marca, con ? es opcional, si no es obligatorio
        this.puertas = 4; // Con this, accedo a todas las propiedades y métodos de la clase
        this.marca = marca; 
    }

    // Métodos de la clase
    acelerar() {
        console.log("Acelerando");

    }

    frenar() {
        console.log('Frenando');

    }

    prender() {
        console.log('Prendiendo')
    }
}

let ferrari: Auto = new Auto(); // Instancia de la clase Auto - objeto
console.log(ferrari);

ferrari.marca = 'ferrari';
console.log(ferrari.marca);

ferrari.color = 'Blanco';
console.log(ferrari)

let lambo = new Auto();
console.log(lambo);
lambo.puertas = 2;
lambo.marca = 'Lamborghini';
lambo.color = 'Exotico';
console.log(lambo);

class Auto2 {
    
    color: string = 'Negro'; // Por defecto es publico
    public puertas: number; // Forma explícita para colocar una propiedad publica

    // En el constructor yo puedo crear propiedades de la clase 
    // si y solo si tienen el modificar de acceso (public, private, protected)

    //los parámetros que son opcionales, siempre deben ir al final de cualquier método o función 
    //en este caso el constructor es un método
    constructor( public peso: number, public marca?: string ){ // el opcional debe ser al final 
        this.puertas = 4;
        this.encender();
    }

    apagar() {
        console.log('Apagar');
    }
    private encender() {
        console.log('Enciende el carro');
    }
}

let ford = new Auto2(500, 'Ford')
console.log(ford)
ford.apagar(); // es publico, encender no se puede acceder por afuera porque es privado, lo privado solo se accede por dentro de la clase 