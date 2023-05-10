interface IPersona {

    readonly nombre?: string;
    readonly apellido?: string;
    edad?: number; 

    this.nombre_completo = function(){
        return this.nombre + ' ' + this.apellido; 
    } 

    // function nombre_completo2(nombre, apellido){
    //     return name + ' ' + apellido
    // }
};
