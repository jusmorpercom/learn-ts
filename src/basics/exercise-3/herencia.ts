// El ! sirve para que typescript evite verificar los nulos y los undefined 

class Animal {

    color!: string;
    especie!: string;
    peso!: number;
    tamanio!: string;

    alimentarse(): void {
        console.log('Alimentandome');
    }

}

// La herencia se da gracias a la palabra reservada extends 
class Gato extends Animal {

    constructor() {
        super();
        console.log('Creando un gato a partir de animal');
    }

}

class Perro extends Animal {

    constructor() {
        super();
        console.log('Creando un perro a partir de animal');
    }

}