// DISPLAY

let displayDiv = document.createElement("div");
document.getElementById("container-button").appendChild(displayDiv);

// DISPLAY NUMBER

let num = document.createElement("p");
let defaultNum = document.createTextNode("0");
num.appendChild(defaultNum);
displayDiv.appendChild(num);
num.classList.add("num");

//DIV button

let counterDiv = document.createElement("div");
counterDiv.classList.add("counterDiv");
displayDiv.after(counterDiv);

//PLUS button

let plusButton = document.createElement("button");
let plusText = document.createTextNode("+");
plusButton.appendChild(plusText);
counterDiv.appendChild(plusButton);

 //RESET button

let reset = document.createElement("button");
let resetText = document.createTextNode("reset");
reset.appendChild(resetText);
counterDiv.appendChild(reset);

//MINUS button

let minusButton = document.createElement("button");
let minusText = document.createTextNode("-");
minusButton.appendChild(minusText);
counterDiv.appendChild(minusButton);

//FUNCTION

let i=0;

plusButton.addEventListener("click", () => {
  i++;
  num.innerHTML = i;
});

minusButton.addEventListener("click", () => {
  i--;
  num.innerHTML =i;
});

reset.addEventListener("click", () => {
  i=0;
  num.innerHTML=i;
});
