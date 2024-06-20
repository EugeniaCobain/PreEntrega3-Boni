/* LOG OUT*/
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.log a');
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    if (currentUser) {
        const username = currentUser.username;
        // ReemplaZO el enlace "Log In" con "Log Out"
        navLinks.forEach(link => {
            if (link.textContent === 'Log In') {
                // Reemplazar el enlace "Log In" con "Log Out"
                link.textContent = 'Log Out';
                // Agrego evento de clic para cerrar sesión
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    // Elimino información de inicio de sesión del sessionStorage
                    sessionStorage.removeItem('currentUser');
                    // Muestro mensaje de deslogueo
                    showMessage(`You have logged out. See you soon, ${username}!`, true);
                    // Redirijo al usuario a la página de inicio de sesión en 2 segundos
                    setTimeout(() => {
                        window.location.href = "../index.html";
                    }, 1500);
                });
            }
        });
    }
});

// Función para mostrar mensajes al desloguarse (la misma que en login.js)
function showMessage(message, isSuccess = true) {
    const messageBox = document.getElementById('message');
    const messageText = document.getElementById('message-text');
    messageText.textContent = message;
    messageBox.className = 'message';
    messageBox.classList.add(isSuccess ? 'success' : 'error');
    messageBox.style.display = 'block';
}


/* BASE DE DATOS */
// Creo la la clase para los personajes
class Personaje {
    constructor(id, nombre, fecha, imagen, descripcion, precio) {
        this.id = id;
        this.nombre = nombre;
        this.fecha = fecha;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio;
    }
};

// Creo la clase para la base de datos de personajes
class BaseDeDatosPersonajes {
    constructor() {
        this.artists = [];
        this.scientists = [];
        this.thinkers = [];
        this.precio = [];
        this.idCounter = 1; // Inicializo un contador para generar IDs únicos
    }
    // Método para agregar un personaje a la base de datos
    agregarPersonaje(categoria, personaje) {

        // Asigno un ID único al personaje
        personaje.id = this.idCounter++;
        // Añado los personajes a cada categoría
        if (categoria === 'artists') {
            this.artists.push(personaje);
        } else if (categoria === 'scientists') {
            this.scientists.push(personaje);
        } else if (categoria === 'thinkers') {
            this.thinkers.push(personaje);
        } else {
            console.error('Categoría de personaje no válida');
        }
    }
}

// Creo la instancia de BaseDeDatosPersonajes, que va a ser mi objeto que funciona como mi "base de datos"
const baseDeDatos = new BaseDeDatosPersonajes();

