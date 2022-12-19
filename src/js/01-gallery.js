// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



const galleryContainer = document.querySelector('.gallery');
const gallery = createGalleryMarkup(galleryItems);

galleryContainer.addEventListener('click', onGalleryClick);
function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
<div class="gallery">
  <a href="${original}">
    <img src="${preview}" alt="${description}" title="" />
  </a>
</div>
      `;
    })
    .join('');
}




galleryContainer.insertAdjacentHTML('beforeend', gallery);
function onGalleryClick(event) {
  event.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

