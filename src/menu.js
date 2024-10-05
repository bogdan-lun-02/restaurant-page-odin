import wastelandOmelet from "./img/wasteland-omelet.webp";
import desertSalad from './img/desert-salad.webp'
import cola from './img/cola.webp'
import iguanaStick from './img/iguana-stick.webp'
import sunsetSarsp from './img/sunset-sarsp.webp'

export function menuLoad() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  content.appendChild(document.createElement('div')).classList.add('headline');
  const headline = document.querySelector('.headline');
  headline.appendChild(document.createElement('h1')).textContent = 'MENU';


  content.appendChild(document.createElement('div')).classList.add('menu');


  function updateMenu(name, img) {
    const menu = document.querySelector('.menu');
    menu.appendChild(document.createElement('div')).classList.add('menuItem');
    const menuItem = document.querySelector('.menu').lastChild;
    menuItem.appendChild(document.createElement('h2')).textContent = name;
    menuItem.appendChild(document.createElement('img')).
      setAttribute('src', img);
  }

  updateMenu('Wasteland Omelet (15 caps)', wastelandOmelet);
  updateMenu('Desert Salad (18 caps)', desertSalad);
  updateMenu('Iguana Stick (20 caps)', iguanaStick);
  updateMenu('Nuka Cola (10 caps)', cola);
  updateMenu('Sunset Sarsparilla (12 caps)', sunsetSarsp);
}