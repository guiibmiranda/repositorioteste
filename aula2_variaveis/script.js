// tipos primitivos

//boorlean
var vOuF = false;
console.log(typeof(vOuF));

//Number
var NumeroQualquer = 1;
console.log(typeof(NumeroQualquer));

//string
var nome = "Guilherme";
console.log(typeof(nome));

//function
var funcao = function() {}
console.log(typeof(funcao)); 

//como declarar
var variavel = "Guilherme";
console.log(variavel);

let variavel2 = "Guilherme";
console.log(variavel2);

const constante = "Guilherme"
console.log(constante);

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}

escopoLocal();

//comparacao
var comparacao = "0" == 0;
console.log(comparacao);

//comparacaidentica
var comparacaoIdentica = "0" === 0;
console.log(comparacaoIdentica);

//adicao
var adicao = 2 + 2;
console.log (adicao);

//divisaoInteira
var divisaoInteira = 5 % 2;
console.log (divisaoInteira);

//potenciacao
var potenciacao = 2 ** 3;
console.log (potenciacao);

