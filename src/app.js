const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryContainer = document.querySelector('.js-gallery');
const imagesMarkup = createImagesMarkup(galleryItems);
const lightboxBigImage = document.querySelector('.lightbox__image');
const closeButton = document.querySelector('[data-action="close-lightbox"]');
const openModal = document.querySelector('.js-lightbox');
const galleryItem = document.querySelector('.gallery__image');

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);
galleryContainer.addEventListener('click', onImageClick);

function createImagesMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
        </a>
      </li>`;
    })
    .join('');
}

function onImageClick(evt) {
  evt.preventDefault();
  const target = evt.target;
  if (target.nodeName !== 'IMG') {
    return;
  }
  setModalWindowClass();
  lightboxBigImage.src = target.dataset.source;
  lightboxBigImage.alt = target.alt;
}

function setModalWindowClass() {
  openModal.classList.add('is-open');
  window.addEventListener('keydown', onEscPress, true);
  // window.addEventListener('keydown', onRightArrowPress, true);
}

function onEscPress(event) {
  if (event.code === 'Escape') {
    closeModalWindow();
  }
  return;
}

closeButton.addEventListener('click', closeModalWindow);

function closeModalWindow() {
  openModal.classList.remove('is-open');
  lightboxBigImage.src = '';
  lightboxBigImage.alt = '';
  window.removeEventListener('keydown', onEscPress, true);
}

const overlayEl = document.querySelector('.lightbox__overlay');
overlayEl.addEventListener('click', closeModalWindow);

// window.addEventListener('keydown', function (event) {
//   if (event.code === 'ArrowRight') {
//   }
// });

// const sourceArray = document.querySelectorAll('[data-source]');
// console.log(sourceArray);
// function getValue() {
//   sourceArray.forEach(element => {
//     console.log(element.dataset.source);
//     if (element.dataset.source === lightboxBigImage.src) {
//     }
//   });
// }
// getValue();

// const fnc = function () {
//   imgArray.forEach(img => {
//     console.log(lightboxBigImage.src);
//     console.log(img.dataset.source);
//   });
// };

// const imgArray = document.querySelectorAll('img')
// console.log(imgArray);

// window.addEventListener('keydown', function(event) {
//   if (event.code === 'ArrowRight') {
//     const activeImage = document.querySelector('.is-open')
//     let imgIndex = imgArray.indexOf(activeImage)
//     imgIndex += 1

//   } return
// }, true)
