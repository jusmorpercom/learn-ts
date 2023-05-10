import { IPersona } from "./IPersona";

const hombre1: IPersona = new Hombre('Juan Diego', 'Mejia')
hombre1.edad = 29;
hombre1.nombre_completo();

const hombre2: IPersona = new Hombre();
hombre2.edad = 18;
hombre2.nombre_completo();

const hombre3: IPersona = new Hombre('Juanjo see Peralez')
hombre2.edad = 15;
hombre2.nombre_completo();