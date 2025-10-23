const list = document.querySelector(".tasks-yet");
const input = document.querySelector("input");
const addBtn = document.querySelector(".create-btn");
const buttons = document.querySelectorAll(".buttons button");

let content = [];
let type = "All";

let id = 1;

const ListItem = (item) => {
  return `
    <div class="item" data-id="${item.id}">
      <input class="checkbox" type="checkbox" ${item.isDone ? "checked" : ""} />
      <p>${item.text}</p>
      <button class="delete-btn">Delete</button>
    </div>
  `;
};

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return; // Prevent adding empty tasks

  content.push({
    id: id,
    text: text,
    isDone: false,
  });

  id++;
  input.value = ""; // Clear input after adding

  render();
});
  
buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.classList.remove("chosen");
    });

    btn.classList.add("chosen");

    if (i === 0) {
      type = "All";
    } else if (i === 1) {
      type = "Active";
    } else {
      type = "Completed";
    }

    render();
  });
});

const render = () => {
  const elements = content
    .filter((item) => {
      if (type === "All") return true;
      if (type === "Active") return item.isDone === false;
      return item.isDone === true;
    })
    .map((item) => ListItem(item))
    .join("");

  list.innerHTML = elements;

  addListeners();
};

const addListeners = () => {
  const deleteBtns = document.querySelectorAll(".delete-btn");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = Number(e.target.closest(".item").dataset.id);
      content = content.filter((item) => item.id !== id);
      render();
    });
  });

  const checkboxes = document.querySelectorAll(".checkbox");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
      const id = Number(e.target.closest(".item").dataset.id);
      const item = content.find((item) => item.id === id);
      if (item) {
        item.isDone = !item.isDone;
      }
      render();
    });
  });
};
