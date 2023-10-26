const closeBTN = document.querySelector('#close-menu');
const openBTN = document.querySelector('#open-menu');
const menu = document.querySelector('header nav ul');
const menuItem = document.querySelectorAll('header nav ul li a');

function toggleMenu() {
    menu.classList.toggle('hide');
    closeBTN.classList.toggle('hide');
    openBTN.classList.toggle('hide');
    menuItem.forEach(item => {
        item.classList.toggle('hide');
    });
}

closeBTN.addEventListener('click', toggleMenu);
openBTN.addEventListener('click', toggleMenu);
menuItem.forEach(item => {
    item.addEventListener('click', toggleMenu);
});

window.addEventListener("scroll", function () {
    const navColor = document.querySelector('nav');

    if (window.scrollY > 0) {
        navColor.classList.add('bg-glass');
        navColor.classList.remove('bg-transparent');
    }
    else {
        navColor.classList.remove('bg-glass');
        navColor.classList.add('bg-transparent');
    }
});
