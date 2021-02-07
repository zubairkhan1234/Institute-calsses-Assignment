function tablecalculation() {
    let user_Input = parseInt(document.getElementById("get-input").value)

    for (let i = 1; i <= 10; i++) {
       document.getElementById("table").innerHTML += (user_Input + " x " + i  + " = " + user_Input*i + "</br>" )
    }

    return false
}