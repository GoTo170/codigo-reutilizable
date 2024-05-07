import { getCharacters } from "./peticiones/getCharacters.js"


let isLoading = false;
let loadedCharacters = [];
let currentPage = 1;


getCharacters()
    .then(data=> console.log(data))
    .catch (error=> console.log(error))

// window.onload = loadInitialCharacters;

// window.addEventListener('scroll', () => {
//     const { scrollTop , scrollHeight , clientHeight } = document.documentElement;

//     if(scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) {
//         loadMoreCharacters();
//     }
// });


//ctrl + k + c