const arrNumbers = document.getElementsByClassName("number");
const arrOperators = document.getElementsByClassName("operator");
const btnCalculate = document.getElementById("calculate");
const result = document.getElementById("result");
const btnReset = document.getElementById("reset");
result.innerText = "0";
function display(val) {
	if (result.innerText == "0") {
            result.innerText = "";
            result.innerText += val;
      } else result.innerText += val;
}

for (let i = 0; i < arrNumbers.length; i++) {
	arrNumbers.item(i).addEventListener("click", () => {
		display(arrNumbers.item(i).innerText);
	});
}

for (let i = 0; i < arrOperators.length; i++) {
	arrOperators.item(i).addEventListener("click", () => {
		display(arrOperators.item(i).innerText);
	});
}

btnCalculate.addEventListener("click", () => {
	let y = eval(result.innerText);
      console.log("text trong result ---> " + result.innerText);
	result.innerText = y;
});

btnReset.addEventListener("click", () => {
      result.innerText = "0";
})
