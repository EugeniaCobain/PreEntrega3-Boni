<!--     
    1) En el live server, la redirección una vez que el log in resulta exitoso a la página graves.html se produce perfectamente. En github pages, no. Probé rutearlo de mil maneras y no hay caso con ninguna. De hecho, de la manera en que lo dejé (./html/graves.html) es de la manera en que funcionan todos los demás links en github. No logro descubrir cuál es el problema. Sin esto, no solo que no se puede acceder al resto del sitio, sino que el log in pierde la gracia. 
    Como el redireccionamiento no funciona en github pages, agregué en el menú de navegación de la página index un vínculo a la página graves para que te lleve a la página graves. De nuevo, con esto el log in no tiene sentido, pero no hay otra forma de acceder al resto del sitio. 

    2) Cuando se restan productos hasta llegar a cero y se vacía el carrito, creé el mensaje desde JS.
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


https://www.freecodecamp.org/espanol/news/metodos-window-de-javascript-explicados-con-ejemplos/
-->