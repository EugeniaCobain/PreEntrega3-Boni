/* LOG OUT */
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.log a');
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    if (currentUser) {
        const username = currentUser.username;
        // Reemplazar el enlace "Log In" con "Log Out"
        navLinks.forEach(link => {
            if (link.textContent === 'Log In') {
                link.textContent = 'Log Out';
                // Agregar evento de clic para cerrar sesión con SweetAlert
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    // Eliminar información de inicio de sesión del sessionStorage
                    sessionStorage.removeItem('currentUser');
                    // Mostrar mensaje de deslogueo con SweetAlert
                    Swal.fire({
                        icon: 'success',
                        title: `See you soon, ${username}!`,
                        text: `You have logged out.`,
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(() => {
                        // Redirigir al usuario a la página de inicio de sesión en 2 segundos
                        window.location.href = "../index.html";
                    });
                });
            }
        });
    }
});



/* const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -25

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})
 */


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
        posicionActual = 3; // Aquí 3 es el número de imágenes menos uno
    }
    moverSlider(posicionActual);
});

// Evento click en flecha derecha
flechaDerecha.addEventListener('click', () => {
    if (posicionActual < 3) { // Aquí 3 es el número de imágenes menos uno
        posicionActual++;
    } else {
        posicionActual = 0;
    }
    moverSlider(posicionActual);
});


/* const imagenes = document.querySelectorAll(".distorsionable");

imagenes.forEach(imagen => {
    imagen.addEventListener('mouseover', () => {
        if (imagen.alt === "The Kiss of death") {
            imagen.style.transform = 'translateX(20px)'; // Mueve a la derecha
        } else if (imagen.alt === "Kant's grave") {
            imagen.style.transform = 'translateX(-20px)'; // Mueve a la izquierda
        }
    });

    imagen.addEventListener('mouseout', () => {
        imagen.style.transform = 'none'; // Restablece la posición original
    });
}); */
/* const imagenes = document.querySelectorAll(".distorsionable");

imagenes.forEach(imagen => {
    imagen.addEventListener('mouseover', () => {
        if (imagen.alt === "The Kiss of death") {
            imagen.style.transform = 'scale(1.1) rotate(5deg)'; // Aumenta de tamaño y rota
            imagen.style.filter = 'blur(2px)';
        } else if (imagen.alt === "Kant's grave") {
            imagen.style.transform = 'scale(1.1) rotate(-5deg)'; // Aumenta de tamaño y rota en sentido contrario
            imagen.style.filter = 'grayscale(100%)';
        }
    });

    imagen.addEventListener('mouseout', () => {
        imagen.style.transform = 'none'; // Restablece la posición original
        imagen.style.filter = 'none';    // Restablece el filtro original
    });
});
 */

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