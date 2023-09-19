document.addEventListener('DOMContentLoaded', function () {
    // Animação de surgir o hero
    const transitionClass = 'animation';
    const logo = document.querySelector('[data-logo-transition]');
    logo.classList.add(transitionClass);
    
    setTimeout(tylerTransition, 1000);
    function tylerTransition () {
        const tyler = document.getElementById('tyler-logo');
        const tylerTransition = tyler.classList.add(transitionClass);
    }
    
    // Esconder e mostrar o menu
    const navMenu = document.querySelector('.nav-menu');
    const navButton = document.querySelector('.nav-button');
    navButton.addEventListener('click', function () {
        if (navMenu.style.left === '-100%') {
            navMenu.style.left = '0px';
        } else {
            navMenu.style.left = '-100%';
        }
    })

    const heroSection = document.querySelector('.hero')
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function () {
        const currentPosition = window.scrollY;

        if (currentPosition >= 1121) {
            navButton.classList.add('nav-button--is-visible')
        } else {
            navButton.classList.remove('nav-button--is-visible')
            navMenu.style.left = '-100%';
        }
        // if (currentPosition >= 1121) {
        //     navButton.style.visibility = 'visible'
        // } else {
        //     navButton.style.visibility = 'hidden'
        // }
    })
    
    // Accordion da sublista do índice
    const sublistButton = document.querySelectorAll('[data-sublist-button]');
    
    for (let i = 0; i < sublistButton.length; i++) {
        sublistButton[i].addEventListener('click', openSublist);
    }
    
    function openSublist(element) {
        const openSublistClass = 'nav-menu__sublist--is-open';
        const elementoPai = element.target.parentNode;
        elementoPai.classList.toggle(openSublistClass);
    }
})