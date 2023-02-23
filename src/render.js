export const countryInfo = document.querySelector('.country-info');
export const countryList = document.querySelector('.country-list');

export function markupCountry(country) {
    countryInfo.insertAdjacentHTML(
      'beforeend',
      `<h2>${country.name.official} ${country.capital[0]}</h2><img src="${country.flags.svg}"width="32">`
    );
}
export function markupCountries(countries){
countryList.insertAdjacentHTML(
  'beforeend',
  countries.map(
    country =>
      `<li><img src="${country.flags.svg}"width="16"> ${country.name.official}</li>`
  ).join('')
);
}
export function clearContainers(){
 countryInfo.innerHTML ='';  
 countryList.innerHTML = '';  
}
