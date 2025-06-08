function palindromHandler(){
    console.log("test")
    var userName = document.getElementById("userValue").value
    var result = document.getElementById("result")
    var addValue = ""
    var isSearch = false

    for(var i=userName.length-1; i>=0;i-- ){
         addValue = addValue + userName[i]
         if(addValue == userName){
            isSearch = true
            break
         }
    }

    if(isSearch){
        console.log("Palindrom")
        result.style.display = "block"
        result.innerHTML = "It is Palindrom"
         console.log(userValue="")
    }
    else{
        console.log("Not Palindrom")
        result.style.display = "block"
        result.innerHTML = "It is not Palindrom"
    }
}
