let count = 0
function leftbtns () {
    count--;
    if(count<0){
        count = 0
    }
let input = document.getElementById("field")
input.value = count
}

function rightbtns () {
    count++;
    
let input = document.getElementById("field")
input.value = count
}






