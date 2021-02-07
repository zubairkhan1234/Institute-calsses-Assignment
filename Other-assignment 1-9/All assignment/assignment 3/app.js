
        let arr = [];
        let odd = [];
        let even = [];


        function abc() {
            const a = document.getElementById("userinput").value ;
            arr.push(a)
            document.getElementById("addnumber").innerHTML = arr;
            document.getElementById("userinput").value = "";

            return false
        }

        function arrangment() {
            for (i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    odd.push(arr[i])
                    document.getElementById("evennumber").innerHTML = odd;
                }
                else {
                    even.push(arr[i])
                    document.getElementById("oddnumber").innerHTML = even;

                }

            }

            return false
        }

        