function aula01(){

    var valor = document.getElementById("volume").value;
    document.getElementById("info").innerHTML = valor;

}


function aula02(){
    var texto = document.getElementById("comentarios").value;
    var resto = 150 - texto.length;

    document.getElementById("info").innerHTML = `Restam ${resto} caracteres.`
}

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
