const logo = document.querySelectorAll("#logo path");
for(let i = 0; i<logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
const menu_button = document.querySelector('.menu_button');
const menuLinks = document.querySelector('.menu_links');
const links = document.querySelectorAll('.menu_links li');

menu_button.addEventListener('click', () => {
    menuLinks.classList.toggle("open");
});