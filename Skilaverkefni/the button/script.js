const  input = document.getElementById("input_id").value;

  
var counter = document.getElementById("h1"),
  count = 0;

plus.onclick = function() {
    count += input.value;
    counter.innerHTML = count;
 
if(count === 35) {
  document.getElementById("h2").classList.remove("hidden");  
}

};
 
minus.onclick = function() {
  count -= 5;
  counter.innerHTML = count;

  if(count === -35) {
    document.getElementById("h2").classList.remove("hidden");  
  }
  };


