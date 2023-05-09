import { Empleado } from "./empleado";


export class EmpleadoPorhora extends Empleado {
    
    constructor( nombre: string,
         id: number,
        public tipoEmpleado: string, 
        public tarifaPorhora: number,
        public horasTrabajadas: number
        ) {
        super( nombre, id );
    }
    public calcularSalario(): number {
        return this.tarifaPorhora * this.horasTrabajadas;
    
    }

}