function calcular() {
    //declaração de variaveis
    var inicio = window.document.getElementsById(valorInicio).value
    var fim = window.document.getElementsById(valorFim).value
    var passo = window.document.getElementsById(valorPasso).value
    var resultado = window.document.getElementsById(resultado).value

    for(var inicio; inicio <= fim; inicio + passo) {
        resultado.innerHTML = `${inicio}`
    }
}