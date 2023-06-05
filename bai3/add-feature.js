let inputItem = document.getElementById("new_item");
const btnAdd = document.getElementById("btn_add");
const listItem = document.querySelector("ul");

btnAdd.addEventListener("click", () => {
      if (inputItem.value != "" && inputItem.value != null) {
            inputItem.style.backgroundColor = "white";
            const newItem = document.createElement("li");
            newItem.innerHTML = inputItem.value;
            listItem.appendChild(newItem);
            inputItem.value = "";
      } else {
            inputItem.style.backgroundColor = "yellow";
      }
})