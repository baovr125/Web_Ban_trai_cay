document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        navbar.classList.toggle('active');
    }

    window.onscroll = () => {
        navbar.classList.remove('active');
    }

    // Dark mode
    let darkmode = document.querySelector('#darkmode');
    darkmode.onclick = () => {
        darkmode.classList.toggle('bx-moon');
        darkmode.classList.toggle('bx-sun');
    }
});
