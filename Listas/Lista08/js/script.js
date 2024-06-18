let calculadora = document.getElementById('calculadora')
let resultado = document.getElementById('result')
let numeroDigitado = ''

for (let indiceNumero = 0; indiceNumero < 10; indiceNumero++) {
    let botao = document.createElement('button')
    botao.textContent = indiceNumero
    botao.value = indiceNumero
    botao.id = `btn-${indiceNumero}`

    if(indiceNumero % 2 == 0){
        botao.className = 'btn-par btn'
    }else {
        botao.className = 'btn-impar btn'
    }

    botao.addEventListener(`click`, (evento) =>{
        numeroDigitado += evento.target.value
        resultado.textContent = numeroDigitado
    })
    calculadora.appendChild(botao)
}
    function criarBotao(id, valor){
        let botao = document.createElement('button')
        botao.id = id
        botao.className = 'btn-calculo btn'
        botao.value = valor 
        botao.textContent = valor

        calculadora.appendChild(botao)
    }

    criarBotao('btn-ponto', '.')
    criarBotao('btn-soma', '+')
    criarBotao('btn-sub', '-')
    criarBotao('btn-mult', '*')
    criarBotao('btn-div', '/')
    criarBotao('btn-result', '=')

    document.getElementById('btn-ponto').addEventListener(`click`, (evento) =>{
        numeroDigitado += evento.target.value
        resultado.textContent = numeroDigitado
    })

    document.getElementById('btn-soma').addEventListener(`click`, (evento) =>{
        numeroDigitado += evento.target.value
        resultado.textContent = numeroDigitado
    })

    document.getElementById('btn-sub').addEventListener(`click`, (evento) =>{
        numeroDigitado += evento.target.value
        resultado.textContent = numeroDigitado
    })

    document.getElementById('btn-mult').addEventListener(`click`, (evento) =>{
        numeroDigitado += evento.target.value
        resultado.textContent = numeroDigitado
    })

    document.getElementById('btn-div').addEventListener(`click`, (evento) =>{
        numeroDigitado += evento.target.value
        resultado.textContent = numeroDigitado
    })

    document.getElementById('limpar').addEventListener(`click`, () =>{
        numeroDigitado = ''
        resultado.textContent = ''
    })

    document.getElementById('btn-result').addEventListener(`click`, () =>{
        resultado.textContent = eval(numeroDigitado)
        numeroDigitado = ''
    })
