"use strict";

const tasks = [
  /* Task shape
  {
    domElement: document.createElement("li"),
    text: "Buy milk",
    added: new Date(),
  }, 
  */
];

const formElement = document.getElementById("todo_form");
const inputElement = document.getElementById("todo_input");
const submitElement = document.getElementById("todo_submit");
const ulElement = document.getElementById("todo_list");
const outputElement = document.getElementById("todo_output");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSubmit();
});

// Function definitions

function handleSubmit(event) {
  console.log("Submit");
  addTask(inputElement.value, ulElement);
  updateOutput(outputElement);
}

function addTask(text, ulElement) {
  // Add to DOM
  const taskElement = createTaskElement(text);
  ulElement.prepend(taskElement);
  console.log(`Added task: ${text}`);

  // Add to tasks
  tasks.push({
    domElement: taskElement,
    text: text,
    added: new Date(),
  });

  console.log(tasks);
}
function createTaskElement(text) {
  const taskElement = document.createElement("li");

  const checkboxElement = document.createElement("input");
  checkboxElement.id = text;
  checkboxElement.type = "checkbox";
  // Update output when checkbox is clicked
  checkboxElement.addEventListener("change", () => updateOutput(outputElement));

  const textElement = document.createElement("label");
  textElement.htmlFor = text;
  textElement.textContent = text;

  taskElement.appendChild(checkboxElement);
  taskElement.appendChild(textElement);

  return taskElement;
}

function updateOutput(outputElement = outputElement, listElement = ulElement) {
  const listCheckedCount = listElement.querySelectorAll("input:checked").length;
  const listTotalCount = listElement.querySelectorAll(
    "input[type='checkbox']"
  ).length;
  outputElement.textContent = `${listCheckedCount} / ${listTotalCount} completed`;
}
