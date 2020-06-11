/*
Crie uma função que dado o objeto a seguir retorne o seguinte conteúdo

O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.

*/
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

const exercicio1 = `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}.`

console.log(exercicio1);

/*
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

*/

function pares(x, y) {
    for(x; x<=y;x++){
        if(x % 2 === 0){
            console.log(x)
        }
    }

}
pares(32, 51);

/*
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.

*/

function temHabilidade(skills) {
    return skills.indexOf("Javascript") !== -1
}
var skills = ["Javascript", "ReactJS", "React Native"];
var skills1 = [ "ReactJS", "React Native"];
console.log(temHabilidade(skills));
console.log(temHabilidade(skills1)); // true ou false

/*
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
*/

function experiencia(anos) {
    // De 0-1 ano: Iniciante
    // De 1-3 anos: Intermediário
    // De 3-6 anos: Avançado
    // De 7 acima: Jedi Master


        if (anos > 0 && anos <=1){

            console.log("Iniciante");

        }else

        if (anos > 1 && anos <= 3) {
                console.log( "Intermediário");

        }else

        if (anos > 3 && anos <= 6){
            console.log( "Avançado");

        } else
        if (anos >= 7){

            console.log( "Jedi Master");
        }else{
            console.log( "Escreva um número positivo")
        }


}

var anosEstudo = 3;
experiencia(anosEstudo);

/*

Dado o seguinte vetor de objetos:
var usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];
Escreva uma função que produza o seguinte resultado:
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

*/

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

usuarios.map(usuario => {
    console.log(`O ${usuario.nome} possui as habilidades: ${usuario.habilidades}`)
})