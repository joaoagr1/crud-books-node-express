const produtos = [
    { nome: "caneta", qtde: 20, valor: 2.50 },
    { nome: "Caderno", qtde: 20, valor: 2.50 },
    { nome: "Tesoura", qtde: 20, valor: 2.50 },
    { nome: "Impressora", qtde: 20, valor: 2.50 },
    { nome: "Celular", qtde: 20, valor: 2.50 },
    { nome: "Tenis", qtde: 20, valor: 2.50 },

]


//percorrer o array de produtos e retornar um novo array
//com 3 produtos escolhidos de forma aleatoria
//e nao pode haver repetição de produtos

//includes


let numero = Math.floor(Math.random() * 100);

var produtosSorteados = [];

produtos.forEach((produto) => {

    var teste = Math.random();

    if (Math.round(teste) == 1 && produtosSorteados.length < 3 && !produtosSorteados.includes(produto)) {
        produtosSorteados.push(produto);
        console.log("entrou aqui?")
    }

})

console.log(produtosSorteados);
