const counter = document.getElementById("h1");
let count = 0;

// Function to get the input value
function getInputValue() {
    return parseInt(document.getElementById("input_id").value) || 0; 
}

// Function to get the limit value
function getLimitValue() {
    return parseInt(document.getElementById("limit_id").value) || 0; 
}

// Function to load values from localStorage
function loadValues() {
    const savedInput = localStorage.getItem('inputValue');
    const savedLimit = localStorage.getItem('limitValue');

    if (savedInput) {
        document.getElementById("input_id").value = savedInput;
    }
  
    if (savedLimit) {
        document.getElementById("limit_id").value = savedLimit;
    }
}

// Function to save values to localStorage
function saveValues() {
    localStorage.setItem('inputValue', document.getElementById("input_id").value);
    localStorage.setItem('limitValue', document.getElementById("limit_id").value);
}

// Load values when the page loads
loadValues();

document.getElementById("plus").onclick = function() {
    count += getInputValue(); // Get the input value
    counter.innerHTML = count;
    // Save new input value to localStorage
    saveValues();

    if(count >= getLimitValue()) {
        document.getElementById("h2").classList.remove("hidden");  
    }
};

document.getElementById("minus").onclick = function() {
    count -= getInputValue();
    counter.innerHTML = count;
   
    saveValues();

    if(count <= -getLimitValue()) {
        document.getElementById("h2").classList.remove("hidden");  
    }
};


document.getElementById("input_id").addEventListener('input', saveValues);
document.getElementById("limit_id").addEventListener('input', saveValues);