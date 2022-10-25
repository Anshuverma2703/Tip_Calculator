console.log("hellow");

const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tips");
const tipCustom = document.querySelector(".tip-custom");
const reset = document.querySelector(".reset");
const error = document.querySelector(".error")

reset.addEventListener("click", resetfun);

tips.forEach((val) => {
  val.addEventListener("click", handlerClick);
});

tipCustom.addEventListener("input", tipInputfun);

function tipInputfun() {
  tipvalue = parseFloat(tipCustom.value / 100);
  tips.forEach(function (val) {
    val.classList.remove("active-tips");
  });
  calculateTip();
}

function handlerClick(event) {
  tips.forEach(function (val) {
    val.classList.remove("active-tips");
    if (event.target.innerHTML == val.innerHTML) {
      val.classList.add("active-tips");
      tipvalue = parseFloat(val.innerHTML) / 100;
    }
  });
  console.log(tipvalue);
  calculateTip();
}

billInput.addEventListener("input", billInputfun);
peopleInput.addEventListener("input", peopleInputfun);

billInput.value = "0.0";
peopleInput.value = "1";
tipPerPerson.innerHTML = "₹" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "₹" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipvalue = 0.01;

function billInputfun() {
  billValue = parseFloat(billInput.value);
  console.log(billValue);
  calculateTip();
}
function peopleInputfun() {
  peopleValue = parseFloat(peopleInput.value);
  console.log(peopleValue);
  calculateTip();
  if(peopleValue<1){
    error.style.display = "flex"
    peopleInput.style.border ="thick solid red"
}
else{
    error.style.display = "none"
    peopleInput.style.border ="none"

  }
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipvalue) / peopleValue;
    let total = (billValue/ peopleValue) +(tipAmount);
    tipPerPerson.innerHTML = "₹" + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = "₹" + total.toFixed(2);
  }
}

function resetfun() {
  billInput.value = "0.0";
  peopleInput.value = "1";
  tipPerPerson.innerHTML = "₹" + (0.0).toFixed(2);
  totalPerPerson.innerHTML = "₹" + (0.0).toFixed(2);
  tipCustom.value = ""
}
