"use strict";


// Button
let onSubmitOrderBtnClicked = document.getElementById("SubmitOrderBtn");
let topingsRow =document.getElementById("toppingsrow")
let ConeRadio = document.getElementById("inputConeRadio");
  let CupRadio = document.getElementById("inputCupRadio");
window.onload = init;

function init() {
  onSubmitOrderBtnClicked.onclick = onSubmitOrderButtonClick;
   ConeRadio.onclick = toggleToppingRowVisibility;
   CupRadio.onclick = toggleToppingRowVisibility;
};

function toggleToppingRowVisibility(){
  console.log("toggle")
}




function onSubmitOrderButtonClick() {

  let NumbersOfScoops = document.getElementById("inputNumOfScoops");
  let SprinklesCheckbox = document.getElementById("inputSprinklesCheckbox").checked;
  let HotFudgeCheckbox = document.getElementById("inputHotFudgeCheckbox").checked;
  let WhippedCreamCheckbox = document.getElementById("inputWhippedCreamCheckbox").checked;
  let ConeRadio = document.getElementById("inputConeRadio");
  let CupRadio = document.getElementById("inputCupRadio");
  let CherryCheckbox = document.getElementById("inputCherryCheckbox");
  
  
  let price;
  // Output
  let outputBasePrice = document.getElementById("outputBasePrice");
  let outputTax = document.getElementById("outputTax");
  let outputTotal = document.getElementById("outputTotal");

  if (NumbersOfScoops > 1) {
    price = 2.25 + ( NumberOfScoops - 1) * 1.25;
  }
  else if (NumbersOfScoops == 1) {
      price = 2.25;}

  



  let sprinkle = SprinklesCheckbox;
  //let hotFudge = HotFudgeCheckbox;
  //let whippedCream =WhippedCreamCheckbox;
  //let cherry =CherryCheckbox;
  //let cup = CupRadio;


  if (CupRadio) {
    if(SprinklesCheckbox.checked) {
     cup  += (.50 + price)
  }
  if (hotFudge) {
    cup += (1.25 + PriceBase)
  }
  if (whippedCream) {
    cup += (.25 + price)
  }
  if (cherry) {
    cup += (.25 + price)
  }

  let tax = 0.10 * price;
  let totalDue = price + tax;

  //display
outputBasePrice.innerHTML = price;
outputTax.innerHTML = tax;
outputTotal.innerHTML = totalDue;
}

}
