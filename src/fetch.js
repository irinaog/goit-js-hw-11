const axios = require('axios');


export default class ImagesApiService{
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.counter=0;
  }

  async fetchImages() {
    const response = await axios.get(`https://pixabay.com/api/?key=27638998-69eef40c5569256b773a36aea&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`);
    const images = await response.data.hits;
    this.incrementPage();
        return images;
  };
  
  async totalHitsImages() {
    const response = await axios.get(`https://pixabay.com/api/?key=27638998-69eef40c5569256b773a36aea&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`);
    const totalImages = await response.data.totalHits;
    this.counter = totalImages;
    return totalImages;
  };

   
  get query() {
    return this.searchQuery;
  };

  set query(newQuery) {
    this.searchQuery = newQuery;
  };

  counterImages() {
    this.counter -=40;
  }

  incrementPage() {
    this.page += 1;
  };

  resetPage() {
    this.page = 1;
  };

}