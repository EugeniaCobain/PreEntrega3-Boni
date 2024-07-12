import { tiposError, mensajesErrorForms } from "./customErrors.js";

const camposForm = document.querySelectorAll("[required]");

//Recorro los campos de los formularios y les agrego el evento "blur" para que cuando les saque el foco se ejecute la función verificarCampo y el evento "invalid" para que, cuando el campo contenga errores, prevenga el lanzamiento de carteles para que se muestren los que customicé
camposForm.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo));
    campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function verificarCampo(campo) {
    let mensaje = "";
    campo.setCustomValidity("");
    
    tiposError.forEach((error) => {
        if (campo.validity[error]) {
            mensaje = mensajesErrorForms[campo.name][error];
        }
    });

    const mensajeErrorForm = campo.nextElementSibling;
    const validarInputCheck = campo.checkValidity();

    if (!validarInputCheck) {
        mensajeErrorForm.textContent = mensaje;
        mensajeErrorForm.style.display = "block"; 
    } else {
        mensajeErrorForm.textContent = "";
        mensajeErrorForm.style.display = "none"; 
    }
}

/* ENVÍO DE FORM DE CONTACTO  */
const formContacto = document.getElementById('form_contacto');

if (formContacto) {
    formContacto.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const formData = {
            name: nombre,
            email: email,
            subject: subject,
            message: message
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            Swal.fire({
                title: 'Your message has been sent',
                text: "We'll get back at you soon!",
                icon: 'success',
                confirmButtonText: 'OK'
            });
        })
        .catch((error) => {
            console.error('Error:', error);
            Swal.fire({
                title: 'Oops!',
                text: 'There was an error sending your message',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
    });
}