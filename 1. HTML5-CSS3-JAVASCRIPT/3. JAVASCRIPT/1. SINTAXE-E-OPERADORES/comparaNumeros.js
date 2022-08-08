
function comparaNumeros(n1,n2){
    const soma = n1 + n2;
    let msg1, msg2 = "";

    if (n1 === n2){
        msg1 = "são iguais";
    }else{
        msg1 = "não são iguais";
    }

    if (soma > 10 && soma < 20){
        msg2 = "maior que 10 e menor que 20";
    }else if (soma < 10){
        msg2 = "menor ou igual a 10";
    }else if (soma > 20){
        msg2 = "maior ou igual a 20";
    }

    return `Os números ${n1} e ${n2} ${msg1}. Sua soma é ${soma}, que é ${msg2}.`
}

console.log(comparaNumeros(15,2));

