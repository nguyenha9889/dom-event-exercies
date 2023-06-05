const arrButtons = document.getElementsByTagName("button");
const result = document.getElementById("result");

for (let i = 0; i < arrButtons; i++) {
      arrButtons[i].addEventListener("click", () => {
            result.innerText += arrButtons[i].value;
      });
      
}