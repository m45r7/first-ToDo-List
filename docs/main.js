/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://first-ToDo-List/./src/styles.css?");

/***/ }),

/***/ "./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* reexport safe */ _todo_class_js__WEBPACK_IMPORTED_MODULE_0__.Todo),\n/* harmony export */   \"TodoList\": () => (/* reexport safe */ _todo_list_class_js__WEBPACK_IMPORTED_MODULE_1__.TodoList)\n/* harmony export */ });\n/* harmony import */ var _todo_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class.js */ \"./src/classes/todo.class.js\");\n/* harmony import */ var _todo_list_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.class.js */ \"./src/classes/todo-list.class.js\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://first-ToDo-List/./src/classes/index.js?");

/***/ }),

/***/ "./src/classes/todo-list.class.js":
/*!****************************************!*\
  !*** ./src/classes/todo-list.class.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoList\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class */ \"./src/classes/todo.class.js\");\n\r\n\r\nclass TodoList {\r\n\r\n    constructor() {\r\n        // this.todos = [];\r\n        //? Si no existe el método la inicializa...\r\n        this.cargarLocalStorage();\r\n    };\r\n\r\n    nuevoTodo(todo) {\r\n        this.todos.push(todo);\r\n        this.guardarLocalStorage();\r\n    };\r\n\r\n    eliminarTodo(id) { //? V.112 -> Borrar un todo:\r\n        const idNumb = parseInt(id);\r\n        this.todos = this.todos.filter(todo => todo.id !== idNumb);\r\n        this.guardarLocalStorage();\r\n    };\r\n\r\n    marcarCompletado(id) { //? V.111 Barre arreglo; y busca por el id\r\n        const idNumb = parseInt(id);\r\n        for (const todo of this.todos) {\r\n\r\n            if (todo.id === idNumb) {\r\n                todo.completado = !todo.completado;\r\n                this.guardarLocalStorage();\r\n                break;\r\n            };\r\n        };\r\n    };\r\n\r\n    eliminarCompletados() { //? Vodeo 113 - implementa método:\r\n        this.todos = this.todos.filter(todo => !todo.completado);\r\n        this.guardarLocalStorage();\r\n    };\r\n\r\n    guardarLocalStorage() { //? Vodeo 115 - implementa método:\r\n        localStorage.setItem('todo', JSON.stringify(this.todos));\r\n    };\r\n\r\n    cargarLocalStorage() {\r\n        this.todos = (localStorage.getItem('todo'))\r\n            ? JSON.parse(localStorage.getItem('todo'))\r\n            : [];\r\n        //? Si existe el objeto, se inicializa con el valor del localStorage...\r\n        //? Si no hay tarea, inicializa array vacío..\r\n\r\n        this.todos = this.todos.map(obj => _todo_class__WEBPACK_IMPORTED_MODULE_0__.Todo.fromJson(obj));\r\n        //? Optimización del código (opcional):\r\n        //! this.todos = this.todos.map(fromJson);\r\n\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack://first-ToDo-List/./src/classes/todo-list.class.js?");

/***/ }),

/***/ "./src/classes/todo.class.js":
/*!***********************************!*\
  !*** ./src/classes/todo.class.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\n\r\nclass Todo {\r\n\r\n    //? Reconstruyendo instancias - v.116\r\n    static fromJson({ id, tarea, completado, creado }) {\r\n        //? Desestructuración de argumentos\r\n        const temTodo = new Todo(tarea);\r\n\r\n        //? Refencia a las propiedaes:\r\n        temTodo.id = id;\r\n        temTodo.completado = completado;\r\n        temTodo.creado = creado;\r\n\r\n        return temTodo;\r\n    }\r\n\r\n    constructor(tarea) {\r\n        this.tarea = tarea;\r\n\r\n        this.id = new Date().getTime(); // 1642711079387\r\n        this.completado = false;\r\n        this.creado = new Date();\r\n    }\r\n\r\n    imprimirClase() {\r\n        console.log(`${this.tarea} - ${this.id}`);\r\n    }\r\n};\n\n//# sourceURL=webpack://first-ToDo-List/./src/classes/todo.class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoList\": () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ \"./src/classes/index.js\");\n/* harmony import */ var _js_componentes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/componentes */ \"./src/js/componentes.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst todoList = new _classes__WEBPACK_IMPORTED_MODULE_1__.TodoList();\r\n//? contiene TodoList() y exporta todoList (hacia componentes)\r\n\r\ntodoList.todos.forEach(todo => (0,_js_componentes__WEBPACK_IMPORTED_MODULE_2__.crearTodoHtml)(todo));\r\n//? Optimización del código (opcional):\r\n//! todoList.todos.forEach(crearTodoHtml);\r\n/**\r\n *? Esto funcionará bien si es solo un argumento el que se requiere,\r\n *? de lo contrario, si el forEach retornara más de un argumento, se\r\n *? debe hacer de la forma anterior: */\r\n\r\nconsole.log('Todos:', todoList.todos);\r\n\n\n//# sourceURL=webpack://first-ToDo-List/./src/index.js?");

/***/ }),

