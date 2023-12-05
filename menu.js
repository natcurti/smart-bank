const btnMenuBars = document.getElementById('btnMenuBars');
const btnMenu = document.getElementById('btnMenu');
const menuList = document.querySelector('[data-menu]');

btnMenu.addEventListener('mouseover', () => {
    menuList.dataset.menu = 'open';
})

btnMenu.addEventListener('mouseleave', () => {
    menuList.dataset.menu = '';
})

btnMenuBars.addEventListener('click', () => {
    if(menuList.dataset.menu === ''){
        menuList.dataset.menu = 'open';
    } else {
        menuList.dataset.menu = '';
    }
})

menuList.addEventListener('mouseover', () => {
    menuList.dataset.menu = 'open';
})

menuList.addEventListener('mouseleave', () => {
    menuList.dataset.menu = '';
})