// Instancio personajes y los agrego a la base de datos
baseDeDatos.agregarPersonaje('artists', new Personaje(null, "Albrecht Dürer", "(1471–1528)", "../assets/imgs/graves/artists/duerer.jpg", "German Renaissance artist, printmaker, and theorist, stands as a towering figure in art history. Known for his masterful engravings and paintings, such as 'Knight, Death and the Devil' and 'Melencolia I', Dürer's work exemplifies technical precision and innovation. His studies in Italy profoundly influenced his style, blending Northern European tradition with Italian Renaissance ideas. Beyond his art, Dürer's theoretical writings impacted the development of printmaking. His lasting legacy marks him as a key figure bridging medieval and modern artistic sensibilities.", 1000));
baseDeDatos.agregarPersonaje('artists', new Personaje(null, "Gian Lorenzo Bernini", "(1598–1680)", "../assets/imgs/graves/artists/bernini.jpg", "Italian sculptor, architect, and painter of the Baroque period. Renowned for his dynamic and emotive sculptures, Bernini played a pivotal role in shaping the visual language of Baroque art. Notable works include the breathtaking marble sculptures in Rome's Galleria Borghese and his architectural contributions to St. Peter's Basilica, including the iconic baldachin over the high altar. A virtuoso in fusing emotion with artistic expression, Bernini's legacy endures as a key figure in Baroque art and architecture.", 1500));
baseDeDatos.agregarPersonaje('artists', new Personaje(null, "Bertolt Brecht ", "(1898-1956)", "../assets/imgs/graves/artists/brecht.jpg", "German playwright and poet, Bertolt Brecht, born on February 10, 1898, in Augsburg, was a trailblazer in 20th-century theatre. Renowned for his epic theatre style and sharp social critique, Brecht's works, including 'The Threepenny Opera' and 'Mother Courage and Her Children', have left an enduring impact. A visionary artist, his innovative approach to storytelling continues to influence theatre and film globally.", 2500));
baseDeDatos.agregarPersonaje('scientists', new Personaje(null, "Niels Bohr", "(1885–1962)", "../assets/imgs/graves/scientists/bohr.jpg", "Danish physicist, Nobel laureate, and pioneer of quantum theory. Revolutionized atomic understanding with his quantized energy level model. Received Nobel Prize in Physics (1922). Key contributor to Allied atomic bomb project during WWII. Founded Niels Bohr Institute in Copenhagen. Enduring legacy in 20th-century physics.", 1000));
baseDeDatos.agregarPersonaje('scientists', new Personaje(null,"Nicolaus Copernicus", "(1473-1543)", "../assets/imgs/graves/scientists/copernico.jpg", "Polish astronomer, founder of heliocentric model. Propelled Copernican Revolution. Devised theory placing Sun, not Earth, at the center of the universe. Published 'On the Revolutions of the Celestial Spheres' (1543). Ignited paradigm shift in astronomy. Enduring influence on modern cosmology.", 3000));
baseDeDatos.agregarPersonaje('scientists', new Personaje(null, "Carl Friedrich Gauss", "(1777-1855)", "../assets/imgs/graves/scientists/gauss.jpg", "German mathematician, astronomer, and physicist. Known as the 'Prince of Mathematicians', Gauss revolutionized the field with groundbreaking contributions to number theory, algebra, and physics. Born on April 30, 1777, in Brunswick, Germany, his genius reshaped the landscape of mathematics, leaving an enduring legacy that continues to inspire scholars worldwide.", 2800));
baseDeDatos.agregarPersonaje('thinkers', new Personaje(null, "Ludwig Feuerbach", "(1804-1872)", "../assets/imgs/graves/thinkers/feuerbach.jpg", "German philosopher and anthropologist known for his significant influence on the development of Western thought. A key figure in the Young Hegelians movement, Feuerbach is renowned for his critique of religious and metaphysical concepts, particularly in his seminal work 'The Essence of Christianity'. His ideas laid the groundwork for later philosophical movements, including existentialism and materialism, making him a pivotal figure in the 19th-century intellectual landscape.", 1050));
baseDeDatos.agregarPersonaje('thinkers', new Personaje(null, "Georg Wilhelm Friedrich Hegel", "(1770–1831)", "../assets/imgs/graves/thinkers/hegel.jpg", "German philosopher, pivotal figure in Western philosophy. Known for dialectical method and idealist philosophy. Influential works include 'Phenomenology of Spirit' and 'The Science of Logic'. Developed Hegelian dialectic, impacting political theory and aesthetics. Profound influence on existentialism, Marxism, and contemporary philosophy.", 1000));
baseDeDatos.agregarPersonaje('thinkers', new Personaje(null, "Søren Kierkegaard", "(1813-1855)", "../assets/imgs/graves/thinkers/kierkegaard.jpg", "Danish philosopher, theologian, and literary pioneer. A forerunner of existentialist thought, he delved into the depths of human experience, challenging societal norms and advocating for a passionate, individualized engagement with life and faith. Notable works include 'Fear and Trembling'. His emphasis on the subjective and the quest for authentic living remains influential in existentialist philosophy.", 2900));

