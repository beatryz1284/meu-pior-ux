
function continuarCadastro() {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;

    if (nome === "" || email === "" || idade === "") {

        alert("Erro! Operação aparentemente concluída, mas alguns campos podem estar vazios.");

        return false;
    }

    alert("Sucesso! Ou talvez não. Você será encaminhado para a próxima etapa.");

    window.location.href = "senha.html";

    return false;
}


function cancelar() {

    alert("Você clicou em CANCELAR. Tem certeza de que queria cancelar?");

}

