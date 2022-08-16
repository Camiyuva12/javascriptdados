const formulario = document.querySelector("#formulario")

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault()

    let inputNome = document.querySelector("#nome")
    let inputEmail = document.querySelector("#email")

    let nombre = inputNome.value
    let email = inputEmail.value

    const alert = document.querySelector("#alert")
    const alertEmail = document.querySelector("#alertEmail")
    if(nombre == "") {
        alert.innerHTML = "este campo es obligatorio"
        alert.style = "color:red"
    }
    if (email == "") {
        alertEmail.innerHTML = "este campo es obligatorio"
        alertEmail.style = "color:red"
    }
    console.log (nombre)
    nombre == ""

})

// function validar_form_contato() {
//     var nome = formcontato.nome.value;
//     var email = formcontato.email.value;
//     var mensagem = formcontato.mensagem.value;
//     if(nome == ""){
//         alert('Campo nome é obrigatorio ');
//         formcontato.nome.focus();
//         return false;
//     }
//     if(email == ""){
//         alert('Campo email é obrigatorio');
//         formcontato.email.focus();
//         return false;
//     }
//     if(mensagem == ""){
//         alert('Campo mensagem é obrigatorio');
//         formcontato.mensagem.focus();
//         return false;
//     }
// }
