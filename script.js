let currentDisplay = "0"; 
let resultDisplay = false; 

function appendToDisplay(value) {
  if (currentDisplay === "0" || resultDisplay) {
    currentDisplay = value; 
  } else {
    currentDisplay += value; 
  }
  resultDisplay = false; 
  updateDisplay();
}

function updateDisplay() {
  const displayElement = document.getElementById("output-current");
  displayElement.textContent = currentDisplay; 
}

function clearDisplay() {
  currentDisplay = "0";
  resultDisplay = false; 
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentDisplay);
    currentDisplay = result.toString(); 
    updateDisplay();
    resultDisplay = true; 
  } catch {
    currentDisplay = "Error"; 
    updateDisplay();
    resultDisplay = true;
  }
}


function deleteToDisplay() {
    currentDisplay = currentDisplay.substring(0, currentDisplay.length - 1) || "0";
    updateDisplay();
  }
