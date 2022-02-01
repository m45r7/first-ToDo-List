// ToDo: Método para crear un ToDo como lo vimos en el Index.html

import { Todo } from "../classes";
import { todoList } from "../index.js";
//? import const todoList = new TodoList(); desde index.js (raíz)

//? Referencias al HTML:
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
// const btnBorrarCompletados = querySelector('.clear-completed');

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

        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        //? todoList -> nuevoTodo [por referencia...]
        // console.log(todoList);

        //? Llamamos al método crearTodoHtml de la faf (↑) para agregarlo al HTML, pasándole el nuevoTodo:
        crearTodoHtml(nuevoTodo);

        //? Limpiar el input:
        txtInput.value = '';
    }
});

divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName;
    //? input, label o button
    const todoElemento = event.target.parentElement.parentElement;
    //? Obtenemos el elemento li completo.
    const todoId = todoElemento.getAttribute('data-id');
    //? Obtenemos el elemento id

    //? Procedimiento: eliminar del arreglo tarea comletada:
    if (nombreElemento.includes('input')) {
        //? haciendo click en el check:
        todoList.marcarCompletado(todoId);

        //? Eliminar el elemento HTML:
        todoElemento.classList.toggle('completed');

    } else if (nombreElemento.includes('button')) {
        //? Eliminar o borrara el todo:

        todoList.eliminarTodo(todoId);
        //? Elimina del arreglo.

        divTodoList.removeChild(todoElemento);
        //? ELimina del HTML.

    }

    console.log(todoList);

});