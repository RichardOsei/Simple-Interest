function calculate()
{
    p = document.getElementById("p").value;
    y = document.getElementById("y").value;
    r = document.getElementById("r").value;
    i= (p*y*r/100);
    year = new Date().getFullYear()+parseInt(y);
    result = document.getElementById("result");


    
    if(p <= 0){
      result.innerHTML = "Enter a positive number";
    }

    else if(p==""){
     result.innerHTML = "Enter a positive number";
    }
    else{
    return result.innerHTML = "If you deposit " + p + 
                    " at an interest rate of " + r + "%"+
                    "</br>You will receive an amount of "+i+
                    "</br>in "+year+ " years";
        }
}
output = document.getElementById("demo");
output.innerHTML = r.value;     
r.oninput = function() {
  output.innerHTML = this.value;
}

