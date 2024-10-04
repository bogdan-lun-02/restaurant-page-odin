import wastelandOmelet from "./img/wasteland-omelet.webp";

export function menuLoad() {
  const content = document.getElementById('content');

  content.appendChild(document.createElement('div')).classList.add('headline');
  const headline = document.querySelector('.headline');
  headline.appendChild(document.createElement('h1')).textContent = 'MENU';


  content.appendChild(document.createElement('div')).classList.add('menu');

  const menu = document.querySelector('.menu');
  menu.appendChild(document.createElement('div')).classList.add('menuItem');
  const menuItem = document.querySelector('.menuItem');
  menuItem.appendChild(document.createElement('h2')).textContent = 'Wasteland Omelet';
  menuItem.appendChild(document.createElement('img')).
    setAttribute('src', wastelandOmelet);
  // function updateMenu(name, description, img) {

  // }
}