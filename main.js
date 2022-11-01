
// VALIDACION FORMULARIO

const form = document.querySelector('#formulario')
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('message');
const msjError = document.querySelector('.error');

form.addEventListener('submit', (e) => {
e.preventDefault();

  
if (nombre.value.trim() === "") {

msjError.textContent = 'Por favor, ingrese su nombre';

nombre.style.border = '2px solid red'
nombre.focus();
return false;
}

if (email.value.trim() === "") {

msjError.textContent = 'Email también'

email.style.border = '2px solid red'
email.focus();
return false;
} else {
nombre.style.border = "2px solid green";
msjError.textContent = '';

}

if (!emailIsValid(email.value.trim())) {

msjError.textContent = 'A este email le falta algo'
email.style.border = '2px solid red'
email.focus();
return false;
} else {
email.style.border = "2px solid green";
msjError.textContent = '';
}

if (mensaje.value === "") {
msjError.textContent = 'Al menos un Hola!'
message.style.border = '2px solid red'
mensaje.focus();
return false;
} else {
mensaje.style.border = "2px solid green";
msjError.textContent = '';

}

form.submit();
 
})

const emailIsValid = email => {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
