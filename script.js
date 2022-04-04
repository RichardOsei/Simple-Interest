function calculate()
{
    p = document.getElementById("p").value;
    y = document.getElementById("y").value;
    r = document.getElementById("r").value;
    year = new Date().getFullYear()+parseInt(y);
    result = document.getElementById("result");
    
    i= (p*y*r/100);
    result.innerHTML = "If you deposit " + p + 
                    " at an interest rate of " + r + "%"+
                    "</br>You will receive an amount of "+i+
                    "</br>in "+year+ " years";
}

var output = document.getElementById("demo");
output.innerHTML = r.value;     
r.oninput = function() {
  output.innerHTML = this.value;
}

