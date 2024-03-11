import { populateHome } from './assets/js/home';
import { populateMenu } from './assets/js/menu';
import { populateAbout } from './assets/js/about';


function clearContentDiv() {
  const contentDiv = document.querySelector('#content');
  contentDiv.innerHTML = '';
}


const navButtons = document.querySelectorAll('.nav-button');
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) {
      return;
    } else {
      const allNavButtons = document.querySelectorAll('.nav-button');
      allNavButtons.forEach(btn => {
        if (btn.classList.contains('active')) {
          btn.classList.remove('active');
        }
      });

      btn.classList.add('active');
      clearContentDiv();

      const page = btn.getAttribute('id');
      switch (page) {
        case 'home':
          populateHome();
          break;
        case 'menu':
          populateMenu();
          break;
        case 'about':
          populateAbout();
          break;
        default:
          alert('ERROR');
      }
    }
  });
});

document.querySelector('.nav-button').classList.add('active');
populateHome();