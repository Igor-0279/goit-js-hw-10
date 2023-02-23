import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountryByCapital } from './api';
import './css/styles.css';
import { clearContainers, markupCountries, markupCountry } from './render';

const DEBOUNCE_DELAY = 300;
 const searchBox = document.querySelector('#search-box');

 searchBox.addEventListener('input', debounce((event) => {
    const capital = event.target.value.trim();
    if(capital){
        fetchCountryByCapital(capital).then(data =>{
            console.log(data);
            clearContainers();
            if(data.status === 404){
                Notify.failure('Така країна не знайдена');
            }
            if(data.length === 1){
                markupCountry(data[0])
            }else{
                markupCountries(data)
            }
        })
    }
 },DEBOUNCE_DELAY));