/***/ "./src/js/componentes.js":
/*!*******************************!*\
  !*** ./src/js/componentes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearTodoHtml\": () => (/* binding */ crearTodoHtml)\n/* harmony export */ });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes */ \"./src/classes/index.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n// ToDo: Método para crear un ToDo como lo vimos en el Index.html\r\n\r\n\r\n\r\n\r\n//? Referencias al HTML:\r\nconst divTodoList = document.querySelector('.todo-list');\r\nconst txtInput = document.querySelector('.new-todo');\r\nconst btnBorrarCompletados = document.querySelector('.clear-completed');\r\nconst ulFiltros = document.querySelector('.filters');\r\nconst ancorFiltros = document.querySelectorAll('.filtro');\r\n\r\nconst crearTodoHtml = (todo) => {\r\n    const htmlTodo = `\r\n    <li class=\"${(todo.completado) ? 'completed' : ''}\" data-id=\"${todo.id}\">\r\n        <div class=\"view\">\r\n            <input class=\"toggle\" type=\"checkbox\" ${(todo.completado) ? 'checked' : ''}>\r\n            <label>${todo.tarea}</label>\r\n            <button class=\"destroy\"></button>\r\n        </div>\r\n        <input class=\"edit\" value=\"Create a TodoMVC template\">\r\n    </li>`;\r\n\r\n    //? crear el elemento HTML:\r\n    const div = document.createElement('div');\r\n    div.innerHTML = htmlTodo;\r\n\r\n    //? insertar el div:\r\n    divTodoList.append(div.firstElementChild);\r\n\r\n    return div.firstElementChild;\r\n};\r\n\r\n\r\n//? Eventos:\r\ntxtInput.addEventListener('keyup', (event) => {\r\n\r\n    if (event.keyCode === 13 && txtInput.value.length > 0) {\r\n\r\n        const nuevoTodo = new _classes__WEBPACK_IMPORTED_MODULE_0__.Todo(txtInput.value);\r\n        _index_js__WEBPACK_IMPORTED_MODULE_1__.todoList.nuevoTodo(nuevoTodo);\r\n        //? todoList -> nuevoTodo [por referencia...]\r\n        // console.log(todoList);\r\n\r\n        //? Llamamos al método crearTodoHtml de la faf (↑) para agregarlo al HTML, pasándole el nuevoTodo:\r\n        crearTodoHtml(nuevoTodo);\r\n\r\n        //? Limpiar el input:\r\n        txtInput.value = '';\r\n    }\r\n});\r\n\r\ndivTodoList.addEventListener('click', (event) => {\r\n    const nombreElemento = event.target.localName;\r\n    //? input, label o button\r\n    const todoElemento = event.target.parentElement.parentElement;\r\n    //? Obtenemos el elemento li completo.\r\n    const todoId = todoElemento.getAttribute('data-id');\r\n    //? Obtenemos el elemento id\r\n\r\n    //? Procedimiento: eliminar del arreglo tarea comletada:\r\n    if (nombreElemento.includes('input')) {\r\n        //? haciendo click en el check:\r\n        _index_js__WEBPACK_IMPORTED_MODULE_1__.todoList.marcarCompletado(todoId);\r\n\r\n        //? Eliminar el elemento HTML:\r\n        todoElemento.classList.toggle('completed');\r\n\r\n    } else if (nombreElemento.includes('button')) {\r\n        //? Eliminar o borrara el todo:\r\n\r\n        _index_js__WEBPACK_IMPORTED_MODULE_1__.todoList.eliminarTodo(todoId);\r\n        //? Elimina del arreglo.\r\n\r\n        divTodoList.removeChild(todoElemento);\r\n        //? ELimina del HTML.\r\n\r\n    }\r\n\r\n    // console.log(todoList);\r\n\r\n});\r\n\r\nbtnBorrarCompletados.addEventListener('click', () => {\r\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.todoList.eliminarCompletados();\r\n    //? Usa método eliminarCompletados() ->  todo-list.class.js\r\n\r\n    for (let i = divTodoList.children.length - 1; i >= 0; i--) {\r\n        //? Recorrer de atrás hacia adelante.\r\n\r\n        const elemento = divTodoList.children[i];\r\n        // console.log(elemento);\r\n\r\n        if (elemento.classList.contains('completed')) {\r\n            //? Si cintiene la clase completed.\r\n\r\n            divTodoList.removeChild(elemento);\r\n            //? Elimina el elemento.\r\n        }\r\n    }\r\n    // console.log(todoList);\r\n});\r\n\r\nulFiltros.addEventListener('click', (event) => {\r\n    // console.log(event.target.text);\r\n    const filtro = event.target.text;\r\n    if (!filtro) { return; }\r\n\r\n    /**\r\n     *? Subsana error del botón Todo - > queda seleccionado\r\n     *? Barremos los <a></a> eliminando la clase selected */\r\n    ancorFiltros.forEach(elem => elem.classList.remove('selected'));\r\n    // console.log(event.target);\r\n    event.target.classList.add('selected');\r\n\r\n    /**\r\n     *? Para realizar la selección, usaremos desde el CSS la\r\n     *? propiedad .hidden, aplicandola o no según el estado\r\n     *? Luego recorremos en un for los elementos que tenemo \r\n     *? en nuestro divTodoList*/\r\n    for (const elemento of divTodoList.children) {\r\n\r\n        //? Quitar la clase hidden al hacer click:\r\n        elemento.classList.remove('hidden');\r\n        //? ¿lemento contiene la clase completed?\r\n        const completado = elemento.classList.contains('completed');\r\n\r\n        switch (filtro) {\r\n            case 'Pendientes':\r\n                if (completado) {\r\n                    elemento.classList.add('hidden');\r\n                }\r\n                break;\r\n\r\n            case 'Completados':\r\n                if (!completado) {\r\n                    elemento.classList.add('hidden');\r\n                }\r\n                break;\r\n        }\r\n    }\r\n})\r\n\n\n//# sourceURL=webpack://first-ToDo-List/./src/js/componentes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;