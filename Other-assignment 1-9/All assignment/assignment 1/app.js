        // let num1 = parseInt( prompt("enter nmber"));
        // let num2 = parseInt( prompt("enter nmber") );
        // let num3 = num1 + num2
        // console.log(num3)


        // document.getElementById("allNumber").innerHTML = num1 
        // document.getElementById("allNumber").innerHTML = num2 

        // console.log(num1)




        let getNumber01 = parseInt(prompt("Enter number 01"));
        let getNumber02 = parseInt(prompt("Enter number 02"));
        let getNumber03 = parseInt(prompt("Enter number 03"));
        let getNumber04 = parseInt(prompt("Enter number 04"));
        let getNumber05 = parseInt(prompt("Enter number 05"));
        let getNumber06 = parseInt(prompt("Enter number 06"));
        let getNumber07 = parseInt(prompt("Enter number 07"));
        let getNumber08 = parseInt(prompt("Enter number 08"));
        let getNumber09 = parseInt(prompt("Enter number 09"));
        let getNumber10 = parseInt(prompt("Enter number 10"));


        let arr = []
        arr.push(getNumber01, getNumber02, getNumber03, getNumber04, getNumber05, getNumber06, getNumber07, getNumber08, getNumber09, getNumber10)

        let arrNumber = document.getElementById("getValue").innerHTML = arr;
        console.log(arr);
        
        let totalAmoutn = (getNumber01 + getNumber02 + getNumber03 + getNumber04 + getNumber05 + getNumber06 + getNumber07 + getNumber08 + getNumber09 + getNumber10)
        let avgAmount = totalAmoutn / 10

        function sumOfValue() {
            document.getElementById("sumValue").innerHTML = totalAmoutn
        }
        
        
        function avgOfValue(){
          parseFloat(  document.getElementById("avgValue").innerHTML = avgAmount )
            
        }
        // function Sumofnumber() {

        // }


        // let totalNumber = (getNumber01, + getNumber02 )

        // var a = prompt("Enter first number");
        // var b = prompt("Enter second number");

        // alert(a  b); 