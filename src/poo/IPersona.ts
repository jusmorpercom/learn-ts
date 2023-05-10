//* El readonly solo permite que la propiedad sea inicailizada
//* en el constructor. Fuera del constructor solo se peude leer el valor 
//* En caso de asignarle un valor fuera del constructor, typescript generaria un error 

export interface IPersona {

    readonly nombre: string; // el metodo readonly sirve para que no se peuda cambiar el valor 
    readonly apellido: string;
    edad: number; 

    nombre_completo(): string;
}