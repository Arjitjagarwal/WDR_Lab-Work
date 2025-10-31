let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    const span = document.createElement("span");
    span.textContent = task.text;
    span.ondblclick = () => editTask(index);
    span.style.flex = "1";
    span.style.cursor = "pointer";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✓";
    completeBtn.onclick = () => toggleComplete(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.onclick = () => removeTask(index);

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = "";
    renderTasks();
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const newTask = prompt("Edit task:", tasks[index].text);
  if (newTask !== null && newTask.trim() !== "") {
    tasks[index].text = newTask.trim();
    renderTasks();
  }
}

function filterTasks() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const listItems = document.querySelectorAll("#taskList li");

  listItems.forEach(li => {
    const taskText = li.querySelector("span").textContent.toLowerCase();
    li.style.display = taskText.includes(searchInput) ? "flex" : "none";
  });
}

function clearAllTasks() {
  if (confirm("Are you sure you want to clear all tasks?")) {
    tasks = [];
    renderTasks();
  }
}

function updateDateTime() {
  const now = new Date();
  document.getElementById("datetime").textContent = now.toLocaleString();
}

window.onload = () => {
  renderTasks();
  updateDateTime();
  setInterval(updateDateTime, 60000);
};