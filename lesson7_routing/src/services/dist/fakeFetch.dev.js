// import fetch from "cross-fetch";
// let id = 0;
// const promisePingApi = new Promise((resolve, reject) => {
//   let intervalId = setInterval(() => {
//     return fetch("https://api.chucknorris.io/jokes/randoьm")
//       .then((res) => res.json())
//       .then((json) => {
//         if (json.status !== 200) {
//           id += 1;
//           console.log("id", id);
//           if (id === 5) {
//             clearInterval(intervalId);
//             window.alert("Ну все - ниче там нет");
//           }
//         }
//       });
//   }, 1000);
// });
// export default promisePingApi;
// const baseURL = "http://api.tvmaze.com";
// const fetchShowWithQuery = () => {
//   return fetch(`${baseURL}/search/shows?q=cat`)
//     .then((res) => res.json())
//     .then((entries) => entries.map((entry) => entry.show));
// };
// export default { fetchShowWithQuery };
"use strict";