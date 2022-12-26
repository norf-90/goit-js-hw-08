// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
generateMarkup(galleryItems, galleryEl);

const lightbox = new SimpleLightbox('div a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function generateMarkup(galleryItems, element) {
  const markup = galleryItems
    .map(
      ({ original, preview, description }) =>
        `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" 
        alt="${description}" />
      </a>`
    )
    .join('');

  element.insertAdjacentHTML('beforeend', markup);
}
