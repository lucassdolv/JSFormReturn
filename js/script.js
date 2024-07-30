const nome = document.querySelector("#nome");
const idade = document.querySelector('#idade');
const telefone = document.querySelector('#telefone');
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

button.addEventListener ("click", (event) =>{
    event.preventDefault()
    const inputNameValue = nome.value;
    const inputAgeValue = idade.value;
    const inputTelefoneValue = telefone.value;
    const templateHTML = `
    <li>
        <div class="users">
            <h1>Usuario: ${inputNameValue} </h1>
            <p>Idade: ${inputAgeValue} </p>
            <p>Telefone: ${inputTelefoneValue}</p>
        </div>
    </li>`;
    if (inputNameValue === "" || inputAgeValue === "" || inputTelefoneValue === ""){
        alert("Digite corretamente as informações!")
        return false
    }
    lista.innerHTML += templateHTML;
    nome.value = "";
    idade.value = "";
    telefone.value = "";

});