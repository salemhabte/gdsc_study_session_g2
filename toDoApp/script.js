var editMode = false;
var editItem = null;


function addTodo() {
  var todoInput = document.getElementById("todoInput");
  var todoText = todoInput.value.trim();

  if (todoText === "") {
    return;
  }

  if (editMode) {
    editItem.firstChild.textContent = todoText;
    editMode = false;
    editItem = null;
  } else {
    var listItem = document.createElement("li");
    listItem.innerHTML = todoText;

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "deleteBtn";
    deleteButton.onclick = function() {
      deleteTodoItem(listItem);
    };

    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.className = "editBtn";
    editButton.onclick = function() {
      editTodoItem(listItem);
    };

    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);

    var todoList = document.getElementById("todoList");
    todoList.appendChild(listItem);
  }

  todoInput.value = "";
}


function deleteTodoItem(item) {
  var todoList = document.getElementById("todoList");
  todoList.removeChild(item);
}


function editTodoItem(item) {
  var todoInput = document.getElementById("todoInput");
  todoInput.value = item.firstChild.textContent;

  editMode = true;
  editItem = item;
}