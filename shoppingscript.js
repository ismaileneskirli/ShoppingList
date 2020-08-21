var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var ready = document.getElementById("ready");

function inputLength() {
  return input.value.length;
}

function createListElement(ul, value) {
  let li = document.createElement("li");
  // add a span so we can toggle the class on it
  let s = document.createElement("span");
  s.textContent = value;
  li.appendChild(s);
  ul.appendChild(li);

  let button = document.createElement("button");
  button.className = "done";
  button.appendChild(document.createTextNode(" Done"));
  li.appendChild(button);

  input.value = "";
}

function doneClicked(event) {
  let classToToggle = "strike";
  console.log(event.target.previousSibling);
  event.target.previousSibling.classList.toggle(classToToggle, !event.target.previousSibling.classList.contains(classToToggle));
}


function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement(ul,input.value);
  }


}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement(ul,input.value);
  }
}


function refresh(event){

 let dones = document.getElementsByClassName("done");
var i;
for (i = 0; i < dones.length; i++) {
  dones[i].addEventListener("click", function(event) {
    doneClicked(event)
  }, false);
}

}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ready.addEventListener("click",refresh);






//button.addEventListener("click",doneClicked(event));


