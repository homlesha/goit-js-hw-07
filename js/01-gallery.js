import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const imageGallery = createGallery(galleryItems);

gallery.insertAdjacentHTML('afterbegin', imageGallery);
gallery.addEventListener('click', onClickImage);

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

function onClickImage(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
      return;
    }
    const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}", width = "800", height = "600">`
    );
    instance.show();

    window.addEventListener('keydown', (CloseEsc) => {
        if (CloseEsc.key === 'Escape') {
            instance.close()
        }
    });
};