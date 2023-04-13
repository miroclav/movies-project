// import { defineStore } from "pinia";

// const url = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='

// export const useSearchStore = defineStore("searchStore", {
//     state: () => ({
//         loader: false,
//         activeTab: 1,
//         films: []
//     }),
//     actions: {

//         async getSearchMovies(search) {
//             this.loader = true
//             const res = await fetch(`${url}${search}`, {
//                 method: 'GET',
//                 headers: {
//                     'X-API-KEY': 'e8d19d5c-9c24-4f5b-bab8-0d01fa0fbff7',
//                     'Content-Type': 'application/json',
//                 },
//             })
//             const data = await res.json()
//             console.log(data);
//             this.films = data.films
//             this.loader = false
//         },

//     }

// });
