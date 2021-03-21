const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main_menu');
    const navLinks = document.querySelectorAll('.menu_item')
    //Toggle Nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('menu_active');
    
    //Animate links
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.8s ease forwards ${index / 7 + 0.7}s`;
            }
        });

        //Burger animation
        burger.classList.toggle('toggle');

    });
}

navSlide();