let counterValueEl = document.getElementById("counterValue");

function onDecrease() {
    let previousCounterValue = counterValueEl.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterValueEl.textContent = updatedCounterValue; 

    if (updatedCounterValue < 0) {
        counterValueEl.style.color = "red";
    }else if (updatedCounterValue > 0) {
        counterValueEl.style.color = "green";
    } else {
        counterValueEl.style.color = "black";
    }
}

function onIncrease() {
    let previousCounterValue = counterValueEl.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterValueEl.textContent = updatedCounterValue; 

    if (updatedCounterValue < 0) {
        counterValueEl.style.color = "red";
    }else if (updatedCounterValue > 0) {
        counterValueEl.style.color = "green";
    } else {
        counterValueEl.style.color = "black";
    }
}

function onReset() {
    counterValueEl.textContent = "0";
    counterValueEl.style.color = "black";
}

