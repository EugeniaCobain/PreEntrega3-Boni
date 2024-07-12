/* CREACIÓN DE LAS TARJETAS DESDE MI ARCHIVO TIPO API PERSONAJES.JSON */
async function cargarPersonajesDesdeJSON() {
    try {
        const response = await fetch('../js/personajes.json'); // Ajusta la ruta según la ubicación del HTML y JSON
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        generarCards(data.artists, 'artists');
        generarCards(data.scientists, 'scientists');
        generarCards(data.thinkers, 'thinkers');
    } catch (error) {
        console.error('Error cargando desde JSON', error);
    }
}

function generarCards(personajes, idSeccion) {
    const seccion = document.getElementById(idSeccion);
    if (!seccion) {
        console.error(`Sección '${idSeccion}' no encontrada en el DOM`);
        return;
    }
    
    const container = document.createElement('div');
    container.className = 'grave__container';

    personajes.forEach(personaje => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="face front">
                <img loading="lazy" src="${personaje.imagen}" alt="${personaje.nombre}'s grave" title="${personaje.nombre}'s grave">
                <h3>${personaje.nombre}</h3>
            </div>
            <div class="face back">
                <h3>${personaje.nombre} ${personaje.fecha}</h3>
                <p>${personaje.descripcion}</p>
            </div>
        `;

        // Botón "Add to Cart" para las tarjetas
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-buy-container';
        buttonContainer.innerHTML = `
            <button class="btn buy-button" data-id="${personaje.id}" data-nombre="${personaje.nombre}" data-imagen="${personaje.imagen}" data-precio="${personaje.precio}">Add to cart $${personaje.precio}</button>
        `;

        cardContainer.appendChild(card);
        cardContainer.appendChild(buttonContainer);
        container.appendChild(cardContainer);
    });

    seccion.appendChild(container);
}

// Llamada a la función para inicializar la carga de datos desde JSON y generar las tarjetas
cargarPersonajesDesdeJSON();

/* CARRITO DE COMPRAS */
document.addEventListener('DOMContentLoaded', () => {
    const abrirCarritoBtn = document.getElementById('abrir-carrito-btn');
    const carrito = document.getElementById('carrito');
    const cerrarBtn = document.getElementById('cerrar-btn');
    const carritoProductos = document.getElementById('lista-productos');
    const comprarBtn = document.getElementById('comprar-btn');
    const vaciarBtn = document.getElementById('vaciar-btn');
    const carritoVaciado = document.getElementById('carrito-vaciado');
    const compraExitosa = document.getElementById('compra-exitosa');
    const carritoSinProd = document.getElementById('carrito-vacio');
    const mensajeEliminacion = document.getElementById('mensaje-eliminacion');

    // Mostrar carrito
    abrirCarritoBtn.addEventListener('click', () => {
        carrito.classList.toggle('show');
    });

    // Cerrar carrito
    cerrarBtn.addEventListener('click', () => {
        carrito.classList.remove('show');
    });

    // Función para agregar un producto al carrito
    function agregarProductoAlCarrito(producto) {
        const listaProductos = JSON.parse(localStorage.getItem('carrito')) || [];
        const productoExistente = listaProductos.find(item => item.id === producto.id);
        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            producto.cantidad = 1;
            listaProductos.push(producto);
        }
        localStorage.setItem('carrito', JSON.stringify(listaProductos));
        mostrarCarrito();
    }

    // Función para mostrar el carrito en pantalla y crear los elementos HTML para mostrar las imágenes en sus cards
    function mostrarCarrito() {
        const listaProductos = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoProductos.innerHTML = '';

        listaProductos.forEach(item => {
            const productoCarrito = document.createElement('div');
            productoCarrito.className = 'producto-carrito';
            productoCarrito.innerHTML = `
                <img src="${item.imagen}" class="imagenCarrito" alt="${item.nombre}">
                <div class="info">
                    <span><strong>${item.nombre}</strong></span>
                    <span><strong>Unit price:</strong> $${item.precio}</span>
                    <div class="button-container">
                        <button class="decrementar-cantidad" data-id="${item.id}">-</button>
                        <span class="quantity"><strong>Quantity:</strong> ${item.cantidad}</span>
                        <button class="incrementar-cantidad" data-id="${item.id}">+</button>
                    </div>
                    <span><strong>Total price: $${item.precio * item.cantidad}</strong></span>
                </div>
            `;
            carritoProductos.appendChild(productoCarrito);
        });

        // Mostrar mensaje cuando se quitan todos los productos del carrito
        if (listaProductos.length === 0) {
            const mensajeCarritoVacio = document.createElement('p');
            mensajeCarritoVacio.textContent = 'No products in the cart';
            mensajeCarritoVacio.classList.add('mensaje-carrito-vacio');
            carritoProductos.appendChild(mensajeCarritoVacio);
            setTimeout(() => {
                mensajeCarritoVacio.remove();
            }, 1500);
        }
        mostrarTotal();
    }

    // Función para mostrar el total de la compra
    function mostrarTotal() {
        const listaProductos = JSON.parse(localStorage.getItem('carrito')) || [];
        const totalElement = document.getElementById('total-amount');
        const total = listaProductos.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
        totalElement.textContent = total.toFixed(2);
    }

    // Función para vaciar el carrito
    function vaciarCarrito() {
        localStorage.removeItem('carrito');
        mostrarCarrito();
        carritoVaciado.style.display = 'block';
        compraExitosa.style.display = 'none';
        setTimeout(() => {
            carritoVaciado.style.display = 'none';
        }, 1500);
    }

    // Función para realizar la compra
    function realizarCompra() {
        const listaProductos = JSON.parse(localStorage.getItem('carrito')) || [];
        const carritoVacio = listaProductos.length === 0;
        if (carritoVacio) {
            carritoSinProd.style.display = 'block';
            setTimeout(() => {
                carritoSinProd.style.display = 'none';
            }, 1500);
            return;
        }
        compraExitosa.style.display = 'block';
        setTimeout(() => {
            compraExitosa.style.display = 'none';
            vaciarCarrito();
        }, 1500);
    }

    // Función para incrementar la cantidad de un producto en el carrito 
    function incrementarCantidad(id) {
        const listaProductos = JSON.parse(localStorage.getItem('carrito')) || [];
        const producto = listaProductos.find(item => item.id === id);
        if (producto) {
            producto.cantidad++;
            localStorage.setItem('carrito', JSON.stringify(listaProductos));
            mostrarCarrito();
        }
    }

    // Función para decrementar la cantidad de un producto en el carrito CON MENSAJE DESDE HTML
    function decrementarCantidad(id) {
        const listaProductos = JSON.parse(localStorage.getItem('carrito')) || [];
        const producto = listaProductos.find(item => item.id === id);
        if (producto) {
            if (producto.cantidad > 1) {
                producto.cantidad--;
            } else {
                listaProductos.splice(listaProductos.indexOf(producto), 1);
                mostrarMensajeEliminacion(producto.nombre); // Mostrar mensaje de eliminación
            }
            localStorage.setItem('carrito', JSON.stringify(listaProductos));
            mostrarCarrito();
        }
    }

    // Función para mostrar mensaje de eliminación de cada producto 
    function mostrarMensajeEliminacion(nombreProducto) {
        mensajeEliminacion.textContent = `You removed ${nombreProducto}'s grave picture from the cart`;
        mensajeEliminacion.style.display = 'block';
        setTimeout(() => {
            mensajeEliminacion.style.display = 'none';
        }, 1500);
    }
    //Agregar event listener a los botones de compra de los productos
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('buy-button')) {
            const button = event.target;
            const id = button.dataset.id;
            const nombre = button.dataset.nombre;
            const imagen = button.dataset.imagen;
            const precio = button.dataset.precio;
            const producto = {
                id: id,
                nombre: nombre,
                imagen: imagen,
                precio: parseFloat(precio)
            };
            agregarProductoAlCarrito(producto);
        }
    });

    // Event listener para los botones de incremento y decremento de cantidad
    carritoProductos.addEventListener('click', (event) => {
        const button = event.target;
        const id = button.dataset.id;
        if (button.classList.contains('incrementar-cantidad')) {
            incrementarCantidad(id);
        }
        if (button.classList.contains('decrementar-cantidad')) {
            decrementarCantidad(id);
        }
    });


    
    //Event listeners para botones de vaciar carrito y comprar
    vaciarBtn.addEventListener('click', vaciarCarrito);
    comprarBtn.addEventListener('click', realizarCompra);

    // Mostrar el carrito al cargar la página (si hay productos guardados)
    mostrarCarrito();
});


