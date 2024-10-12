let itemInput = document.querySelector("#itemInput");
let submitBtn = document.querySelector("#submitBtn");
let itemList = document.querySelector("#itemList");
let compList = document.querySelector("#compList");

let liEdit = null;
let editMode = false;

function addItem() {
  let li = document.createElement("li");
  li.classList.add("item");
  let label = document.createElement("label");
  label.innerHTML = `
      <input type="checkbox" />
      <span class="checkmark"></span>
  `;
  label.classList.add("custom-checkbox");
  label.querySelector("input").onchange = function () {
    checkFunction(li);
  };
  let p = document.createElement("p");
  p.textContent = itemInput.value;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");
  deleteBtn.onclick = function () {
    removeItem(li);
  };

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit");
  editBtn.onclick = function () {
    editItem(li);
  };

  li.append(label, p, editBtn, deleteBtn);
  itemList.append(li);
}
submitBtn.onclick = function () {
  if (itemInput.value != "") {
    if (editMode == false) {
      addItem();
    } else {
      liEdit.querySelector("p").textContent = itemInput.value;
      editMode = false;
      liEdit.classList.remove("focus");
      submitBtn.textContent = "Add Item";
      liEdit = null;
    }
    itemInput.value = "";
  }
};

function removeItem(item) {
  item.remove();
}
function editItem(item) {
  liEdit = item;
  itemInput.value = item.querySelector("p").textContent;
  editMode = true;
  submitBtn.textContent = "Edit Item";
  item.classList.add("focus");
}
function checkFunction(item) {
  if (item.querySelector("input").checked) {
    compList.append(item);
    item.classList.add("complete");
    console.log(item.querySelector("input").checked);
  } else {
    itemList.append(item);
    item.classList.remove("complete");
    console.log(item.querySelector("input").checked);
  }
}
