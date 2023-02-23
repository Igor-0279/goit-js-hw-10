
const BASE_URL = 'https://restcountries.com/v3.1';

export function fetchCountryByCapital(capital){
    return fetch(`${BASE_URL}/capital/${capital}`).then(responce => responce.json());
}