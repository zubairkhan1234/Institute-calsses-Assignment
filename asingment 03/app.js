function submissionForm() {
    let age = document.getElementById("age").value
    let height = document.getElementById("height").value
    let nationality = document.getElementById("nationality").value
    let education = document.getElementById("education").value
    let result = document.getElementById("result")

    if ((age > 17 && age < 23 || education === "master" && age <= 28) && height >= 5.5 && nationality === "pakistan" || nationality === "Pakistan" ) {
        result.innerHTML= "You are Pass"
    }else {
        result.innerHTML = "you are fail"
    }

    return false

}





function armyForm() {
    let age1 = document.getElementById("age1").value
    let height1 = document.getElementById("height1").value
    let nationality1 = document.getElementById("nationality1").value
    let education1 = document.getElementById("education1").value
    let submit = document.getElementById("submit")


    if (nationality1 === "pakistan" && height1 >= 5.5) {
        if ((age1 >= 18 && age1 <= 22) || (age1 >= 18 && age1 <= 28 && education1 === "master")){
            submit.innerHTML = " congratulation"
        }else {
            submit.innerHTML = "Sorry you are not eligible"
        }
    } else {
        submit.innerHTML = "Sorry you are not eligible"
    }

    return false

}