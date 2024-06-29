let inputValorBruto = document.getElementById('valor-bruto')
let inputValorLiquido = document.getElementById('valor-liquido')
let botao = document.getElementById('btn-calcular')
let taxa = 200

//inputValorBruto.addEventListener('blur', () => {
 //   let valorBruto = Number(inputValorBruto.value)
// inputValorLiquido.value = valorBruto - taxa
//})

botao.addEventListener('click', () => {
    let valorBruto = Number(inputValorBruto.value)
    inputValorLiquido.value = valorBruto - taxa
})