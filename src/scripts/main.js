// Transição de surgir do hero
document.addEventListener('DOMContentLoaded', function () {
    const transitionClass = 'animation';
    const logo = document.querySelector('[data-logo-transition]');
    logo.classList.add(transitionClass);
    
    setTimeout(tylerTransition, 1500);
    function tylerTransition () {
        const tyler = document.getElementById('tyler-logo');
        const tylerTransition = tyler.classList.add(transitionClass);
    }
})

// Animação de esconder e mostrar o índice
const index = document.querySelector('.index');
document.addEventListener('scroll', function () {
    let currentPosition = window.scrollY;
    
    if (currentPosition > 1600) {
        hideElement();
    } else {
        showElement();
    }
})
function hideElement() {
    const index = document.querySelector('.index')
    index.classList.add('index--is-hiden')
}
function showElement() {
    const index = document.querySelector('.index')
    index.classList.remove('index--is-hiden')
}

// Accordion da sublista do índice
const buttonNav = document.querySelectorAll('[data-drop-button]');

for (let i = 0; i < buttonNav.length; i++) {
    buttonNav[i].addEventListener('click', openMenu);
}

function openMenu(element) {
    const openMenuClass = 'drop-nav--is-open';
    const elementoPai = element.target.parentNode;
    elementoPai.classList.toggle(openMenuClass);
}


