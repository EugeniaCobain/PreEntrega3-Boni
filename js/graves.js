/* DOM */

// Creo la la clase para los personajes
class Personaje {
    constructor(nombre, fecha, imagen, descripcion) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}

// Creo la clase para la base de datos de personajes
class BaseDeDatosPersonajes {
    constructor() {
        this.artists = [];
        this.scientists = [];
        this.thinkers = [];
    }
    // Método para agregar un personaje a la base de datos
    agregarPersonaje(categoria, personaje) {
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
baseDeDatos.agregarPersonaje('artists', new Personaje("Albrecht Dürer", "(1471–1528)", "../assets/imgs/graves/artists/duerer.jpg", "German Renaissance artist, printmaker, and theorist, stands as a towering figure in art history. Known for his masterful engravings and paintings, such as 'Knight, Death and the Devil' and 'Melencolia I', Dürer's work exemplifies technical precision and innovation. His studies in Italy profoundly influenced his style, blending Northern European tradition with Italian Renaissance ideas. Beyond his art, Dürer's theoretical writings impacted the development of printmaking. His lasting legacy marks him as a key figure bridging medieval and modern artistic sensibilities."));
baseDeDatos.agregarPersonaje('artists', new Personaje("Gian Lorenzo Bernini", "(1598–1680)", "../assets/imgs/graves/artists/bernini.jpg", "Italian sculptor, architect, and painter of the Baroque period. Renowned for his dynamic and emotive sculptures, Bernini played a pivotal role in shaping the visual language of Baroque art. Notable works include the breathtaking marble sculptures in Rome's Galleria Borghese and his architectural contributions to St. Peter's Basilica, including the iconic baldachin over the high altar. A virtuoso in fusing emotion with artistic expression, Bernini's legacy endures as a key figure in Baroque art and architecture."));
baseDeDatos.agregarPersonaje('artists', new Personaje("Bertolt Brecht ", "(1898-1956)", "../assets/imgs/graves/artists/brecht.jpg", "German playwright and poet, Bertolt Brecht, born on February 10, 1898, in Augsburg, was a trailblazer in 20th-century theatre. Renowned for his epic theatre style and sharp social critique, Brecht's works, including 'The Threepenny Opera' and 'Mother Courage and Her Children', have left an enduring impact. A visionary artist, his innovative approach to storytelling continues to influence theatre and film globally."));
baseDeDatos.agregarPersonaje('scientists', new Personaje("Niels Bohr", "(1885–1962)", "../assets/imgs/graves/scientists/bohr.jpg", "Danish physicist, Nobel laureate, and pioneer of quantum theory. Revolutionized atomic understanding with his quantized energy level model. Received Nobel Prize in Physics (1922). Key contributor to Allied atomic bomb project during WWII. Founded Niels Bohr Institute in Copenhagen. Enduring legacy in 20th-century physics."));
baseDeDatos.agregarPersonaje('scientists', new Personaje("Carl Friedrich Gauss", "(1777-1855)", "../assets/imgs/graves/scientists/gauss.jpg", "German mathematician, astronomer, and physicist. Known as the 'Prince of Mathematicians', Gauss revolutionized the field with groundbreaking contributions to number theory, algebra, and physics. Born on April 30, 1777, in Brunswick, Germany, his genius reshaped the landscape of mathematics, leaving an enduring legacy that continues to inspire scholars worldwide."));
baseDeDatos.agregarPersonaje('scientists', new Personaje("Nicolaus Copernicus", "(1473-1543)", "../assets/imgs/graves/scientists/copernico.jpg", "Polish astronomer, founder of heliocentric model. Propelled Copernican Revolution. Devised theory placing Sun, not Earth, at the center of the universe. Published 'On the Revolutions of the Celestial Spheres' (1543). Ignited paradigm shift in astronomy. Enduring influence on modern cosmology."));
baseDeDatos.agregarPersonaje('thinkers', new Personaje("Theodor Adorno", "(1903-1969)", "../assets/imgs/graves/thinkers/adorno.jpg", "German philosopher, sociologist, and musicologist, renowned for his influential contributions to critical theory. As a key figure in the Frankfurt School, Adorno explored the intersections of culture, society, and aesthetics. His work delved into the impact of mass media and the culture industry on individual autonomy. A prolific writer and accomplished musician, Adorno's interdisciplinary approach continues to shape contemporary debates on the role of art and society."));
baseDeDatos.agregarPersonaje('thinkers', new Personaje("Ludwig Feuerbach", "(1804-1872)", "../assets/imgs/graves/thinkers/feuerbach.jpg", "German philosopher and anthropologist known for his significant influence on the development of Western thought. A key figure in the Young Hegelians movement, Feuerbach is renowned for his critique of religious and metaphysical concepts, particularly in his seminal work 'The Essence of Christianity'. His ideas laid the groundwork for later philosophical movements, including existentialism and materialism, making him a pivotal figure in the 19th-century intellectual landscape."));

//Función para crear las tarjetas donde se muestran los personajes
function generarCards(categoria, idSeccion) {
    const seccion = document.getElementById(idSeccion);
    const container = document.createElement('div');
    container.className = 'grave__container';
    
    baseDeDatos[categoria].forEach(personaje => {
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
            </div>`;
        
        container.appendChild(card);
    });
    
    seccion.appendChild(container);
}
/* function generarCards(categoria, idSeccion) {
    const seccion = document.getElementById(idSeccion);
    baseDeDatos[categoria].forEach(personaje => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="face front">
                <img loading="lazy" src="${personaje.imagen}" alt="${personaje.nombre}">
                <h3>${personaje.nombre}</h3>
            </div>
            <div class="face back">
                <h3>${personaje.nombre}(1770–1827)</h3>
                <p>${personaje.descripcion}</p>
             </div>`;  
        const boton = document.createElement('button');
        boton.textContent = 'Agregar al carrito';
        boton.addEventListener('click', function() {
            agregarAlCarrito(personaje.nombre);
        });
        card.appendChild(boton);
        
        seccion.appendChild(card);
    });
} */

/* HTML
<div class="card">
    <img src="[ruta de la imagen]" alt="[nombre del personaje]">
    <h3>[nombre del personaje]</h3>
    <p>[descripción del personaje]</p>
    <button>Agregar al carrito</button>
</div>
*/

//Llamo a la función para que renderice en mi DOM
generarCards('artists', 'artists');
generarCards('scientists', 'scientists');
generarCards('thinkers', 'thinkers');