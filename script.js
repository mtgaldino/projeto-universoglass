let contador = 1;

setInterval(function(){
    document.getElementById('slide' + contador).checked = true;
    contador++;

    if(contador > 4) {
        contador = 1;
    }

}, 3000);

const menuMobile = document.querySelector('.menu-mobile');
const navMenu = document.querySelector('.nav-menu');

menuMobile.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
