var currentNumber = 0;

function stopButton(){

    if (currentNumber <= -10){
        document.getElementById("subtrair").disabled = true;
        document.getElementById("adicionar").disabled = false;
    } 

    if (currentNumber >= 10){
        document.getElementById("subtrair").disabled = false;
        document.getElementById("adicionar").disabled = true;
    }
}


function color(){

    if (currentNumber < 0){
        document.getElementById("currentNumber").style.color = "red";

    }else{
        document.getElementById("currentNumber").style.color = "green";
    }
}


function increment() {

    currentNumber = currentNumber + 1;
    document.getElementById("currentNumber").innerHTML = currentNumber;

    color();
    stopButton();
}


function decrement() {

    currentNumber = currentNumber - 1;
    document.getElementById("currentNumber").innerHTML = currentNumber;

    color();
    stopButton();
}

