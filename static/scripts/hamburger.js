window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('.logo-and-nav-container');

    hamburger.addEventListener('click', function() {
        if (document.querySelector('.ham-nav')) {
            document.querySelector('.ham-nav').remove();
        } else {
            const hamNav = document.createElement('div');
            console.log(hamNav);
            hamNav.className = 'ham-nav';
            header.appendChild(hamNav);
            const navList = document.createElement('div');
            const navListLineZero = document.createElement('a');
            navListLineZero.innerText = 'Novinky';
            navListLineZero.setAttribute('href', '/novinky/');
            const navListLineFirst = document.createElement('a');
            navListLineFirst.innerText = 'Sortiment';
            navListLineFirst.setAttribute('href', '/sluzby/');
            const navListLineSecond = document.createElement('a');
            navListLineSecond.innerText = 'Reference';
            navListLineSecond.setAttribute('href', '/reference/');
            const navListLineThird = document.createElement('a');
            navListLineThird.innerText = 'Kontakt';
            navListLineThird.setAttribute('href', '/kontakt/');
            const navListLineFourth = document.createElement('a');
            navListLineFourth.innerText = 'Galerie';
            navListLineFourth.setAttribute('href', '/galerie/');
            navList.appendChild(navListLineZero);
            navList.appendChild(navListLineFirst);
            navList.appendChild(navListLineSecond);
            navList.appendChild(navListLineThird);
            navList.appendChild(navListLineFourth);
            hamNav.appendChild(navList);
        };
        hamburger.classList.toggle("change");
    });
});