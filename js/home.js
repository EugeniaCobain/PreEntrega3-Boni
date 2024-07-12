/* LOG OUT */
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.log a');
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    if (currentUser) {
        const username = currentUser.username;
        // Reemplazo el enlace "Log In" con "Log Out"
        navLinks.forEach(link => {
            if (link.textContent === 'Log In') {
                link.textContent = 'Log Out';
                // Agrego evento de clic para cerrar sesión con SweetAlert
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    // Elimino información de inicio de sesión del sessionStorage
                    sessionStorage.removeItem('currentUser');
                    // Muestro mensaje de deslogueo con SweetAlert
                    Swal.fire({
                        icon: 'success',
                        title: `See you soon, ${username}!`,
                        text: `You have logged out.`,
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(() => {
                        // Redirijo al usuario a la página de inicio de sesión en 2 segundos
                        window.location.href = "../index.html";
                    });
                });
            }
        });
    }
});

/* SLIDER */
const grande = document.querySelector('.grande');
const flechaIzquierda = document.querySelector('.flecha.izquierda');
const flechaDerecha = document.querySelector('.flecha.derecha');
let posicionActual = 0;

// Función para mover el slider a una posición específica
function moverSlider(posicion) {
    const anchoImagen = grande.clientWidth / 4; // Aquí 4 es el número de imágenes
    const desplazamiento = posicion * -anchoImagen;
    grande.style.transform = `translateX(${desplazamiento}px)`;
}

// Evento click en flecha izquierda
flechaIzquierda.addEventListener('click', () => {
    if (posicionActual > 0) {
        posicionActual--;
    } else {
        posicionActual = 3;
    }
    moverSlider(posicionActual);
});

// Evento click en flecha derecha
flechaDerecha.addEventListener('click', () => {
    if (posicionActual < 3) { 
        posicionActual++;
    } else {
        posicionActual = 0;
    }
    moverSlider(posicionActual);
});

/* ANIMACIÓN DE IMÁGENES */
const imagenes = document.querySelectorAll(".distorsionable");

imagenes.forEach(imagen => {
    imagen.addEventListener('mouseover', () => {
        if (imagen.alt === "The Kiss of death") {
            imagen.classList.add('skew-right');
        } else if (imagen.alt === "Kant's grave") {
            imagen.classList.add('skew-left');
        }
    });

    imagen.addEventListener('mouseout', () => {
        if (imagen.alt === "The Kiss of death") {
            imagen.classList.remove('skew-right');
        } else if (imagen.alt === "Kant's grave") {
            imagen.classList.remove('skew-left');
        }
    });
});