
function oddevenfinder()
{
    let number=prompt("Insert a number")
    if(number%2==0){
        document.getElementById("demo").innerHTML = ("The number is even");
    }else if (number=0){
        document.getElementById("demo").innerHTML = ("the number is invlalid");
    }else{
        document.getElementById("demo").innerHTML = ("The number is odd");
    }


}