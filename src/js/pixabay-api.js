import axios from "axios";

const BASE_URL = "https://pixabay.com/api/"
const API_KEY = "47417442-8de2b86208b2757b72fdcd518";




export async function serviceImages(searchQuery, page = 1) {
 const params = new URLSearchParams({
  
                key: API_KEY,
                q: searchQuery,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: "true",
                page,
                per_page: 15
            })
    try {
        const { data } = await axios(BASE_URL, {params});
        return { hits: data.hits, totalHits: data.totalHits };
    }catch(error) {
       
        return { hits: [], totalHits: 0 };
    }

};