/* LOCASTORAGE */
// Función para guardar productos seleccionados en el carrito en el LS
function guardarCarritoEnLocalStorage() {
    // Capturo la cantidad elegida de cada producto 
    const cantidadElementos = document.querySelectorAll('.quantity');
    // Defino un array vacío para guardar los productos que se almacenan en el Local Storage.
    const carrito = [];
    // Si hay productos en el carrito, se guardan en el LS
    cantidadElementos.forEach((elemento, index) => {
        const cantidad = parseInt(elemento.textContent);
        if (cantidad > 0) {
            const idProducto = document.querySelectorAll('.buy-button')[index]?.getAttribute('data-id');
            carrito.push({ id: idProducto, cantidad: cantidad });
        }
    });

    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para cargar los productos guardados en el LS y actualizar el carrito de compras en el DOM
function cargarCarritoDesdeLocalStorage() {
    const carrito = JSON.parse(localStorage.getItem('carrito'));

    if (carrito) {
        carrito.forEach(item => {
            ['artists', 'scientists', 'thinkers'].forEach(categoria => {
                const personajes = document.getElementById(categoria).querySelectorAll('.buy-button');
                personajes.forEach(personaje => {
                    if (personaje.getAttribute('data-id') === item.id.toString()) {
                        const index = Array.from(personajes).indexOf(personaje);
                        const elementosCantidad = document.querySelectorAll('.quantity');
                        if (elementosCantidad[index]) {
                            elementosCantidad[index].textContent = item.cantidad;
                        }
                    }
                });
            });
        });
        mostrarCarrito();
    }
}

/* BUSCADOR */
// Agrego addEventListener a la entrada de texto en el buscador para que ejecute la función buscar
document.getElementById('buscar').addEventListener('input', buscar);

// Función para buscar productos. Obtiene el término de búsqueda del campo de entrada, lo convierte en minúsculas y lo utiliza para filtrar las tarjetas de productos en la página.
function buscar() {
    const searchTerm = document.getElementById('buscar').value.trim().toLowerCase();
    const allCardContainers = document.querySelectorAll('.card-container');
    const sections = document.querySelectorAll('section[class$="__section"]');
    const wrapper = document.querySelector('.wrapGraves');
    const buttons = document.querySelector('.btn-group');
    let matchFound = false;

    /* Recorro todas las tarjetas y las muestro si hay coincidencia y oculto las demás */
    allCardContainers.forEach(cardContainer => {
        const card = cardContainer.querySelector('.card');
        const productName = card.querySelector('h3').textContent.trim().toLowerCase();
        
        if (productName.includes(searchTerm)) {
            cardContainer.style.display = 'flex';
            matchFound = true;
        } else {
            cardContainer.style.display = 'none';
        }
    });

    /* Muestro las secciones que contienen las cards encontradas y oculto las secciones que no coinciden con la búsqueda */
    sections.forEach(section => {
        const visibleCardsInSection = section.querySelectorAll('.card-container:not([style="display: none;"])');
        section.style.display = visibleCardsInSection.length > 0 ? 'block' : 'none';
    });

    /* Oculto el wrapper y los botones si se está realizando una búsqueda */
    if (searchTerm) {
        wrapper.style.display = 'none';
        buttons.style.display = 'none';
    } else {
        wrapper.style.display = 'flex';
        buttons.style.display = 'flex';
    }

    /* Mensaje si no hay coincidencia */
    const existingMessage = document.querySelector('.search-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    if (searchTerm && !matchFound) {
        const noMatchMessage = document.createElement('p');
        noMatchMessage.textContent = `No matches found for "${searchTerm}"`;
        noMatchMessage.className = 'search-message';
        const mainElement = document.querySelector('main');
        mainElement.appendChild(noMatchMessage);
    }
}

// Evento de clic para agregar productos encontrados al carrito
function agregarEncontrado() {
    mostrarCarrito();
}






