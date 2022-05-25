
import './style.css';
import fetchImage from './fetch';
// import Notiflix from 'notiflix';
// import ImageApiService from './fetch';
// import Notiflix from 'notiflix';




const form = document.querySelector('#search-form');

const buttonLoadMore = document.querySelector('.load-more');
form.addEventListener('submit', onSearch);
buttonLoadMore.addEventListener('click', onSearch);

buttonLoadMore.hidden = true;

function onSearch(e) {
    e.preventDefault();
    const nameImage = form.elements.searchQuery.value; 
    console.log(nameImage);

    fetchImage(nameImage);
    
    buttonLoadMore.hidden = false;
    
};



// const form = document.querySelector('#search-form');
// form.addEventListener('submit', onSearch);
// const nameImage = form.elements.searchQuery.value;

// function onSearch(e) {
    
//     e.preventDefault();
    
//     ImageApiService.resetPage();
//     ImageApiService.fetchImage(`${nameImage}`);
// };




// const gallery = document.querySelector('.gallery');

// export default function markUpImageList(image) {
//     image.map(image => {
//         gallery.insertAdjacentHTML('beforeend',`<div class="photo-card">
//   <img src=`${image.previewURL}` alt="" loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b> `${image.likes}`
//     </p>
//     <p class="info-item">
//       <b>Views</b> `${image.views}`
//     </p>
//     <p class="info-item">
//       <b>Comments</b> `${image.comments}`
//     </p>
//     <p class="info-item">
//       <b>Downloads</b> `${image.downloads}`
//     </p>
//   </div>
// </div>
//     `)

//     })
// }
