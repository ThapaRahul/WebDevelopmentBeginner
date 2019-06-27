var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("delete");


for (var i=0; i<deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}

function removeParent(event){
	// event.target.removeEventListener("click", removeParent, false);
	event.target.parentNode.remove();
}

ul.onclick = function(event){
	event.target.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");

	btn.appendChild(document.createTextNode("Delete"));
	btn.onclick = removeParent;

	li.appendChild(document.createTextNode(input.value));
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

// function removeItem(event) {
// 	event.target.parentNode.remove();
// }

// function deleteButton(){

// }

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleListElement(event) {
	event.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleListElement);