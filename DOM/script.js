var button= document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() >0){
        createListElement();
    } 
}

function addListAfterKeypress(event) {
    if (inputLength() >0 && event.keyCode === 13){
        createListElement();
    } 
}

button.addEventListener("click", addListAfterClick);  // addListAfterClick and addListAfterKeypress are callback function.
// We are passing a reference to the function without running it.
// That is why, we do not have () after the function name, which is generally how the function is called.
input.addEventListener("keypress", addListAfterKeypress);