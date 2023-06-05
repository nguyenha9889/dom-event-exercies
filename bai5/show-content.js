// Cách 1: Click button Show Content
const input = document.getElementById("input");
const result = document.getElementById("show-input");
const btnShow = document.querySelector("button");

btnShow.addEventListener("click", () => {
	if (input.value == null || input.value == "") {
		alert("Input không được để trống");
	} else {
		result.innerText = input.value;
	}
});

// Cách 2: Sự kiện Change trong Input
input.addEventListener("change", () => {
      if (input.value == "") {
		alert("Input không được để trống");
	} else {
		result.innerText = input.value;
	}
})

// Cách 3: Nhấn Enter
input.addEventListener("keydown", (e) => {
      if (input.value != "" && e.key == "enter") {
            result.innerText = input.value;
      }
})