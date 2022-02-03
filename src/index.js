
import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
//? contiene TodoList() y exporta todoList (hacia componentes)

todoList.todos.forEach(todo => crearTodoHtml(todo));
//? Optimización del código (opcional):
//! todoList.todos.forEach(crearTodoHtml);
/**
 *? Esto funcionará bien si es solo un argumento el que se requiere,
 *? de lo contrario, si el forEach retornara más de un argumento, se
 *? debe hacer de la forma anterior: */

console.log('Todos:', todoList.todos);
