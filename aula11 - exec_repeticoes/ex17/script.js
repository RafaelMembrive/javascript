function calcular() {
    var numero = Number(document.getElementById("numero").value)
    var caixaTexto = document.getElementById("caixaTexto")

    caixaTexto.innerHTML = ""

    for( var n = 1; n <= 10; n++){
        caixaTexto.innerHTML += `${numero} x ${n} = ${numero * n}\n`
    }
}