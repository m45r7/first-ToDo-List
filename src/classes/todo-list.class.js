
export class TodoList {

    constructor() {
        this.todos = [];
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
    }

    eliminarTodo(id) { //? V.112 -> Borrar un todo:

        const idNumb = parseInt(id);
        this.todos = this.todos.filter(todo => todo.id !== idNumb);

        //? Almacenamos en todos que barrimos con el filter (this.todos =), esto sobreescribirá los valores en todos... causando el efecto de eliminación de dichos todos...

        //? Luego el callback (todo => todo.id != id) recibe todo como argumento y hará la comparación.
    }

    marcarCompletado(id) { //? V.111
        //? Barrer el todos[]; y buscar el valor del id

        const idNumb = parseInt(id);
        for (const todo of this.todos) {

            // console.log(id, idNumb, todo.id);
            if (todo.id === idNumb) {
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    eliminarCompletados() { //? Vodeo 113

    }

}
