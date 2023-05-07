
// ----------------------------Sticky Navbar Navabar ----------------------------
window.addEventListener('scroll', function(){
    var navbar = this.document.getElementById('navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0)
})


// -------------------- Navbar (menue) tab and mobile -------------------

var menuIcon = document.getElementById('menu-icon');
var menu = document.getElementById('menu');
menu.style.right = '-250px';


menuIcon.addEventListener('click', showHide);
function showHide() {
    if(menu.style.right == '-250px') {
        menu.style.right = 0;
        menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menu.style.right = '-250px'
        menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}