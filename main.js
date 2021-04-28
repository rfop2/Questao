console.log("Oi Motorola");

function isPalindrome(number){
    let palindrome = number.toString();
    let result = true;

    //checa se eh palindrome
   	let low = 0;
   	let high = palindrome.length-1;
   	while(high > low){
   			if(palindrome[low++] != palindrome[high--]){
      		result = false;
      	}
   	}

    return result;
}

function reverse(arrayNumeros){
    arrayNumeros = arrayNumeros.toString();


    //reverte a ordem do numero
    let aux = "";
    for(let i = arrayNumeros.length-1; i>=0; i--){
        aux += arrayNumeros[i];
    }

    //retorna um valor int para somar depois
    aux = parseInt(aux);

    return aux;
}


function sumNumber(number){
    let soma = number;
    let interation = 0;
    let aux = 0;

    do {
        //reverte o numero
        aux = reverse(soma);

        //soma
        soma = soma + aux;
        interation++;

    } while (!isPalindrome(soma));

    return interation + " " + soma;

}

//testes
console.log(sumNumber(195));
console.log(sumNumber(265));
console.log(sumNumber(750));
console.log(sumNumber(70));
console.log(sumNumber(3));
console.log(sumNumber(345));
console.log(sumNumber(1205));
console.log(sumNumber(191));
console.log(sumNumber(293));