/* ACORDEÓN */
document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
      header.addEventListener('click', function() {
        const item = header.parentElement;
        
        // Si el elemento está abierto, lo cerramos
        if (item.classList.contains('open')) {
          item.classList.remove('open');
        } else {
          // Cerramos todos los elementos abiertos
          document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('open'));
          // Abrimos el elemento actual
          item.classList.add('open');
        }
      });
    });
  });


  /* RELLENO AL ACORDEÓN AL ACORDEÓN */
  /* Declaro el Array data que tiene el país y los personajes que allí se encuentran */
  const data = [
    {
      country: "Argentina",
      people: [
        { name: "Carlos Gardel", link: "#bsas" }
      ]
    },
    {
      country: "Austria",
      people: [
        { name: "Ludwig Boltzmann", link: "#viena" },
        { name: "Ludwig van Beethoven", link: "#viena" },
        { name: "Johann Strauss", link: "#viena" }
      ]
    },
    {
      country: "Denmark",
      people: [
        { name: "Niels Bohr", link: "#copenhagen" },
        { name: "Søren Kierkegaard", link: "#copenhagen" }
      ]
    },
    {
      country: "France",
      people: [
        { name: "Marcel Proust", link: "#paris" }
      ]
    },
    {
      country: "Germany",
      people: [
        { name: "Theodor Adorno", link: "#frankfurt" },
        { name: "Bertolt Brecht", link: "#berlin" },
        { name: "Robert Bundsen", link: "#heidelberg" },
        { name: "Albrecht Dürer", link: "#nuernberg" },
        { name: "Carl Friedrich Gauss", link: "#goettingen" },
        { name: "G. W. F. Hegel", link: "#berlin" },
        { name: "David Hilbert", link: "#goettingen" },
        { name: "Gottfried Leibniz", link: "#hannover" },
        { name: "Johann Pachelbel", link: "#nuernberg" },
        { name: "Max Planck", link: "#goettingen" },
        { name: "Arthur Schopenhauer", link: "#frankfurt" },
        { name: "Karl Schwarzschild", link: "#frankfurt" },
        { name: "Max Weber", link: "#heidelberg" }
      ]
    },
    {
      country: "Italy",
      people: [
        { name: "Fra Angelico", link: "#rome" },
        { name: "Gian Lorenzo Bernini", link: "#rome" },
        { name: "Antonio Gramsci", link: "#rome" },
        { name: "John Keats", link: "#rome" }
      ]
    },
    {
      country: "Poland",
      people: [
        { name: "Nicolaus Copernicus", link: "#frombork" }
      ]
    }
  ];

  document.addEventListener("DOMContentLoaded", function() {
    const accordionContainer = document.getElementById('accordion-container');
  
    data.forEach(countryData => {
      // Creo elemento del acordeón
      const accordionItem = document.createElement('div');
      accordionItem.classList.add('accordion-item');
  
      // Creo el encabezado del acordeón
      const accordionHeader = document.createElement('div');
      accordionHeader.classList.add('accordion-header');
      accordionHeader.innerHTML = `
        <span class="accordion-icon"></span>
        <span class="accordion-title">${countryData.country}</span>
      `;
      accordionItem.appendChild(accordionHeader);
  
      // Creo el contenido del acordeón
      const accordionContent = document.createElement('div');
      accordionContent.classList.add('accordion-content');
  
      const ul = document.createElement('ul');
      countryData.people.forEach(person => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = person.link;
        a.textContent = person.name;
        li.appendChild(a);
        ul.appendChild(li);
      });
  
      accordionContent.appendChild(ul);
      accordionItem.appendChild(accordionContent);
      accordionContainer.appendChild(accordionItem);
    });
  
    // Agrego funcionalidad de apertura y cierre
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
      header.addEventListener('click', function() {
        const item = header.parentElement;
        
        // Si el elemento está abierto, lo cierro
        if (item.classList.contains('open')) {
          item.classList.remove('open');
        } else {
          // Cierro todos los elementos abiertos
          document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('open'));
          // Abro el elemento actual
          item.classList.add('open');
        }
      });
    });
  });









