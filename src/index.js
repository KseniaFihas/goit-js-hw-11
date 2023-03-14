import axios from "axios";
import Notiflix from "notiflix";
import simpleLightbox from "simplelightbox";

const refs = {
    form: document.querySelector(".search-form"),
    input: document.querySelector("input"),
    gallery: document.querySelector(".gallery"),
    buttonMore: document.querySelector(".load-more"),
};

let page = 1;

refs.buttonMore.style.display = "none";
refs.form.addEventListener("submit", onSearch);
refs.buttonMore.addEventListener("click", onButtonMore);


function onSearch(e) {
    e.preventDefault();

    page = 1;
    refs.gallery.innerHTML = "";
    

    const name = refs.input.value.trim();

    if (name !== "") {
        pixabay(name);
    } else {
        refs.buttonMore.style.display = "none";

        return Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    }
}



function onButtonMore() {
    const name = refs.input.value.trim();
    page += 1;
    pixabay(name, page);
}


async function pixabay(name, page) {
    const API_URL = 'https://pixabay.com/api/';
}

const options = {
    params: {
        key: "34366428-c8312deaec1e385c65e1239b7",
    }
}