import{a as b,S as L,i as n}from"./assets/vendor-D0cagnvz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();function w(t){return t.map(e=>`
        <li class="gallery-item">
       <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src = "${e.webformatURL}"
            alt = "${e.tags}"
            loading = "lazy"
            width = "360"
            />
        </a>

        <div class="info">
                    <p class="info-item"><b>Likes ${e.likes}</b></p>
                    <p class="info-item"><b>Views ${e.views}</b></p>
                    <p class="info-item"><b>Comments ${e.comments}</b></p>
                    <p class="info-item"><b>Downloads ${e.downloads}</b></p>
                </div>

      </li> `).join("")}const f=()=>{const t=document.querySelector(".loader");t.style.display="block"},h=()=>{const t=document.querySelector(".loader");t.style.display="none"},S="https://pixabay.com/api/",v="47417442-8de2b86208b2757b72fdcd518";async function y(t,e=1){const a=new URLSearchParams({key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:15});try{const{data:s}=await b(S,{params:a});return{hits:s.hits,totalHits:s.totalHits}}catch{return{hits:[],totalHits:0}}}const q=document.querySelector(".search-form"),H=document.querySelector(".search-input"),g=document.querySelector(".gallery"),c=document.querySelector(".js-load-more"),P=new L(".gallery a");let d=1,l="",m=0,i=0;function p(t){g.innerHTML+=w(t),P.refresh()}q.addEventListener("submit",E);async function E(t){if(t.preventDefault(),l=H.value.trim(),d=1,!l){n.error({title:"Error",message:"Please enter a search term."});return}f(),g.innerHTML="",m=0,i=0,c.classList.add("load-more-hidden");try{const{hits:e,totalHits:a}=await y(l,d);if(m=a,i=e.length,e.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(e),i<m?c.classList.remove("load-more-hidden"):n.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})}catch(e){n.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(e)}finally{h()}}c.addEventListener("click",$);async function $(){d+=1,f();try{const{hits:t,totalHits:e}=await y(l,d);i+=t.length,p(t),i>=e&&(c.classList.add("load-more-hidden"),n.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}));const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:s*2,behavior:"smooth"})}catch(t){n.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(t)}finally{h()}}
//# sourceMappingURL=index.js.map
