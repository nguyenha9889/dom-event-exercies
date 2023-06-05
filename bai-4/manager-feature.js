const studentId = document.getElementById("student_id");
const studentName = document.getElementById("student_name");
const studentAge = document.getElementById("age");
const studentPhone = document.getElementById("phone");
const studentEmail = document.getElementById("email");
const btnAdd = document.getElementById("btn_create");
const studentList = document.getElementById("student__list");
const checkInput = document.getElementById("result_checkInput");

btnAdd.addEventListener("click", () => {
	if (studentId.value.length != 6) {
		checkInput.innerText = "StudentId phải gồm 6 ký tự";
	} else if (studentName.value == null || studentName.value == "") {
		checkInput.innerText = "StudentName không được để trống";
	} else if (studentAge.value < 18) {
		checkInput.innerText = "Age phải có giá trị lớn hơn hoặc bằng 18";
	} else if (!studentPhone.value.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g)) {
		checkInput.innerText = "Phone phải là số điện thoại Việt Nam";
	} else if (
		!studentEmail.value.match(
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
		)
	) {
		checkInput.innerText = "Email phải có định dạng địa chỉ email";
	} else {
		let student = document.createElement("p");
		student.innerHTML =
			studentId.value +
			" - " +
			studentName.value +
			" - " +
			studentAge.value +
			" - " +
			studentPhone.value +
			" - " +
			studentEmail.value;
		studentList.appendChild(student);
	}
});
