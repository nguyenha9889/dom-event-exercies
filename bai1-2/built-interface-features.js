// Xây dựng giao diện bằng js

const formSearch = document.createElement("form");
formSearch.action = "#";
formSearch.method = "get";
formSearch.enctype = "text/plain";

const divSearch = document.createElement("div");
divSearch.id = "divSearch";
formSearch.appendChild(divSearch);

const label = document.createElement("label");
label.innerText = "Nhập nội dung tìm kiếm";
label.for = "search";
divSearch.appendChild(label);

const inputSearch = document.createElement("input");
inputSearch.type = "text";
inputSearch.name = "search";
inputSearch.id = "search";
inputSearch.title = "Content Search";
inputSearch.style.margin = "10px";
divSearch.appendChild(inputSearch);

const showAdvance = document.createElement("a");
showAdvance.href = "#";
showAdvance.title = "Show or Hidden Advance Search";
showAdvance.innerText = "Ẩn tìm kiếm nâng cao";
divSearch.appendChild(showAdvance);

const selection = document.createElement("select");
selection.name = "list_advance_search_options";
selection.title = "List advance search options";
const option1 = document.createElement("option");
const option2 = document.createElement("option");
option1.value = "clothes";
option1.text = "Quần áo";
option2.value = "shoes";
option2.text = "Giày dép";
selection.appendChild(option1);
selection.appendChild(option2);
formSearch.appendChild(selection);

const btnSearch = document.createElement("button");
btnSearch.id = "btnSearch";
btnSearch.type = "submit";
btnSearch.innerText = "Tìm kiếm";
btnSearch.style.marginTop = "20px";
btnSearch.style.display = "block";
formSearch.appendChild(btnSearch);

const divBaiTap1 = document.getElementById("baitap1");
divBaiTap1.appendChild(formSearch);

// Xây dựng chức năng ẩn hiện tìm kiếm nâng cao
showAdvance.addEventListener("click", () => {
	if (
		showAdvance.innerText == "Ẩn tìm kiếm nâng cao" &&
		!(selection.style.visibility == "hidden")
	) {
		showAdvance.innerText = "Tìm kiếm nâng cao";
		selection.style.visibility = "hidden";
	} else {
		showAdvance.innerText = "Ẩn tìm kiếm nâng cao";
		selection.style.visibility = "visible";
	}
});
