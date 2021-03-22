const BASE_URL = 'https://restcountries.eu/rest/v2';

export default function fetchCountry(country) {
    return fetch(`${BASE_URL}/name/${country}`).then(response => {
        if(response.status !== 404){
        return response.json();
      }
    });
  }

//   export default function fetchCountry(country) {
//     return fetch(`${BASE_URL}/name/${country}`).then(response => {
//         if(response.status !== 404) throw new Error;
//         return response.json();
      
//     });
//   }
