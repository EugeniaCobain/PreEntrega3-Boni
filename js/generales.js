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

/* MANEJO DEL MENÚ HAMBURGUESA */
const button = document.querySelector('.button');
const nav = document.querySelector('.nav');
const abrirhamb = document.querySelector('.abrirhamb');
const cerrarhamb = document.querySelector('.cerrarhamb');
const submenuItems = document.querySelectorAll('.nav-links .li');

cerrarhamb.style.display = 'none';
button.addEventListener('click', () => {
    nav.classList.toggle('activo');
    
    if (nav.classList.contains('activo')) {
        cerrarhamb.style.display = 'block';
        abrirhamb.style.display = 'none';
    } else {
        cerrarhamb.style.display = 'none';
        abrirhamb.style.display = 'block';
    }
});

submenuItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.stopPropagation();
        item.classList.toggle('activo');
        
        const submenu = item.querySelector('.submenu');
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
        } else {
            submenu.style.display = 'block';
        }
    });
});

/* SUBMENÚ DESPLEGABLE */
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos .arrow dentro de los elementos .li
    const arrows = document.querySelectorAll('.li.submenu-toggle .arrow');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', (event) => {
            event.preventDefault();

            const submenu = arrow.nextElementSibling;

            arrow.classList.toggle('active');

            if (arrow.classList.contains('active')) {
                arrow.textContent = '▲'; 
                submenu.style.display = 'block';
            } else {
                arrow.textContent = '▼'; 
                submenu.style.display = 'none';
            }
        });
    });
});
