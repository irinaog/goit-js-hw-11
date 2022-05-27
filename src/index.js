
import './style.css';
import ImageApiService from './fetch';
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";




const refs = {
    form: document.querySelector('#search-form'),
    buttonLoadMore: document.querySelector('.load-more'),
    gallery:document.querySelector('.gallery'),
};
const imagesApiService = new ImageApiService();

refs.buttonLoadMore.hidden = true;
refs.form.addEventListener('submit', onSearch);
refs.buttonLoadMore.addEventListener('click', onLoadMore);

async function onSearch(e) {
  e.preventDefault();
  refs.gallery.innerHTML = '';
  
  imagesApiService.query = e.currentTarget.elements.searchQuery.value;
  imagesApiService.resetPage();

  const totalImages = await imagesApiService.totalHitsImages();

  const images = await imagesApiService.fetchImages();
  const image = await images;
  if (images.length !== 0) {
      Notiflix.Notify.info(`Hooray! We found ${totalImages} images.`);
      console.log(totalImages);
      image.map(image => {
        markUpGallery(image);
      });
    refs.buttonLoadMore.hidden = false;
    return;
  } 
  
      Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
}



function markUpGallery(image) {
  
    refs.gallery.insertAdjacentHTML('beforeend', `
            <div class="photo-card">
  <a class = "large-image" href = "${image.largeImageURL}">
    <img src=${image.webformatURL} alt="${image.tags}" loading="lazy" />
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b> ${image.likes}
    </p>
    <p class="info-item">
      <b>Views</b> ${image.views}
    </p>
    <p class="info-item">
      <b>Comments</b> ${image.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b> ${image.downloads}
    </p>
  </div>
</div>`
  );
  let gallery = new SimpleLightbox('.large-image', { showCounter: false, animationSpeed: 100, animationSlide: false });
  gallery.refresh();
};


async function onLoadMore() {
  
  imagesApiService.counterImages();
  
  console.log(imagesApiService.counter);
  if (imagesApiService.counter > 0) {
    const images = await imagesApiService.fetchImages();
  const image = await images.map(image => {
            markUpGallery(image);
  });
    return;
  }
 
  Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
   refs.buttonLoadMore.hidden = true;
};