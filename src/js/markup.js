import menu from '../menu.json';
import card from '../templates/markup.hbs';

const menuListRef = document.querySelector('.js-menu');
const menuItem = createMenuCard(menu);

menuListRef.innerHTML = menuItem;

function createMenuCard(menu) {
  return card(menu);
}
