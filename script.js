function atividade01(){
    var numero = [];
    let novoParagrafo01 = document.getElementById("resultado01");

    for (var i = 0; i < 2; i++) numero[i] = prompt("Informe um número: ");
    console.log(numero);
    novoParagrafo01.innerHTML = `Os números em ordem crescente são: ${numero.sort(function(a, b){return a-b})}`;
}

function atividade02 (){
    var altura = document.getElementById("altura").value;
    var genero = document.getElementById("genero").value;
    let novoParagrafo02 = document.getElementById("resultado02");

    if(
        altura == "" || 
		genero == 0

    ){

        novoParagrafo02.innerHTML = `Preencha todos os campos!`;
    }

    else if(
        genero == 1 
    ){
        novoParagrafo02.innerHTML = `O seu peso ideal é ${((62.1 * altura) - 44.7).toFixed(2)}kg.`;
    
    }
    
    else{
        novoParagrafo02.innerHTML= `O seu peso ideal é ${((72.7 * altura) - 58).toFixed(2)}kg.`;
    }

}

function atividade03(){
    var menorValor;
    var primeiraVez = true;
    let novoParagrafo03 = document.getElementById("resultado03");

    for (var i = 0; i < 3; i++){
        var resultado = prompt("Informe um número: ");

        if (primeiraVez){
            menorValor = resultado;
        }

        else if(menorValor > resultado){
            menorValor = resultado;
        }

        primeiraVez = false;
    }
    
    novoParagrafo03.innerHTML = `O menor número informado foi: ${menorValor}`;

}

function atividade04() {
    var num = document.getElementById("num").value;
    let paragrafo4 = document.getElementById("resultado04");

    if (num % 2 == 0) {
        paragrafo4.innerHTML = `Esse número é par!`
    
    }else if (num < 0) {
        paragrafo4.innerHTML = `O valor absoluto do número informado é: ${Math.abs(num)}`
    
    } else {
        paragrafo4.innerHTML = `Esse número é impar!`
    }
}

function atividade05() {
    var num = document.getElementById("num").value;

    if (num % 2 == 0 && num % 3 == 0) {
        alert("Esse número é divisivel por 2 e por 3.");
    } else {
        alert("Esse número não divisivel por 2 nem por 3.");
    }

    document.getElementById("num").value = "";
    document.getElementById("num").focus();
}

function atividade06() {
    var num = document.getElementById("num").value;
    let paragrafo6 = document.getElementById("resultado06");

    if (num % 7 == 0 ) {
        paragrafo6.innerHTML = `Esse número é divisivel 7.`;
    }

    else if(num % 2 == 0) {
        paragrafo6.innerHTML = `Esse número é divisivel por 2.`;
    }
    
    else {
        paragrafo6.innerHTML = `Esse número não divisivel por nenhum dos dois.`;
    }
}

function atividade07(){
    var dia;
    var numerosemana = +document.getElementById("numero").value;

    switch (numerosemana) {
        case 1:
            dia = "domingo";
        break;

        case 2:
            dia = "segunda-feira";
        break;
        
        case 3:
            dia = "terça-feira";
        break;

        case 4:
            dia = "quarta-feira";
        break;

        case 5:
            dia = "quinta-feira";
        break;

        case 6:
            dia = "sexta-feira";
        break;

        case 7:
            dia = "sábado";
    }

    document.getElementById("resultado07").innerHTML = `O dia da semana escolhido foi: ` + dia;
}

function atividade08(){
    var contador = 0;
    var resultadoContador = 0;
    let paragrafo8 = document.getElementById("resultado08");
    
    for (contador = 0; contador <= 20; contador+=2){
        if (contador % 2 == 0) {
            paragrafo8.innerHTML = `${resultadoContador += contador}, `; 
        }
        paragrafo8.innerHTML = `O resultado da operação é ${resultadoContador}`
    }
}


function atividade09(){
    var paragrafo9 = document.getElementById('resultado09');
    var multip='';
    var numlido = document.getElementById("numlido").value;

    
    for(var count = 1; count <= 10 ; count++)
    multip += numlido + " x " + count + " = " + numlido*count+"<br/>";
    paragrafo9.innerHTML = multip;
}


function atividade10(){
    var fatorial = +document.getElementById("fatorial10").value;
    var resultado = fatorial;
    var primeiroMultiplicador = fatorial -1;
    
    for (var i = primeiroMultiplicador; i > 1; i--){
        resultado *= i;

    }
    
    document.getElementById("resultado10").innerHTML = `O fatorial é: ${(resultado)}`;

}






























