const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

function addTodo() {
  const task = todoInput.value.trim();
  if (task !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button onclick="removeTodo(this)">Remove</button>
    `;
    todoList.appendChild(li);
    todoInput.value = '';
  }
}

function removeTodo(btn) {
  const li = btn.parentElement;
  todoList.removeChild(li);
}

addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
});
