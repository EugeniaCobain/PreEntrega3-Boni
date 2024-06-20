/* // Array para simular una base de datos
let users = [];

// Variables de estado
let currentUser = null;

// Elementos del DOM
const loginContainer = document.getElementById('login-container');
const registerContainer = document.getElementById('register-container');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const navLogin = document.getElementById('nav-login');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');
//agregado
const messageBox = document.getElementById('message');


// Mostrar el formulario de registro
showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginContainer.style.display = 'none';
    registerContainer.style.display = 'block';
});

// Mostrar el formulario de login
showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    loginContainer.style.display = 'block';
    registerContainer.style.display = 'none';
});

// Mostrar mensajes en pantalla AGREGADO
function showMessage(message, isSuccess = true) {
    messageBox.textContent = message;
    messageBox.className = 'message';
    messageBox.classList.add(isSuccess ? 'success' : 'error');
    messageBox.style.display = 'block';
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 3000);
}

// Manejar el registro de nuevos usuarios
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    const userExists = users.some(user => user.username === newUsername);

    if (userExists) {
        showMessage('Username already exists', false);
    } else {
        users.push({ username: newUsername, password: newPassword });
        alert('Registration successful!');
        registerForm.reset();
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
    }
});

// Manejar el inicio de sesión
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        currentUser = user;
        alert(`Welcome, ${username}`);
        loginForm.reset();
        updateNav();
    } else {
        alert('Invalid username or password');
    }
});

// Actualizar la navegación después del login
function updateNav() {
    if (currentUser) {
        navLogin.innerHTML = '<a href="#" id="logout">Log Out</a>';
        document.getElementById('logout').addEventListener('click', (e) => {
            e.preventDefault();
            currentUser = null;
            alert('You have logged out');
            updateNav();
        });
    } else {
        navLogin.innerHTML = '<a href="#">Log In</a>';
        navLogin.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            loginContainer.style.display = 'block';
        });
    }
}

// Inicializar el estado de la navegación
updateNav(); */


// script.js

/* // Array para simular una base de datos
let users = [];

// Variables de estado
let currentUser = null;

// Elementos del DOM
const loginContainer = document.getElementById('login-container');
const registerContainer = document.getElementById('register-container');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const navLogin = document.getElementById('nav-login');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');
const messageBox = document.getElementById('message');

// Mostrar el formulario de registro
if (showRegister) {
    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    });
}

// Mostrar el formulario de login
if (showLogin) {
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
    });
}

// Mostrar mensajes en pantalla
function showMessage(message, isSuccess = true) {
    messageBox.textContent = message;
    messageBox.className = 'message';
    messageBox.classList.add(isSuccess ? 'success' : 'error');
    messageBox.style.display = 'block';
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 3000);
}

// Manejar el registro de nuevos usuarios
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        const userExists = users.some(user => user.username === newUsername);

        if (userExists) {
            showMessage('Username already exists', false);
        } else {
            users.push({ username: newUsername, password: newPassword });
            showMessage('Registration successful!', true);
            registerForm.reset();
            loginContainer.style.display = 'block';
            registerContainer.style.display = 'none';
        }
    });
}

// Manejar el inicio de sesión
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            currentUser = user;
            showMessage(`Welcome, ${username}`, true);
            loginForm.reset();
            updateNav();
        } else {
            showMessage('Invalid username or password', false);
        }
    });
}

// Actualizar la navegación después del login
function updateNav() {
    if (currentUser) {
        navLogin.innerHTML = '<a href="#" id="logout">Log Out</a>';
        document.getElementById('logout').addEventListener('click', (e) => {
            e.preventDefault();
            currentUser = null;
            showMessage('You have logged out', true);
            updateNav();
        });
    } else {
        navLogin.innerHTML = '<a href="#">Log In</a>';
        navLogin.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            loginContainer.style.display = 'block';
        });
    }
}

// Inicializar el estado de la navegación
updateNav(); */

// Elementos del DOM
const messageBox = document.getElementById('message');
const messageText = document.getElementById('message-text');
const closeMessageButton = document.getElementById('close-message');

// Función para mensajes en pantalla
function showMessage(message, isSuccess = true) {
    messageText.textContent = message;
    messageBox.className = 'message';
    //Experimento con perador ternario
    messageBox.classList.add(isSuccess ? 'success' : 'error');
    messageBox.style.display = 'block';
}

// Ocultar mensaje al hacer clic en el botón "Cerrar"
closeMessageButton.addEventListener('click', () => {
    messageBox.style.display = 'none';
});

// Obtener usuarios desde localStorage. Si no hay un array de usuarios en el LS, se iniciliza un array vacío
let users = JSON.parse(localStorage.getItem('users')) || [];

// Obtener usuario actual del LS
let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

// Log in y Registro
const loginContainer = document.getElementById('login-container');
const registerContainer = document.getElementById('register-container');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const navLogin = document.getElementById('nav-login');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');

// Mostrar el formulario de registro
if (showRegister) {
    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    });
}

// Mostrar el formulario de login
if (showLogin) {
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
    });
}

