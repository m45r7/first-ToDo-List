
export class Todo {

    //? Reconstruyendo instancias - v.116
    static fromJson({ id, tarea, completado, creado }) {
        //? Desestructuración de argumentos
        const temTodo = new Todo(tarea);

        //? Refencia a las propiedaes:
        temTodo.id = id;
        temTodo.completado = completado;
        temTodo.creado = creado;

        return temTodo;
    }

    constructor(tarea) {
        this.tarea = tarea;

        this.id = new Date().getTime(); // 1642711079387
        this.completado = false;
        this.creado = new Date();
    }

    imprimirClase() {
        console.log(`${this.tarea} - ${this.id}`);
    }
};