
import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
//? contiene TodoList() 
//? exporta const todoList (hacia componentes)

const tarea = new Todo('Aprender JavaScript!!');
todoList.nuevoTodo(tarea);
//? usa constante todoList para instanciar un Todo
//? nuevoTodo desde Class TodoList

// tarea.completado = true;

console.log(todoList);

crearTodoHtml(tarea);
//? Usa: crearHTML desde Ccomponentes
//? Usa: tarea desde todo.class.js
