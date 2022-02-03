import { Todo } from "./todo.class";

export class TodoList {

    constructor() {
        // this.todos = [];
        //? Si no existe el método la inicializa...
        this.cargarLocalStorage();
    };

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    };

    eliminarTodo(id) { //? V.112 -> Borrar un todo:
        const idNumb = parseInt(id);
        this.todos = this.todos.filter(todo => todo.id !== idNumb);
        this.guardarLocalStorage();
    };

    marcarCompletado(id) { //? V.111 Barre arreglo; y busca por el id
        const idNumb = parseInt(id);
        for (const todo of this.todos) {

            if (todo.id === idNumb) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            };
        };
    };

    eliminarCompletados() { //? Vodeo 113 - implementa método:
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    };

    guardarLocalStorage() { //? Vodeo 115 - implementa método:
        localStorage.setItem('todo', JSON.stringify(this.todos));
    };

    cargarLocalStorage() {
        this.todos = (localStorage.getItem('todo'))
            ? JSON.parse(localStorage.getItem('todo'))
            : [];
        //? Si existe el objeto, se inicializa con el valor del localStorage...
        //? Si no hay tarea, inicializa array vacío..

        this.todos = this.todos.map(obj => Todo.fromJson(obj));
        //? Optimización del código (opcional):
        //! this.todos = this.todos.map(fromJson);

    };
};
