console.log("Câmbio realizado com sucesso!");
let nomeDaTarefa = "Estudar JavaScript";
console.log("Tarefa: " + nomeDaTarefa);

function adicionarTarefa() {
    // 1. Seleciona o campo de input
    const input = document.getElementById("input-tarefa");

    // 2. Pega o texto que está dentro dele
    const textoDaTarefa = input.value;
    if (textoDaTarefa !== "") {
        // 3. Mostra o texto no console
        console.log("Nova tarefa:", textoDaTarefa);

        // 4. Cria um novo elemento <li>
        const novaTarefa = document.createElement("li");

        // 5. Coloca o texto do input dentro do <li>
        novaTarefa.textContent = textoDaTarefa;

        // 6. Seleciona a lista <ul>
        const lista = document.getElementById("lista-de-tarefas");

        // 7. Adiciona o novo <li> dentro da lista
        lista.appendChild(novaTarefa);
        input.value = "";
        input.focus();
    }else{
        alert("Texto vazio? Aí você me quebra!.");
        input.focus();
    }

   
}

const botao = document.getElementById("botao-adicionar");

botao.addEventListener("click", adicionarTarefa);