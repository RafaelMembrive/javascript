function calcular() {
    //captando os dados
    var inicio = Number(document.getElementById("valorInicio").value)
    var fim = Number(document.getElementById("valorFim").value)
    var passo = Number(document.getElementById("valorPasso").value)
    var resultado = document.getElementById("resultado")

    if (inicio < 1 || inicio == NaN) {
        window.alert("Digite um numero valido na caixa de texto Inicio.")
    } else if (fim < 1 || fim == NaN) {
        window.alert("Digite um numero valido na caixa de texto Fim.")
    } else if (passo == NaN || passo < 1) {
        window.alert("A caixa de texto Passo estava vazia, estamos considerando 1 como complemento.")
        passo = 1
    }

    resultado.innerHTML = ""

    for (var x = inicio; x <= fim; x += passo){
        resultado.innerHTML += ` ${x} `
    }
}