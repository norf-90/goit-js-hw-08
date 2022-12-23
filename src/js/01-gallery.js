// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(SimpleLightbox);

const galleryEl = document.querySelector('.gallery');
generateMarkup(galleryItems, galleryEl);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function generateMarkup(galleryItems, element) {
  const markup = galleryItems
    .map(
      ({ original, preview, description }) =>
        `<li><a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" 
        alt="${description}" />
      </a></li>`
    )
    .join('');

  element.insertAdjacentHTML('beforeend', markup);
}
