// Elementos del DOM
const messageBox = document.getElementById('message');
const messageText = document.getElementById('message-text');
const closeMessageButton = document.getElementById('close-message');

// Función para mostrar mensajes en pantalla
function showMessage(message, isSuccess = true) {
    messageText.textContent = message;
    messageBox.className = 'message';
    //Experimento con perador ternario
    messageBox.classList.add(isSuccess ? 'success' : 'error');
    messageBox.style.display = 'block';
}

// Oculto mensajes al hacer clic en el botón "Cerrar"
closeMessageButton.addEventListener('click', () => {
    messageBox.style.display = 'none';
});

// Obtengo usuarios desde localStorage. Si no hay un array de usuarios en el LS, se iniciliza un array vacío
let users = JSON.parse(localStorage.getItem('users')) || [];

// Obtengo usuario actual del LS
let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

// Log in y Registro
const loginContainer = document.getElementById('login-container');
const registerContainer = document.getElementById('register-container');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const navLogin = document.getElementById('nav-login');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');

// Formulario de de registro
if (showRegister) {
    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    });
}

// Formulario de login
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
                        window.location.href = './html/graves.html';
                    }
                }, 2000); // Redirijo a la página "graves" después de 2 segundos
            }
        } else {
            showMessage('Invalid username or password', false);
            loginForm.reset();
        }
    });
}

// Actualizo la navegación después del login
function updateNav() {
    if (currentUser) {
        const username = currentUser.username;
        navLogin.innerHTML = '<a class="navLog href="#" id="logout">Log Out</a>';
        document.getElementById('logout').addEventListener('click', (e) => {
            e.preventDefault();
            currentUser = null;
            sessionStorage.removeItem('currentUser');
            showMessage(`You have logged out. See you soon, ${username}!`, true); 
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