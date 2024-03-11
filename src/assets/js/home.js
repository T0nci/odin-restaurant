import '../css/style.css';
import homeImg from '../img/home-pic.jpg';


function populateHome() {
  const contentDiv = document.querySelector('#content');

  const containerDiv = document.createElement('div');
  containerDiv.classList.add('container');

  const headline = document.createElement('h1');
  headline.classList.add('headline');
  headline.textContent = 'Pizza Town';

  const textDescription = document.createElement('p');
  textDescription.classList.add('desc');
  textDescription.textContent = 'Some text about how wonderful Pizza Town is. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nulla. Recusandae rem, molestiae excepturi, praesentium qui rerum officiis ab consequatur, quia ratione fugiat enim quae harum doloribus illo sed dignissimos!';

  const homeImage = new Image();
  homeImage.src = homeImg;
  homeImage.classList.add('home-picture');

  containerDiv.appendChild(headline);
  containerDiv.appendChild(textDescription);
  containerDiv.appendChild(homeImage);
  contentDiv.appendChild(containerDiv);
}


export { populateHome };