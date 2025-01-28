function calcular() {
    //captando os dados
    var inicio = Number(document.getElementById("valorInicio").value)
    var fim = Number(document.getElementById("valorFim").value)
    var passo = Number(document.getElementById("valorPasso").value)
    var resultado = document.getElementById("resultado")

    if (isNaN(inicio)) {
        window.alert("Digite um numero na caixa de texto Inicio.")
    } else if (isNaN(fim)) {
        window.alert("Digite um numero na caixa de texto Fim.")
    } else if (isNaN(passo) || passo < 1) {
        window.alert("A caixa de texto Passo estava vazia ou com um numero menor que 1, estamos considerando 1 como complemento.")
        passo = 1
    }

    //Limpar o resultado sempre que clica no botao.
    resultado.innerHTML = "Contando: <br>"

    //logica do calculo  
    if (inicio < 0 && fim > inicio) {
        for (var x = inicio; x <= fim; x += passo){
            resultado.innerHTML += ` ${x} `
        }
    } else if (inicio > 0 && fim < inicio) {
        for (var x = inicio; x >= fim; x -= passo){
            resultado.innerHTML += ` ${x} `
        }
    } else {
        for (var x = inicio; x <= fim; x += passo){
            resultado.innerHTML += ` ${x} `
        }
    }
}
