window.addEventListener("load", () => {
  console.log("I'm Loading");
  const form = document.querySelector("#new-task-form");
  const addInput = document.querySelector("#new-task");
  const tasks = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!addInput.value) {
      return;
    }

    const newTask = document.createElement("div");
    newTask.classList.add("task");

    const newTaskInput = document.createElement("input");
    newTaskInput.type = "text";
    newTaskInput.setAttribute("readonly", "readonly");
    newTaskInput.value = addInput.value;

    newTask.appendChild(newTaskInput);

    const btnsDiv = document.createElement("div");
    btnsDiv.classList.add("btns");

    const editBtn = document.createElement("button");
    editBtn.setAttribute("id", "edit");
    editBtn.innerText = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "delete");
    deleteBtn.innerText = "Delete";

    btnsDiv.appendChild(editBtn);
    btnsDiv.appendChild(deleteBtn);
    newTask.appendChild(btnsDiv);

    tasks.appendChild(newTask);

    editBtn.addEventListener("click", () => {
      if (editBtn.innerText.toLocaleLowerCase() === "edit") {
        newTaskInput.removeAttribute("readonly");
        newTaskInput.focus();
        editBtn.innerText = "Save";
      } else {
        newTaskInput.setAttribute("readonly", "readonly");
        editBtn.innerText = "Edit";
      }
    });

    deleteBtn.addEventListener("click", () => {
      tasks.removeChild(newTask);
    });
    addInput.value = "";
  });
});
