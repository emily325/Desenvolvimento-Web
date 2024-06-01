var bancoDeDados= [
    {
        nome: "bolu de murangu",
        descricao: "Melhor bolo do mundo",
        preco: 10000,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "bolo de chocolate",
        descricao: "Bolo do tooop",
        preco: 100,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de cenoura com chocolate",
        descricao: "humm bolinho de cenoura",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    }
]
var conteudoPrincipal = document.getElementById('conteudo-principal')

for(var bancoDeDados of bancoDeDados){
    var conteudoProduto = document.createElement('div')
    conteudoProduto.className = "conteud o-produto"

    var imagem = document.createElement('img')
    imagem.src = produto.imagem
    conteudoProduto.appendChild(imagem)

    var nomeProduto = document.createElement('h2')
    nomeProduto.textContent = produto.nome
    conteudoProduto.appendChild(nomeProduto)

    var descricaoProduto = document.createElement('p')
    descricaoProduto.textContent = produto.descricao
    conteudoProduto.appendChild(descricaoProduto)

    var precoProduto = document.createElement('p')
    precoProduto.textContent = produto.preco
    conteudoProduto.appendChild(precoProduto)

    var botoes = document.createElement('div')
    botoes.className = "btn"

    var botaoComprar = document.createElement('button')
    botaoComprar.textContent = "comprar"
    botaoComprar.appendChild(botaoComprar)

    var botaoDetalhes = document.createElement('button')
    botaoDetalhes.textContent = "Detalhes"
    botoes.appendChild(botaoDetalhes)

    conteudoPrincipal.appendChild(conteudoProduto)
}