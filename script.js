function toggleNav() {
    var navLinks = document.querySelector('nav');
    navLinks.classList.toggle('active');
}
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

