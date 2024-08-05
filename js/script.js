const nome = document.querySelector("#nome");
const email = document.querySelector('#email');
const telefone = document.querySelector('#telefone');
const button = document.querySelector(".button");
const lista = document.querySelector(".lista");

button.addEventListener("click", (event) => {
    event.preventDefault();
    const inputNameValue = nome.value;
    const inputEmailValue = email.value;
    const inputTelefoneValue = telefone.value;

    if (inputNameValue === "" || inputEmailValue === "" || inputTelefoneValue === "") {
        alert("Digite corretamente as informações!");
        return;
    }

    const templateHTML = `
    <li class="conteudo">
        <div class="users">
            <div class="inf">
                <h1>Usuario: ${inputNameValue} </h1>
                <p>Email: ${inputEmailValue} </p>
                <p>Telefone: ${inputTelefoneValue}</p>
            </div>
            <div class="delete">
                <button class="button-delete">DELETAR</button>
            </div>
        </div>
    </li>`;
    
    lista.innerHTML += templateHTML;

    // Limpar os campos
    nome.value = "";
    email.value = "";
    telefone.value = "";
});

// Usar event delegation para lidar com a remoção dos itens
lista.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("button-delete")) {
        const itemToRemove = event.target.closest(".conteudo");
        if (itemToRemove) {
            itemToRemove.remove();
        }
    }
});
