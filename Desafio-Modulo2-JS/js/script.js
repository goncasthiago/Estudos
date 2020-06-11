var nomes = ["Diego", "Gabriel", "Lucas"];
var botao = document.querySelector('.botao');
var tela=  document.querySelector('.quadrados');
var listaNomes = document.querySelector('.lista');

botao.style.marginBottom = "10px";

botao.onclick = () => {
    var quadrado = document.createElement('div')
    quadrado.style.height = "100px";
    quadrado.style.width = "100px";
    quadrado.style.backgroundColor = 'red';
    quadrado.style.marginBottom = "10px";
    quadrado.setAttribute('class', 'quadrado')
    quadrado.addEventListener('mouseover', changeColor);
    tela.appendChild(quadrado);

}


function changeColor(event){
    event.target.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function adicionar(){
    var inputText = document.querySelector('input[name = "nome"]');

    adicionaLista(inputText.value);
    inputText.value = '';
}



    var ulLista = document.createElement('ul');
    nomes.map(nome => {
        var lista = document.createElement('li')
        lista.innerText = nome;
        ulLista.appendChild(lista);
        listaNomes.appendChild(ulLista)

    })


function adicionaLista(nome){
    var novoNome = document.createElement('li');
    novoNome.innerText = nome;
    ulLista.appendChild(novoNome);
}


