/* eslint linebreak-style: ['error', 'windows'] */

const posts = [
  {
    img: 'https://placeimg.com/400/150/arch',
    title: 'Post title 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-1.com',
  },
  {
    img: 'https://placeimg.com/400/150/nature',
    title: 'Post title 2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-2.com',
  },
  {
    img: 'https://placeimg.com/400/150/arch',
    title: 'Post title 3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-3.com',
  },
];

function createPostCard(post) {
  const card = document.createElement('div');
  card.classList.add('post');

  const cardImage = document.createElement('img');
  cardImage.classList.add('post__image');
  cardImage.setAttribute('src', `${post.img}`);
  cardImage.setAttribute('alt', 'post image');
  card.appendChild(cardImage);

  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('post__title');
  cardTitle.textContent = post.title;
  card.appendChild(cardTitle);

  const cardText = document.createElement('p');
  cardText.classList.add('post__text');
  cardText.textContent = post.text;
  card.appendChild(cardText);

  const cardLink = document.createElement('a');
  cardLink.classList.add('button');
  cardLink.setAttribute('href', `${post.link}`);
  card.appendChild(cardLink);

  return card;
}

function createCards(postItems) {
  return postItems.map(item => createPostCard(item));
}

const cards = createCards(posts);
const rootContainer = document.querySelector('.root');
cards.forEach(item => rootContainer.appendChild(item));
