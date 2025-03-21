

var button = document.getElementById("h1"),
  count = 0;

plus.onclick = function() {
    count += 5;
    button.innerHTML = count;
 
if(count === 35) {
  document.getElementById("h2").classList.remove("hidden");  
}

};
 
minus.onclick = function() {
  count -= 5;
  button.innerHTML = count;

  if(count === -35) {
    document.getElementById("h2").classList.remove("hidden");  
  }
  };


