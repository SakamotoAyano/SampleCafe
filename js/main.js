'use strict';

{
    const show = document.getElementById('show');
    const hide = document.getElementById('hide');
    const top = document.getElementById('top');
    const news = document.getElementById('news');
    const menu = document.getElementById('menu');
    const access = document.getElementById('access');
    const pages = [
        top,
        news,
        menu,
        access,
    ];
    let url = location.href;

    show.addEventListener('click', () => {
        document.body.className = 'menu-open';
    });

    hide.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
    });

    pages.forEach(page => { 
        if(page.href === url) {
            page.parentElement.classList.add('active');
        }
    });
}

