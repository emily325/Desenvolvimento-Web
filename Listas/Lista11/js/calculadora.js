let inputSalario = document.getElementById('salario')
let inputIr = document.getElementById('IR')
let botao = document.getElementById('calcular')
let inputSalarioLiquido = document.getElementById('salario-liquido')
let taxa = 0.15

botao.addEventListener('click', () => {
    let salario = Number(inputSalario.value)
    percentual = salario * taxa
    inputIr.value =  percentual
    inputSalarioLiquido.value = salario - percentual
})