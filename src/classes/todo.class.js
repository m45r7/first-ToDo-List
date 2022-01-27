
export class Todo {

    constructor(tarea) {
        this.tarea = tarea;

        this.id = new Date().getTime(); // 1642711079387
        this.completado = false;
        this.creado = new Date();
    }
};