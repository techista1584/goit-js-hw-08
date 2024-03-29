import SimpleLightbox from 'simplelightbox';
import 'simpleLightbox/dist/simple-lightbox.min.css';
// Add imports above this line

import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryElem = document.querySelector('.gallery');

galleryElem.insertAdjacentHTML('beforeend', renderGalleryItems());

function renderGalleryItems() {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
             <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </div>`
    )
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoomFactor: false,
});
