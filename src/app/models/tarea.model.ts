export class Tarea {

    titulo:string;
    descripcion:string;


    constructor(ptitulo = '', pDescripcion = ''){
        this.titulo = ptitulo;
        this.descripcion = pDescripcion;
    }
}