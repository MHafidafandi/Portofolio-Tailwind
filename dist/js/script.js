
// Navbar fixed
window.onscroll= function(){
    const header =document.querySelector('header');
    const navfixed = header.offsetTop;
    const toTop =document.querySelector('#toTop');
    if(window.pageYOffset>navfixed){
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    }else{
        header.classList.remove('navbar-fixed')
        toTop.classList.add('hidden')
        toTop.classList.remove('flex')
    }
}

// Hamburger
const hamburger =document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target !=navMenu){
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

const darkToggle=document.querySelector('#dark-toggle');
const html=document.querySelector('html');

darkToggle.addEventListener('click',function(){
    // html.classList.toggle('dark')
    if(darkToggle.checked){
        html.classList.add('dark');
    }else{
        html.classList.remove('dark');
    }
})