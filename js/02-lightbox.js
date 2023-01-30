import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imageGallery = createGallery(galleryItems);

gallery.insertAdjacentHTML('afterbegin', imageGallery);

function createGallery() {
    const markup = galleryItems.map((elem) => {
        const {preview, original, description} = elem;
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `
    }).join('');
    return markup;
};

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

