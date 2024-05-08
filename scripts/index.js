window.onload = init;

function init() {
    const iceCreamConeRadio = document.getElementById("inputCons");
    const iceCreamCupRadio = document.getElementById("inputCup");
    const toppingsRow = document.getElementById("toppingsrow");

    iceCreamConeRadio.onclick = toggleToppingsRowVisibility;
    iceCreamCupRadio.onclick = toggleToppingsRowVisibility;
}

function toggleToppingsRowVisibility() {
    const toppingsRow = document.getElementById("toppingsrow");
    let shouldBeVisible = document.getElementById("inputCup").checked;

    if (shouldBeVisible) {
        toppingsRow.style.visibility = "visible";
    } else {
        toppingsRow.style.visibility = "hidden";
    }
    onSubmitOrderBtnClicked.onclick = displayOrderSummary;
  }



let onSubmitOrderBtnClicked = document.getElementById("SubmitOrderBtn");

function displayOrderSummary() {
    let numberOfScoops = parseInt(document.getElementById("inputNumOfScoop").value);
    let basePrice;
    let outputBasePrice = document.getElementById("outputBasePrice");
    let outputTax = document.getElementById("outputTax");
    let outputTotal = document.getElementById("outputTotal");

    if (numberOfScoops > 1) {
        basePrice = 2.25 + (numberOfScoops - 1) * 1.25;
    } else if (numberOfScoops === 1) {
        basePrice = 2.25;
    }

    if (document.getElementById("inputCup").checked) {
        if (document.getElementById("inputSprinklesCheckbox").checked) {
            basePrice += 0.5;
        }
        if (document.getElementById("inputHotFudgeCheckbox").checked) {
            basePrice += 1.25;
        }
        if (document.getElementById("inputWhippedCreamCheckbox").checked) {
            basePrice += 0.25;
        }
        if (document.getElementById("inputcherryCheckbox").checked) {
            basePrice += 0.25;
        }
    }

    let tax = 0.08 * basePrice;
    let totalDue = basePrice + tax;

    outputBasePrice.innerHTML = "$" + basePrice.toFixed(2);
    outputTax.innerHTML = "$" + tax.toFixed(2);
    outputTotal.innerHTML = "$" + totalDue.toFixed(2);
}
