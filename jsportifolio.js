    window.addEventListener('scroll', function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagemHeader', window.scrollY > 200)
})

const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
hamburguer.addEventListener("click", () =>
nav.classList.toggle("active")
);
const navItems = document.querySelectorAll(".nav a");
navItems.forEach(item => {
    item.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});






