

function addition() {
    let a = document.getElementById("number1").value;
    let b = document.getElementById("number2").value;
    
    a = parseInt(a);
    b = parseInt(b);
        
    let c = (a + b);
    document.getElementById("data").innerHTML=c;
}



function substraction() {
    let a = document.getElementById("number1").value;
    let b = document.getElementById("number2").value;
    
    a = parseInt(a);
    b = parseInt(b);
        
    let c = (a - b);
    document.getElementById("data").innerHTML=c;
}

function multipication() {
    let a = document.getElementById("number1").value;
    let b = document.getElementById("number2").value;
    
    a = parseInt(a);
    b = parseInt(b);
        
    let c = (a * b);
    document.getElementById("data").innerHTML=c;
}

function devide() {
    let a = document.getElementById("number1").value;
    let b = document.getElementById("number2").value;
    
    a = parseInt(a);
    b = parseInt(b);
        
    let c = (a / b);
    document.getElementById("data").innerHTML=c;
}
