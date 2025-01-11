function verificar() {
    var idade = window.document.getElementById("idade").value
    var sexoMasc = window.document.getElementById("masc").checked
    var sexoFem = window.document.getElementById("fem").checked
    var paragrafo = window.document.getElementById("paragrafo")
 
    //Verificação de erro
    if (isNaN(idade) || idade < 0) {
        paragrafo.innerHTML = "Por favor, digite uma idade valida."
        return
    }

    //Determina o sexo
    var sexo = ""
    if (sexoMasc) {
        sexo = "masculino"
    } else {
        sexo = "feminino"
    }

    //Definição de faixa etaria e exibição de mensagens
    if (idade >= 0 && idade <= 12) {
        paragrafo.innerHTML = `Você tem ${idade} anos e seu sexo é ${sexo}, portanto é uma criança ainda.`
    } else if (idade > 12 && idade < 21) {
        paragrafo.innerHTML = `Você tem ${idade} anos e seu sexo é ${sexo}, portanto é um adolecente.`
    } else if (idade >= 21 && idade < 60) {
        paragrafo.innerHTML = `Você tem ${idade} anos e seu sexo é ${sexo}, portanto é um adulto.`
    } else {
        paragrafo.innerHTML = `Você tem ${idade} anos e seu sexo é ${sexo}, portanto é um idoso.`
    }
}