const counter = document.getElementById("h1");
let count = 0;


function getInputValue() {
    return parseInt(document.getElementById("input_id").value) || 0; 
}


function getLimitValue() {
    return parseInt(document.getElementById("limit_id").value) || 0; 
}


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


function saveValues() {
    localStorage.setItem('inputValue', document.getElementById("input_id").value);
    localStorage.setItem('limitValue', document.getElementById("limit_id").value);
}


loadValues();

document.getElementById("plus").onclick = function() {
    count += getInputValue(); 
    counter.innerHTML = count;
   
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