import CheeseImg from '../img/cheese-pizza.jpg';
import PepperoniImg from '../img/pepperoni-pizza.jpg';
import VeggieImg from '../img/veggie-pizza.jpg';
import '../css/style.css';

function populateMenu() {
  const contentDiv = document.querySelector('#content');

  // Creation of container
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('container');
  containerDiv.classList.add('cards');

  // Misc
  const desc = document.createElement('p');
  desc.classList.add('card-desc');
  desc.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.';
  const btn = document.createElement('button');
  btn.classList.add('card-button');
  btn.textContent = 'Order';

  const desc1 = desc.cloneNode(true);
  const desc2 = desc.cloneNode(true);
  const desc3 = desc.cloneNode(true);
  const btn1 = btn.cloneNode(true);
  const btn2 = btn.cloneNode(true);
  const btn3 = btn.cloneNode(true);

  // Card 1 creation
  const card1 = document.createElement('div');
  card1.classList.add('card');

  const cardOneImage = new Image();
  cardOneImage.src = CheeseImg;
  cardOneImage.classList.add('card-image');
  card1.appendChild(cardOneImage);

  const title1 = document.createElement('h1');
  title1.classList.add('card-title');
  title1.textContent = 'Cheese Pizza';
  card1.appendChild(title1);
  
  card1.appendChild(desc1);
  card1.appendChild(btn1);

  // Card 2 creation
  const card2 = document.createElement('div');
  card2.classList.add('card');

  const cardTwoImage = new Image();
  cardTwoImage.src = PepperoniImg;
  cardTwoImage.classList.add('card-image');
  card2.appendChild(cardTwoImage);

  const title2 = document.createElement('h1');
  title2.classList.add('card-title');
  title2.textContent = 'Pepperoni Pizza';
  card2.appendChild(title2);

  card2.appendChild(desc2);
  card2.appendChild(btn2);

  // Card 3 creation
  const card3 = document.createElement('div');
  card3.classList.add('card');

  const cardThreeImage = new Image();
  cardThreeImage.src = VeggieImg;
  cardThreeImage.classList.add('card-image');
  card3.appendChild(cardThreeImage);

  const title3 = document.createElement('h1');
  title3.classList.add('card-title');
  title3.textContent = 'Veggie Pizza';
  card3.appendChild(title3);

  card3.appendChild(desc3);
  card3.appendChild(btn3);

  // Finishing logic
  containerDiv.appendChild(card1);
  containerDiv.appendChild(card2);
  containerDiv.appendChild(card3);

  contentDiv.appendChild(containerDiv);
}


export { populateMenu };