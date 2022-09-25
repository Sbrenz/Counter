// DISPLAY
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const containerButton = document.createElement("div");
containerButton.id = "container-button"
container.appendChild(containerButton);

const displayDiv = document.createElement("div");
document.getElementById("container-button").appendChild(displayDiv);

// DISPLAY NUMBER

const num = document.createElement("p");
const defaultNum = document.createTextNode("0");
num.appendChild(defaultNum);
displayDiv.appendChild(num);
num.classList.add("num");

//DIV button

const counterDiv = document.createElement("div");
counterDiv.classList.add("counterDiv");
displayDiv.after(counterDiv);

//PLUS button

const plusButton = document.createElement("button");
const plusText = document.createTextNode("+");
plusButton.appendChild(plusText);
counterDiv.appendChild(plusButton);

 //RESET button

const reset = document.createElement("button");
const resetText = document.createTextNode("reset");
reset.appendChild(resetText);
counterDiv.appendChild(reset);

//MINUS button

const minusButton = document.createElement("button");
const minusText = document.createTextNode("-");
minusButton.appendChild(minusText);
counterDiv.appendChild(minusButton);

//EVENTs

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
