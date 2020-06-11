
var boxElement = document.querySelector('.box');
//var titulo = document.createElement('h1');
//var textTitle = document.createTextNode('Título');
//titulo.appendChild(textTitle)
boxElement.style.height = "100px";
boxElement.style.width = "100px";
//boxElement.appendChild(titulo);

boxElement.style.color = '#fff';
boxElement.style.backgroundColor = "#000";
boxElement.style.marginBottom = "10px";

function mostraAlerta(){
    alert('Botão foi clicado');
}
var inputElement = document.getElementById('nome');
//console.log(inputElement);
//Sempre retorna um Array mesmo tendo apenas um no html
var tagName = document.getElementsByTagName('input')[0];
//console.log(tagName);
var className = document.getElementsByClassName('nome');
//console.log(className);
//var queryName = document.querySelector('div#app input');
var inputText = document.querySelector('.nome');


var btnElement = document.querySelector('button.botao')
btnElement.onclick = () => {
    var text = inputText.value;
    alert(text)
}

var linkElement = document.createElement('a');
linkElement.setAttribute('href', 'http://www.google.com.br')
linkElement.setAttribute('title', 'Site do Google')

var textelement = document.createTextNode('Acessar o Google');
linkElement.appendChild(textelement);

var containerElement = document.querySelector('#app')
//Adicionando atraves do javascript
containerElement.appendChild(linkElement)
//Removendo atraves do javascript
containerElement.removeChild(inputText)


