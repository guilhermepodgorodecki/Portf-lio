const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');
const sobre = document.querySelector('.animacao')

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

menu_items.forEach(item => {
    item.addEventListener('click',function(){
        if (window.matchMedia("(max-width: 600px)").matches) {
            close();
          };
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%';
    mainMenu.style.display = 'none'
}

function ativarLetra (elemento) {
    const arrTexto = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    arrTexto.forEach((letra, i ) => {
        setTimeout(() => {
            elemento.innerHTML += letra 
        }, 60 * i)
    })
}

ativarLetra(sobre)