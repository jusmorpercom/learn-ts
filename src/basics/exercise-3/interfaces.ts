// Interface: me sirve para generar la estructura de un objeto o definir un contrato para una clase. Es para cumplir una arquitectura
// En una interface todo es publico

interface ContratoJunior {

    // Propiedades opcionales - No es obligatorio 
    salario?: number;
    fechaInicio?: Date;

    // Propiedades obligatorias
    rol: Rol;
    
    // Solo se crea la firma de los métodos, quien implemente debe definir
    // su funcionalidad 
    // Métodos opcionales
    cancelar?(): void;

    // Métodos obligatorios 
    pagar(): number;
    suspender(cantidad: number): void;

}

enum Rol {
    Junior,
    Middle,
    Senior
}

enum TipoContrato {
    Indefinido,
    TerminoFijo,
    PrestacionServicios
}
// implementamos la interface en la clase 
// nos paramos en la bombilla azul para implementar la interface 
// le agregamos el método constructor 

class ContratoUltraCredit implements ContratoJunior {

    // Atributos que debo tener de la interface contrato junior 
    rol: Rol;
    salario?: number;

    // Atributos propios 
    tipoContrato: TipoContrato; // al ser atributo propio puede ser privado 

    constructor() {
        this.tipoContrato = TipoContrato.Indefinido;
        this.rol = Rol.Junior;
    }

    pagar(): number {
        return 1000000;
    }
    suspender(cantidad: number): void {
        console.log(`Estas suspendido ${cantidad} de días.`)
        console.log('Información del contrato');

        // ?? Nullish coalescing operator 
        console.log(`Tu salario es: ${this.salario ?? 1000}`); // Valida si la expression 
        // que esta a la izquierda es nul o undefined, por defecto imprime la expresión a la derecha 
        // de lo contrario retorna la expresión de la izquierda 

        // Validando null, undefined, o , false, '', NaN
        console.log( `Tu salario es: ${ this.salario ? this.salario : 1000 }` );
    }
}

class ContratoGlobal implements ContratoJunior {
    salario?: number | undefined;
    fechaInicio?: Date | undefined;
    rol: Rol; 

    constructor() {
        this.rol = Rol.Middle;
    }
    
    cancelar?(): void {
    console.log('Contrato cancelado')
    }
    pagar(): number {
        return 2000000;
    }

    suspender(cantidad: number): void {
        console.log(`Estas suspendido por ${cantidad} meses`);
    }
}

// Son dos objetos de diferentes clases (implementaciones) pero de la misma interface 
// Polimorfismo por interface 

const contratoJuan: ContratoJunior = new ContratoGlobal(); 
const contratoJuana: ContratoJunior = new ContratoUltraCredit();

const listaContratos = [ contratoJuan, contratoJuana ]; 

listaContratos.forEach( ( contrato: ContratoJunior ) => {
    
    console.log('==================================');
    contrato.suspender(3);
    console.log( typeof contrato );
    if ( contrato isntance of ContratoUltraCredit ) {
        console.log(contrato.tipoContrato);
    }
    else if ( contrato instanceof ContratoGlobal ) {
        contrato.cancelar!(); 
    }
    
    console.log('==================================');


});