// Variaveis
/*
var nome = "Adriano Parente";
var idade = 33;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";

//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
*/

// Dicionários

/*var lista = ["maça", "pêra", "uva"];
lista.push("laranja");
//lista.pop();
//console.log(lista.length); lista os elemtos
//console.log(lista.reverse()); lista reversa
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" | "));

var fruta = { nome: "maça", cor: "vermelha" };
console.log(fruta);
*/

// condicionais, loops

/*var idade = prompt("Qual é a sua idade:");
if (idade >= 18) {
  alert("Maior de idade");
} else {
  alert("Menor de idade");
}
*/

/*var count = 0;
while (count <= 5) {
  console.log(count);
  count = count + 1;
}
*/
/*
var count;
for (count = 0; count <= 5; count++) {
  alert(count);
}
*/
// DATA

/*var d = new Date();
alert(d);
*/

/*
function soma(n1, n2) {
  return n1 + n2;
}

function SetReplace(frase, nome, novo_nome) {
  return frase.replace(nome, novo_nome);
}
alert(SetReplace("Vai Japão", "Japão", "Brasil"));
alert(soma(5, 10));
*/

/*function validarIdade(idade) {
  var validar;
  if (idade >= 18) {
    validar = true;
  } else {
    validar = false;
  }
  return validar;
}

var idade = prompt("Qual é a sua idade?");
console.log(validarIdade(idade));
*/

function clicou() {
  document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}

function redirecionar() {
  window.open("https://www.figma.com/login");
}

function trocar(elemento) {
  //document.getElementById("mousemove").innerHTML =
  //"Obrigado por passar o mouse";
  elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
  elemento.innerHTML = "Passe o mouse aqui";
}