/* FUNCIÓN PARA GENERAR LAS CARDS */
function generarCards(categoria, idSeccion) {
    const seccion = document.getElementById(idSeccion);
    const container = document.createElement('div');
    container.className = 'grave__container';
    
    baseDeDatos[categoria].forEach((personaje, index) => {
        //Contenedor de las cards
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';
        // Cards
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
        //Botón "add to cart" para las cards
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-buy-container';
        buttonContainer.innerHTML = `
            <button class="buy-button" data-id="${personaje.id}">Add to cart $${personaje.precio}</button>
        `;
        //Añado hijos a sus contendores padres
        cardContainer.appendChild(card);
        cardContainer.appendChild(buttonContainer);
    
        container.appendChild(cardContainer);
    });
    seccion.appendChild(container);
}

//Llamo a la función para que renderice en mi DOM
generarCards('artists', 'artists');
generarCards('scientists', 'scientists');
generarCards('thinkers', 'thinkers');


/* CARRITO DE COMPRAS */
//Espero a que el DOM esté completamente cargado antes de ejecutar el código
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

    //Mostrar carrito
    abrirCarritoBtn.addEventListener('click', () => {
        carrito.classList.add('show');
    });

    //Cerrar carrito
    cerrarBtn.addEventListener('click', () => {
        carrito.classList.remove('show');
    });

    // Función para agregar un producto al carrito
    function agregarProductoAlCarrito(producto) {
        const listaProductos = JSON.parse(localStorage.getItem('carrito')) || [];
        const productoExistente = listaProductos.find(item => item.id === producto.id);
        //Si el producto existe en el carrito, incremento su cantidad; si no, lo agrego
        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            producto.cantidad = 1;
            listaProductos.push(producto);
        }
        //Guardo los productos en el Local Storage
        localStorage.setItem('carrito', JSON.stringify(listaProductos));
        //Llamo a mostrarCarrito para actualizarlo en pantalla
        mostrarCarrito();
    }

    // Función para mostrar el carrito en pantalla y creo los elementos HTML para mostrar las imágenes en sus cards
    function mostrarCarrito() {
        const listaProductos = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoProductos.innerHTML = '';

        listaProductos.forEach(item => {
            const productoCarrito = document.createElement('div');
            productoCarrito.className = 'producto-carrito';
            productoCarrito.innerHTML = `
                <img src="${item.imagen}" class="imagenCarrito"  alt="${item.nombre}">
                <div class="info">
                    <span><strong>${item.nombre}</strong></span>
                    <span><strong>Unit price:</strong> ${item.precio}</span>
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

    //Mostrar mensaje cuando se quitan todos los productos del carrito
    if (listaProductos.length === 0) {
        const mensajeCarritoVacio = document.createElement('p');
        mensajeCarritoVacio.textContent = 'No products in the cart';
        mensajeCarritoVacio.classList.add('mensaje-carrito-vacio');
        carritoProductos.appendChild(mensajeCarritoVacio);
        setTimeout(() => {
            mensajeCarritoVacio.remove();
        }, 2000);
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
            // Mostrar mensaje de carrito vacío
            carritoSinProd.style.display = 'block';
            setTimeout(() => {
                carritoSinProd.style.display = 'none';
            }, 1500);
            return; 
        }
        // Si el carrito no está vacío, continúa con la compra
        compraExitosa.style.display = 'block';
        setTimeout(() => {
            compraExitosa.style.display = 'none';
            vaciarCarrito(); // Vaciar el carrito después de la compra
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

    // Función para decrementar la cantidad de un producto en el carrito
    /* function decrementarCantidad(id) {
        const listaProductos = JSON.parse(localStorage.getItem('carrito')) || [];
        const producto = listaProductos.find(item => item.id === id);
        if (producto) {
            if (producto.cantidad > 1) {
                producto.cantidad--;
            } else {
                listaProductos.splice(listaProductos.indexOf(producto), 1);
            }
            localStorage.setItem('carrito', JSON.stringify(listaProductos));
            mostrarCarrito();
        }
    } */

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

    // Evento de clic para agregar productos al carrito desde las cards
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('buy-button')) {
            const productoId = parseInt(e.target.dataset.id);
            // Busco el producto en todas las categorías disponibles de mi base de datos
            ['artists', 'scientists', 'thinkers'].forEach(categoria => {
                const producto = baseDeDatos[categoria].find(item => item.id === productoId);
                if (producto) {
                    agregarProductoAlCarrito(producto);
                }
            });
        } else if (e.target.classList.contains('incrementar-cantidad')) {
            const productoId = parseInt(e.target.dataset.id);
            incrementarCantidad(productoId);
        } else if (e.target.classList.contains('decrementar-cantidad')) {
            const productoId = parseInt(e.target.dataset.id);
            decrementarCantidad(productoId);
        }
    });

   // Agregar evento de clic al botón "Buy"
   comprarBtn.addEventListener('click', realizarCompra);

   // Agregar evento de clic al botón "Empty cart"
   vaciarBtn.addEventListener('click', vaciarCarrito);

   // Mostrar el carrito al cargar la página
   mostrarCarrito();
});


/* LOCASTORAGE */
//Función para guardar productos seleccionados en el carrito en el LS
function guardarCarritoEnLocalStorage() {
    //Capturo la cantidad elegida de cada producto 
    const cantidadElementos = document.querySelectorAll('.quantity');
    //Defino un array vacío para guardar los productos que se almacenan en el Local Storage.
    const carrito = [];
    //Si hay productos en el carrito, se guardan en el LS
    cantidadElementos.forEach((elemento, index) => {
        const cantidad = parseInt(elemento.textContent);
        if (cantidad > 0) {
            const idProducto = document.querySelectorAll('.buy-button')[index]?.getAttribute('data-id');
            carrito.push({ id: idProducto, cantidad: cantidad });
        }
    });

    localStorage.setItem('carrito', JSON.stringify(carrito));
}

//Función para cargar los productos guardados en el LS y actualizar el carrito de compras en el DOM
function cargarCarritoDesdeLocalStorage() {
    const carrito = JSON.parse(localStorage.getItem('carrito'));

    if (carrito) {
        carrito.forEach(item => {
            const producto = baseDeDatos.artists.find(p => p.id == item.id);
            const elementosCantidad = document.querySelectorAll('.quantity');
            const index = Array.from(document.querySelectorAll('.buy-button')).findIndex(boton => boton.getAttribute('data-id') == item.id);
            if (elementosCantidad[index]) {
                elementosCantidad[index].textContent = item.cantidad;
            }
        });
        mostrarCarrito();
    }
}


/* BUSCADOR */
//Agrego addEventListener a la entrada de texto en el buscador para que ejecute la función buscar
document.getElementById('buscar').addEventListener('input', buscar);

//Función para buscar productos maneja la búsqueda de productos. Obtiene el término de búsqueda del campo de entrada, lo convierte en minúsculas y lo utiliza para filtrar las tarjetas de productos en la página.
function buscar() {
    const searchTerm = document.getElementById('buscar').value.trim().toLowerCase();
    const allCardContainers = document.querySelectorAll('.card-container');

    const sections = document.querySelectorAll('section[class$="__section"]');
    let matchFound = false;

    /* Recorro todas las tarjetas y la smuestro si hay concidencia y oculto las demás */
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

    /* Mensaje si no hay coincidencia */
    const existingMessage = document.querySelector('.search-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    if (!matchFound) {
        const noMatchMessage = document.createElement('p');
        noMatchMessage.textContent = `No matches found for "${searchTerm}"`;
        noMatchMessage.className = 'search-message';
        document.body.appendChild(noMatchMessage);

        const mainElement = document.querySelector('main');
        mainElement.appendChild(noMatchMessage);
    }
}

// Evento de clic para agregar productos encontrados al carrito
function agregarEncontrado() {
    mostrarCarrito();
}

/* // Evento de entrada de texto
document.getElementById('buscar').addEventListener('input', handleSearch); */




