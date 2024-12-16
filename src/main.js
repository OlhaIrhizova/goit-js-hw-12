import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { serviceImages } from './js/pixabay-api';
import { createGallery, showLoader, hideLoader} from './js/render-functions';


const searchForm = document.querySelector(".search-form");
const input = document.querySelector(".search-input");
const gallery = document.querySelector('.gallery');
const loadMoreButton = document.querySelector(".js-load-more");

const lightbox = new SimpleLightbox('.gallery a');


let page = 1;
let searchQuery = '';
let totalHits = 0; 
let loadedHits = 0; 



 function renderGallery(images) {
     
   gallery.innerHTML += createGallery(images);
  

 
  lightbox.refresh();
}

searchForm.addEventListener("submit", hendlerSearch);


async function hendlerSearch(event) {
    event.preventDefault();
   
    searchQuery = input.value.trim();
    page = 1;
   
    if (!searchQuery) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search term.',
        });
        return;
    }
   
    showLoader();

    gallery.innerHTML = '';
    totalHits = 0; 
    loadedHits = 0; 
    loadMoreButton.classList.add('load-more-hidden');


    try {
        const { hits, totalHits: total } = await serviceImages(searchQuery, page);
        totalHits = total;
        loadedHits = hits.length;


         if (hits.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                return;
            }
         renderGallery(hits);
         
          if (loadedHits < totalHits) {
                loadMoreButton.classList.remove('load-more-hidden');
            } else {
                iziToast.info({
                    title: 'Info',
                    message: "We're sorry, but you've reached the end of search results.",
                });
            }
        }
        catch(error) {
            iziToast.error({
                title: 'Error',
                message: 'Something went wrong. Please try again later.',
            });
            console.error(error);
        }
        finally {
            hideLoader(); 
        };
}

loadMoreButton.addEventListener("click", onLoadMore);

async function onLoadMore() {

     page += 1; 
    showLoader(); 

    try {
        const { hits, totalHits: total } = await serviceImages(searchQuery, page);
       loadedHits += hits.length;
        

        renderGallery(hits);


        if (loadedHits >= total) {
            loadMoreButton.classList.add('load-more-hidden');
            iziToast.info({
                title: 'Info',
                message: "We're sorry, but you've reached the end of search results.",
            });
        }

        const item = document.querySelector(".gallery-item");
        const itemHeigth = item.getBoundingClientRect().height;

        window.scrollBy({
            left: 0,
            top: itemHeigth * 2,
            behavior:"smooth"
        })
    
        





    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again later.',
        });
        console.error(error);
    } finally {
        hideLoader();
    }
}


