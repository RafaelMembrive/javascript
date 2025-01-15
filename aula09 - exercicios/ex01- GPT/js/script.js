function verificar() {
    var horaSono = Number(window.document.getElementById("horaSono").value)
    var refeicao1 = window.document.getElementById("refeicao1")
    var refeicao2 = window.document.getElementById("refeicao2")
    var refeicao3 = window.document.getElementById("refeicao3")
    var refeicao4 = window.document.getElementById("refeicao4")
    var exercicio = Number(window.document.getElementById("exercicio").value)
    var resultado = window.document.getElementById("resultado")

    //verificação do sono
    if (horaSono > 8) {
        resultado.innerHTML = "Você está dormindo mais do que deveria.";
    } else if (horaSono >= 6) {
        resultado.innerHTML = `Parabéns, você conseguiu dormir ${horaSono} horas na noite passada. Você teve uma boa noite de sono.`;
    } else {
        resultado.innerHTML = `Se você dormiu apenas ${horaSono} horas na noite passada, deverá ter uma noite de sono mais longa, de no mínimo 6 a 8 horas.`;
    }

    //verificação das refeições

    if (refeicao1.checked) {
        resultado.innerHTML += "<br>Voce fez apenas uma refeição saudavel durante o dia. Isso nao é saudavel, o correto é no minimo 2 refeições saudaveis durante o dia."
    } else if (refeicao2.checked) {
        resultado.innerHTML += "<br>Voce fez apenas duas refeições durante o dia. Nao está bom mas é o minimo necessario."
    } else if (refeicao3.checked) {
        resultado.innerHTML += "<br>Voce fez tres refeições durante o dia. O ideal são quatro refeições, mas assim como voce está tambem está bom."
    } else{
        resultado.innerHTML += "<br>Parabens, voce fez as 4 refeições saudaveis durante o dia."
    }
    

    // verificação do exercicio

    if (isNaN(exercicio) || exercicio < 0) {
        resultado.innerHTML += "<br>Por favor, insira um valor válido para os minutos de exercício.";
    } else if (exercicio >= 60) {
        resultado.innerHTML += `<br>Parabens, voce esta tendo um otimo rendimento no seu treinamento.`
    } else if (exercicio >= 30) {
        resultado.innerHTML += "<br>Otimo, seu rendimento no seu treino está bom, mas ainda pode melhorar"
    } else if (exercicio >= 15) {
        resultado.innerHTML += "<br>OK, voce ainda pode melhorar bastante no seu treinamento, nao desista."
    } else {
        resultado.innerHTML += "<br>Voce deveria começar a praticar exercicios fisicos."
    }
}