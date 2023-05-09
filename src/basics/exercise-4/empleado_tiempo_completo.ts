import { Empleado } from "./empleado";
import { tipoEmpleado } from "./tipo_empleado.enum";

export class EmpleadoTiempoCompleto extends Empleado {
    public tipoEmpleado: string;
    
    constructor (nombre: String, id: number, public salarioMensual: number) {
        super(nombre, id);
        this.tipoEmpleado = tipoEmpleado.TIEMPO_COMPLETO;
    }

    public calcularSalario(): number {
        return this.salarioMensual;
    }

    

}