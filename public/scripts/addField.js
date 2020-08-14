document.querySelector("#add-time") // Procura o botão
.addEventListener('click', cloneField) // Ação para quando clicar no botão

// Executar uma ação
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // Node (nós) no JS se refere à estrutura do html

    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
    
    // Pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo, limpar o value
    fields.forEach(function(field) {
        // pega o field do momento e limpa o value dele
        field.value = ""
    })

    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}