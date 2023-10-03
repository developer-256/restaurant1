const menu_Button = document.querySelector('#menu_Button');
const menu = document.querySelector('#menu');

menu_Button.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})