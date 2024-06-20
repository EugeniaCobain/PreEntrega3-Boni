<!--     
    1) Cuando se restan productos hasta llegar a cero y se vacía el carrito, creé el mensaje desde JS.
    Esta es la línea de código: if (listaProductos.length === 0) {
        const mensajeCarritoVacio = document.createElement('p');
        mensajeCarritoVacio.textContent = 'No products in the cart';
        mensajeCarritoVacio.classList.add('mensaje-carrito-vacio');
        carritoProductos.appendChild(mensajeCarritoVacio);
        setTimeout(() => {
            mensajeCarritoVacio.remove();
        }, 1000);
    }
        mostrarTotal();
    }

    Ahora bien, cuando resto solo un producto hasta cero, para que aparezca el mensaje de que se sac´+o TAL product del carrito, no pude hacerlo de igual modo. Tuve que  crear un div especial en HTML. No entiendo por qué pasa eso. Intenté crearlo desde la mimsa función decrementarCantidad, dentro y fuera del if y nada. Tuve crear una función aparte y sí o sí crear un div desde HTML. No sé qué puede ser
    
    MUCHAS GRACIAS!!!

-->