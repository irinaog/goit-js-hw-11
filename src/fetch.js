const axios = require('axios');
import Notiflix from 'notiflix';


// export default class ImageApiService{
//     constructor() {
//         this.page = 1;
//         // this.gallery=document.querySelector('.gallery');
//     };

//      async fetchImage(name) {
//     try {
//         const response = await axios.get(`https://pixabay.com/api/?key=27638998-69eef40c5569256b773a36aea&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`);
//         const images = response.data.hits;
//         images.map(image => {
//             const gallery = document.querySelector('.gallery');
//             gallery.insertAdjacentHTML('beforeend', `
//             <div class="photo-card">
//   <img src=${image.webformatURL} alt="${image.tags}" loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b> ${image.likes}
//     </p>
//     <p class="info-item">
//       <b>Views</b> ${image.views}
//     </p>
//     <p class="info-item">
//       <b>Comments</b> ${image.comments}
//     </p>
//     <p class="info-item">
//       <b>Downloads</b> ${image.downloads}
//     </p>
//   </div>
// </div>
//             `)
//         })

//         this.page += 1;
//         console.log(response.data.hits);
//     } catch {
//         console.log('error')
//     }  
// };

//  resetPage() {
//     this.page = 1;
//     }


// };







let page = 1;
export default  async function fetchImage(name) {
    try {
        const response = await axios.get(`https://pixabay.com/api/?key=27638998-69eef40c5569256b773a36aea&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`);
        const images = response.data.hits;
        images.map(image => {
            const gallery = document.querySelector('.gallery');
            gallery.insertAdjacentHTML('beforeend', `
            <div class="photo-card">
  <img src=${image.webformatURL} alt="${image.tags}" loading="lazy" />
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
</div>
            `)
        })

        page += 1;
        Notiflix.Notify.info(`Hooray! We found ${totalImage} images.`)
        console.log(response.data.hits);
    } catch {
        console.log('error')
    }  
};

// export function resetPage() {
//     page = 1;
// };