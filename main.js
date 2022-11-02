

// BUTTONS

const cssBtn = document.getElementById("css-btn");
const bcgColor = document.querySelector(".css");

cssBtn.addEventListener('click', () => {
    if (bcgColor.style.backgroundColor === "black") {
        bcgColor.style.backgroundColor = "rgb(74, 172, 167)";
    } else {
        bcgColor.style.backgroundColor = "black";

    };
})

const htmlBtn = document.getElementById('html-btn');
const htmlText = document.getElementById('html');

htmlBtn.addEventListener('click', () => {
    htmlText.innerHTML = `&lt;p&gt;Así luce HTML&lt;/p&gt;`;
})

let count = 0;
let output = document.getElementById('output');
const jsBtn = document.getElementById('js-btn');

jsBtn.addEventListener('click', countClicks)

function countClicks(){
    count = count + 1;
    output.innerHTML = `¡ ${count} !`;
}


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
