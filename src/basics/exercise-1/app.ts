const teacher = {
    name: 'Juan Diego',
    lastName: 'Mejia v.',
    age: 26,
}
console.log('Teacher: ', teacher);

// Primitivos
// Booleans
// Declaración implícita 
const isTeacher = true; // Toma el valor con el que fue declarado y ese es el tipo.

let isPlayer = true; // Toma el tipo del valor al que se le asigno

// Declaración explicita 
const hasError: boolean = false;
let isChampion: boolean = false; 

let result = hasError ? "tiene errores" : "no tiene errores"; 

// String 
const firstName = "Juan";
const lastName = 'Mejia'; 

let fullName = 'Su nombre es:  ${firstName} ${lastName}, bienvenido';
console.log(fullName); // es con comillas francesas

// Number 
let countStudents: number = 29.5;  
let average: number = 4.5;

console.log(average.toFixed())

// Tipos de objetos
// Arrays

let fruits = ['pera', 'banano'];
let sports: string[] = ['futbol', 'baloncesto'];

type stringOrNull = string | null; 

// Union types 
let students: Array<string | null> = ['Nico', 'Yhoan', 'rayffer', null, ' ana']; // | con esto le puedo poner mas de dos tipos

console.log( students.filter((student) => student !== null));

// Tuplas 
let exampleTuples: [string, null] =  ['hola', null]; 

// Tipos personalizados 
type statusCode = 'active' | 'inactive'; // Creamos un type para que sea escrito especificamente como se le describen 

let studentStatus: statusCode = 'inactive'; 

// Any 
let working: any = 25; 
working = 'hola';

// Funciones 
/**
 * function nombreFuncion(parametro: tipoDato): tipoDatoQueRetomalaFuncion{}
 * 
 *  */ 
function validateValue( value: unknown): boolean {
    
    if (value === 'string'){
        console.log(value.trim().toUpperCase());    
    } else if (typeof value === 'number'){
        console.log(value.toFixed());
    }
    if (value === '') {
        return false;
    }else {
        return true;
    }
}

// Void 
function processResponse( saved: boolean){
    if (saved){
        console.log("guardado");
    } else {
        console.log("Ocurrio un error");
    }
}
 //console.log(getFullName(firstName, lastName));


enum Role {
    Admin = 'ADMIN',
    Client = 'CLIENT',
    Users = 'USERS',
    SuperAdmin = 'SUPER'
}

let users: Array <{name: string, role: Role}> = [
    {
        name: 'Pepito',
        role: Role.Admin,
    },
    {
        name: 'juanito',
        role: Role.Client
    },
    {
        name: 'Fulanito',
        role: Role.Client
    }
]

console.log( users.filter( (user) => user.role === Role.Client )); 
