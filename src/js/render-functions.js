 
export function createGallery(array) {
    return array.map(item =>
        `
        <li class="gallery-item">
       <a class="gallery-link" href="${item.largeImageURL}">
          <img
            class="gallery-image"
            src = "${item.webformatURL}"
            alt = "${item.tags}"
            loading = "lazy"
            width = "360"
            />
        </a>

        <div class="info">
                    <p class="info-item"><b>Likes ${item.likes}</b></p>
                    <p class="info-item"><b>Views ${item.views}</b></p>
                    <p class="info-item"><b>Comments ${item.comments}</b></p>
                    <p class="info-item"><b>Downloads ${item.downloads}</b></p>
                </div>

      </li> `
    ).join('');

}

export const showLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
};

   export const hideLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
};


