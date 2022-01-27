// ToDo: Método para crear un ToDo como lo vimos en el Index.hsml

import { Todo } from "../classes";
import { todoList } from "../index.js";

//? Referencias al HTML:
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

export const crearTodoHtml = (todo) => {
    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    //? crear el elemento HTML:
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    //? insertar el div:
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
};


//? Eventos:
txtInput.addEventListener('keyup', (event) => {

    if (event.keyCode === 13 && txtInput.value.length > 0) {

        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);

        console.log(todoList); //! Luego eliminar

        //? Llamamos al método crearTodoHtml para agregarlo al HTML:
        crearTodoHtml(nuevoTodo);

        //? Limpiar el input:
        txtInput.value = '';
    }
}); 
