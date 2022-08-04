const btnaddInput = document.querySelector(".btn-addTodo");
const form = document.querySelector(".form");
btnaddInput.addEventListener("click", function (e) {
  form.classList.add("slide");
});
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("container-input")) {
    form.classList.remove("slide");
  }
});
const submit = document.querySelector(".btn-task");
const taskList = document.querySelector(".container-tasklist");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  const input = document.querySelector(".input-task").value;
  if (!input) {
    alert("Please Input Todo list");
    return;
  }
  // DIV  TASK
  const task = document.createElement("div");
  task.classList.add("task");
  // DIV CONTENT
  const content = document.createElement("div");
  content.classList.add("content");
  //INPUT CONTENT
  const inputTaskContent = document.createElement("input");
  inputTaskContent.type = "text";
  inputTaskContent.classList.add("task-content");
  inputTaskContent.value = input;
  inputTaskContent.setAttribute("readonly", "readonly");

  // DIV ACTION
  const action = document.createElement("div");
  action.classList.add("action");
  // BUTTON EDIT
  const edit = document.createElement("button");
  edit.classList.add("edit");
  edit.innerHTML = "edit";

  // BUTTON DELETE
  const dlt = document.createElement("button");
  dlt.classList.add("delete");
  dlt.innerHTML = "delete";

  // MASUKAN VALUE DIV
  content.appendChild(inputTaskContent);
  action.appendChild(edit);
  action.appendChild(dlt);
  task.appendChild(content);
  task.appendChild(action);
  taskList.appendChild(task);
  console.log(input);

  // EDIT CLICK
  edit.addEventListener("click", function () {
    if (edit.innerHTML == "edit") {
      inputTaskContent.removeAttribute("readonly");
      inputTaskContent.focus();
      edit.innerText = "Save";
    } else {
      inputTaskContent.setAttribute("readonly", "readonly");
      edit.innerHTML = "edit";
    }
  });

  // DELETE CLICK
  dlt.addEventListener("click", function () {
    taskList.removeChild(task);
  });
});
