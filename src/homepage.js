import vaultBoy from "./img/vaultboy.webp";

export function initialPageLoad() {
  const content = document.getElementById('content');

  const div = document.createElement('div');
  const h1 = document.createElement('h1');

  content.appendChild(div).classList.add('headline');
  const headline = document.querySelector('.headline');
  headline.appendChild(h1).textContent = 'Vault Snack';

  content.appendChild(document.createElement('div')).classList.add('main');
  const main = document.querySelector('.main');
  main.appendChild(document.createElement('p')).
    textContent = 'Have a snack on the ruins of the Old World. This restaurant is the most wonderful restaurant on the Wastelands. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed dictum libero, ut varius erat. Vivamus condimentum neque id maximus cursus. Aenean quis maximus libero. Vestibulum ac metus lobortis, fringilla neque eu, accumsan lorem. Nulla pharetra nec risus et elementum. Duis tempus eget magna eget tempus. Vivamus iaculis id lectus quis viverra. Aenean elementum, sapien a dignissim rutrum, dui sem malesuada est, vitae lobortis odio lacus a ipsum. Integer dui velit, porta at placerat eu, cursus sed odio. Donec sagittis imperdiet molestie. Curabitur massa sem, egestas ut convallis eget, tincidunt quis tortor. Nullam faucibus elit interdum tortor hendrerit mollis. Mauris nec felis magna.';

  main.appendChild(document.createElement('img')).
    setAttribute('src', vaultBoy)


}