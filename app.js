console.log("hello world");

const input = document.getElementsByTagName("input");
let todoList = document.getElementById("todo-list");
let deleteButtons = document.getElementsByClassName("delete");

const todoInput = input.todo;

let todos = Array.from(todoList.children);

const addTask = () => {
  let newTask = `<div onclick="event.preventDefault(); deleteTask(this);" class="todos"><h3 id=${todos.length} >${todoInput.value}</h3></div>`;
  todoList.innerHTML += newTask;

  todoInput.value = "";
};

console.log(todoList.children);

const deleteTask = (e) => {
  if (e.className.includes("completed")) {
    e.remove();
  }
  e.className += " completed";
};
