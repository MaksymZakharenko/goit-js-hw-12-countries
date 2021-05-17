import './sass/main.scss';
import { fetchByName } from './js/fetchCountries';
import countriesList from './handlebars/countriesList.hbs';
import countryDescription from './handlebars/countryDescr.hbs';

const containerRef = document.querySelector('.country-list');
const inputRef = document.querySelector('.search');

inputRef.addEventListener('input', onInputSearch);

function onInputSearch(event) {
  const formRef = event.currentTarget.value;

  const inputValue = formRef.toLowerCase().trim();
  console.log(inputValue);
  fetchByName(formRef)
    .then(user => renderCountries(user))
    .catch(error => renderError(error));

  //   const filteredCountries = fetchByName.filter(country =>
  //     country.toLowerCase().includes(inputValue),
  //   );

  //   renderCountries(filteredCountries);
}

const renderCountries = country => {
  if (country.length >= 2 && country.length <= 10) {
    let countriesElems = countriesList(country);
    containerRef.innerHTML = countriesElems;
  }
  if (country.length === 1) {
    let countriesElems = countryDescription(country);
    containerRef.innerHTML = countriesElems;
  }
  //   if (country.length > 10) {
  //     let countriesElems = countryDescription(country);
  //     containerRef.innerHTML = countriesElems;
  //   }

  //   const countriesElems = countriesList(country);
  //   containerRef.innerHTML = countriesElems;
};
