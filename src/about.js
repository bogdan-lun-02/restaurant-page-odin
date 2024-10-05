import helmet from './img/helmet.webp'

export function aboutPageLoad() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  content.classList.add('aboutContent');

  content.appendChild(document.createElement('div')).classList.add('about')
  const about = document.querySelector('.about')

  about.appendChild(document.createElement('h2')).textContent = 'Vault Snack';

  about.appendChild(document.createElement('img')).
    setAttribute('src', helmet);

  about.querySelector('img').classList.add('helmetIcon');

  content.appendChild(document.createElement('div')).classList.add('aboutText');
  const aboutText = document.querySelector('.aboutText');
  aboutText.textContent = 'War never changes. Man never changes. Food never changes. Nulla pharetra nec risus et elementum. Duis tempus eget magna eget tempus. Vivamus iaculis id lectus quis viverra. Aenean elementum, sapien a dignissim rutrum, dui sem malesuada est, vitae lobortis odio lacus a ipsum. Integer dui velit, porta at placerat eu, cursus sed odio. Donec sagittis imperdiet molestie. Curabitur massa sem, egestas ut convallis eget, tincidunt quis tortor. Nullam faucibus elit interdum tortor hendrerit mollis. Mauris nec felis magna.'
}