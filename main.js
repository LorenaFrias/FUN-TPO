
// HAMBURGER MENU

const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
nav.classList.add('open-nav')

close.addEventListener('click', () => {
nav.classList.remove('open-nav')
})})

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


// ANIMACION 

const slides = document.querySelectorAll('.square')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: 0.3,
    
});

slides.forEach(slide => {
    observer.observe(slide)
})

// API REST

function getData(){
    fetch('https://randomuser.me/api/?results=3&nat=es')
    .then(res => res.json())
    .then(data => {
        let author = data.results;
        let output = '';
        author.forEach(function(lists) {
            output +=
            `
            <li>
                <img id="image" src="${lists.picture.large}" alt="foto aleatoria">
                <div class="api-imagenes-texto">
                    <blockquote>"${getRandomReview()}"</blockquote>
                    <p id="name">${lists.name.first}</p>
                </div>

            </li>
            
            `
        });
        document.getElementById('api-container').innerHTML = output;
    })
    }
    
    getData();
    
    const confettiBtn = document.querySelector('.confetti');
    confettiBtn.addEventListener('click', getData);
    
    let reviews = [
        '¡Excelente!',
        '¡Codo a Codo es lo más!',
        '¡Aprendí un montón!',
        '¡Gracias por la dedicación!',
        '¡Germán es el mejor profe!',
        '¡Gracias profe!'
    ]
    
    function getRandomReview () {
        let review = reviews[Math.floor(Math.random() * reviews.length)];
        return review
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

// SCROLL UP BUTTON

const scrollBtn = document.querySelector('.scrollup');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
})
