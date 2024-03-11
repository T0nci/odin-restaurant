import '../css/style.css';
import Map from '../img/google-maps-example.jpg';

function populateAbout() {
  const contentDiv = document.querySelector('#content');

  const containerDiv = document.createElement('div');
  containerDiv.classList.add('container');
  containerDiv.classList.add('info');

  const map = new Image();
  map.src = Map;
  map.classList.add('map');

  const location = document.createElement('p');
  location.classList.add('location');
  location.innerHTML = 'Location:<br>Example Street 1, Example City';

  const contact = document.createElement('p');
  contact.classList.add('contact');
  contact.innerHTML = 'Contact:<br>+? ??? ??? ????';

  containerDiv.appendChild(map);
  containerDiv.appendChild(location);
  containerDiv.appendChild(contact);

  contentDiv.appendChild(containerDiv);
}


export { populateAbout };