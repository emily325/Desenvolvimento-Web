function imprimirNome(nome, jaspian){
    console.log(nome)
    
}

function imprimirSobrenome(sobrenome){
    console.log(sobrenome)
}

imprimirNome('miguel',
    ()=> {
        console.log('Ribeiro')
    }, function (cb) {
        cb('teste')
    })
