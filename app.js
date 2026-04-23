const menuToggle= document.getElementById('menu-toggle');
const navlinks= document.getElementById('nav-links');

menuToggle.addEventListener('click', () =&gt;{
    navlinks.classList.toggle('active');
});
