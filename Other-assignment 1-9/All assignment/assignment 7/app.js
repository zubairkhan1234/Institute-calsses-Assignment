function abc() {
    let a = document.getElementById("get-Number").value
    let fact = 1
        for (let i = a; i >= 1; i--)
        {
            fact = fact * i
        }
        document.getElementById("put-factorial").innerHTML = (fact)
        
        return false
    }