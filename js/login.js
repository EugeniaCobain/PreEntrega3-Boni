// Obtengo usuarios desde localStorage. Si no hay un array de usuarios en el LS, se inicializa un array vacío
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

// Formulario de registro
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

        // Verificar si el usuario ya existe
        let userExists = users.some(user => user.username === newUsername);

        if (userExists) {
            // Mostrar mensaje de error con SweetAlert si el usuario ya existe
            Swal.fire({
                icon: 'error',
                title: 'Username already exists!',
                text: 'Pick a new one!',
            });
        } else {
            // Agregar usuario al array y guardar en localStorage
            users.push({ username: newUsername, password: newPassword });
            localStorage.setItem('users', JSON.stringify(users));

            // Mostrar mensaje de éxito con SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Registration successful!',
                text: 'You can now login with your new account.',
            }).then(() => {
                // Vaciar el formulario, ocultar registro y mostrar login
                registerForm.reset();
                loginContainer.style.display = 'block';
                registerContainer.style.display = 'none';
            });
        }
    });
}

// Inicio de sesión
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verificar credenciales
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            // Iniciar sesión exitosa
            currentUser = user;
            sessionStorage.setItem('currentUser', JSON.stringify(currentUser));

            // Mostrar mensaje de bienvenida con SweetAlert
            Swal.fire({
                icon: 'success',
                title: `Welcome, ${username}!`,
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                loginForm.reset();
                updateNav();
                if (window.location.pathname === "/index.html") {
                    setTimeout(() => {
                        window.location.href = './html/home.html';
                    }, 1000); // Redirigir después de 2 segundos
                }
            });
        } else {
            // Mostrar mensaje de error con SweetAlert
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid username or password!',
            }).then(() => {
                loginForm.reset();
            });
        }
    });
}

// Actualizar navegación después del login
function updateNav() {
    if (currentUser) {
        const username = currentUser.username;
        navLogin.innerHTML = '<a class="navLog href="#" id="logout">Log Out</a>';
        document.getElementById('logout').addEventListener('click', (e) => {
            e.preventDefault();
            currentUser = null;
            sessionStorage.removeItem('currentUser');

            // Mostrar mensaje de despedida con SweetAlert
            Swal.fire({
                icon: 'success',
                title: `Goodbye, ${username}!`,
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                updateNav();
            });
        });
    } else {
        navLogin.innerHTML = '<a class="navLog href="#">Log In</a>';
        navLogin.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            loginContainer.style.display = 'block';
        });
    }
}

// Llamar a la función updateNav
updateNav();