// Registro de nuevos usuarios
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        // Inicializo variable para indicar si el usuario ya existe
        let userExists = false;

        //Recorro con un FOR el array de usuarios para ver si el usuario ya existe
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === newUsername) {
                userExists = true; 
                break; 
            }
        }

        if (userExists) {
            //Si el usuario ya existe, mensaje rojo
            showMessage('Username already exists', false);
        } else {
             //Si el usuario no existe, lo agrega al array users, lo guardo en el LS y muestro mensaje verde
            users.push({ username: newUsername, password: newPassword });
            localStorage.setItem('users', JSON.stringify(users));
            showMessage('Registration successful!', true);
            //Vacío el form de registro, lo oculto y muestro el de log in
            registerForm.reset();
            loginContainer.style.display = 'block';
            registerContainer.style.display = 'none';
        }
    });
}

// Manejar el inicio de sesión
/* if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            currentUser = user;
            sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
            showMessage(`Welcome, ${username}`, true);
            loginForm.reset();
            updateNav();
            if (window.location.pathname === "/index.html") {
                setTimeout(() => {
                    window.location.href = "./html/graves.html";
                }, 2000); // Redirige a la página de graves después de 2 segundos si se está logueando desde index.html
            }
        } else {
            showMessage('Invalid username or password', false);
        }
    });
} */

// Inicio de sesión
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        //Capturo el username y password que ingresa el usuario
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        //Busco usuario existente en el array users y lo guardo en la variable user
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            currentUser = user;
            sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
            showMessage(`Welcome, ${username}`, true);
            loginForm.reset();
            updateNav();
            if (window.location.pathname === "/index.html") {
                setTimeout(() => {
                    if (currentUser) {
                        window.location.href = "html/graves.html";
                    }
                }, 2000); // Redirige a la página de graves después de 2 segundos si se está logueando desde index.html
            }
        } else {
            showMessage('Invalid username or password', false);
        }
    });
}

// Actualizar la navegación después del login
function updateNav() {
    if (currentUser) {
        const username = currentUser.username; // Guardamos el nombre de usuario
        navLogin.innerHTML = '<a class="navLog href="#" id="logout">Log Out</a>';
        document.getElementById('logout').addEventListener('click', (e) => {
            e.preventDefault();
            currentUser = null;
            sessionStorage.removeItem('currentUser');
            showMessage(`You have logged out. See you soon, ${username}!`, true); // Usamos el nombre de usuario guardado
            updateNav();
        });
    } else {
        navLogin.innerHTML = '<a class="navLog href="#">Log In</a>';
        navLogin.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            loginContainer.style.display = 'block';
        });
    }
}

// Llamada a la función updateNav
updateNav();








/* // Array para simular una base de datos
let users = JSON.parse(localStorage.getItem('users')) || [];

// Variables de estado
let currentUser = JSON.parse(localStorage.getItem('currentUser'));

// Elementos del DOM
const loginContainer = document.getElementById('login-container');
const registerContainer = document.getElementById('register-container');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const navLogin = document.getElementById('nav-login');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');
const messageBox = document.getElementById('message');

// Mostrar el formulario de registro
if (showRegister) {
    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    });
}

// Mostrar el formulario de login
if (showLogin) {
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
    });
}

// Mostrar mensajes en pantalla
function showMessage(message, isSuccess = true) {
    messageBox.textContent = message;
    messageBox.className = 'message';
    messageBox.classList.add(isSuccess ? 'success' : 'error');
    messageBox.style.display = 'block';
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 3000);
}

// Manejar el registro de nuevos usuarios
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        const userExists = users.some(user => user.username === newUsername);

        if (userExists) {
            showMessage('Username already exists', false);
        } else {
            users.push({ username: newUsername, password: newPassword });
            localStorage.setItem('users', JSON.stringify(users));
            showMessage('Registration successful!');
            registerForm.reset();
            loginContainer.style.display = 'block';
            registerContainer.style.display = 'none';
        }
    });
}

// Manejar el inicio de sesión
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            showMessage(`Welcome, ${username}`);
            loginForm.reset();
            updateNav();
        } else {
            showMessage('Invalid username or password', false);
        }
    });
}



// Actualizar la navegación después del login
function updateNav() {
    if (currentUser) {
        navLogin.innerHTML = '<a href="./html/login.html" id="logout">Log Out</a>';
        document.getElementById('logout').addEventListener('click', (e) => {
            e.preventDefault();
            currentUser = null;
            localStorage.removeItem('currentUser');
            showMessage('You have logged out');
            updateNav();
        });
    } else {
        navLogin.innerHTML = '<a href="./html/login.html">Log In</a>';
        navLogin.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            loginContainer.style.display = 'block';
        });
    }
}

// Verificar si el usuario está logueado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    if (!currentUser && !location.pathname.endsWith('login.html')) {
        showMessage('You must be logged in to access this page', false);
        setTimeout(() => {
            location.href = './html/login.html';
        }, 3000);
    }
    updateNav();
});
 */