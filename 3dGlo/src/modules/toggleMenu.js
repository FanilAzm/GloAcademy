const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };
    
    btnMenu.addEventListener('click', handlerMenu);

    menu.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('close-btn')){
            menu.classList.remove('active-menu');
        } else {
            target = target.closest('ul>li');
            if(target){
                menuItems.forEach((item) => {
                    handlerMenu();
                });
            }
        }
    });
};

export default toggleMenu;