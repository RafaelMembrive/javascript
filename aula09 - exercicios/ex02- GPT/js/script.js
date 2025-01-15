function adicionarTarefa() {
    var tarefa = document.getElementById("tarefa").value
    var lista = document.getElementById("lista")

    //validação de ausencia de titulo
    if (tarefa === "") {
        alert("Digite um titulo para a tarefa.")
        return;
    }

    //cria um novo item na lista usando HTML direto
    lista.innerHTML += `
    <li>
        ${tarefa}
        <button onclick="concluirTarefa(this)">Concluir</button>
        <button onclick="removerTarefa(this)">Remover</button>
    </li>
    `

    //Limpa o campo de texto
    document.getElementById("tarefa").value = ""
}

function concluirTarefa(botao) {
    var item = botao.parentElement; // Encontra o <li> relacionado ao botão
    item.style.textDecoration = "line-through"; // Riscando o texto
    item.style.opacity = "0.6"; // Tornando mais claro
}

function removerTarefa(botao) {
    var item = botao.parentElement; // Encontra o <li> relacionado ao botão
    item.remove(); // Remove o item da lista
}