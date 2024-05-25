var nomes = ['Miguel', 'Mateus', 'Monica'] // variavel composta(Array) 
// var idade = new Array

console.log(nomes)

nomes.push('Davi', 'fulano', 'ciclano')// adiciona elemento no array
console.log(nomes) 

console.log(nomes.length) //tamanho do array

nomes.pop() // por padrao remove o ultimo elemento do array
console.log(nomes)

nomes.reverse() // inverte o meu array
console.log(nomes)

nomes.shift() // por padrao remove o primeiro elemento do array
console.log(nomes)

nomes.sort() // ordena o  array
console.log(nomes)

nomes.push('fulano')
console.log(nomes)

nomes.reverse()
var posicacaoFulano = nomes.indexOf('fulano') // busca por indice o elemento do parametro
nomes.slice(posicacaoFulano, 1) // primeiro parametro é a posição do item a ser removido, o segundo parametro é a quantidade de elementos excluidos 
console.log(nomes)