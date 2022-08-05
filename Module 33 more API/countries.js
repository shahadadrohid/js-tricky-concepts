const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = (countries) => {
    const countriesDiv = document.getElementById('country')
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadDataByCountryName('${country.name.common}')">Details</button>`
        countriesDiv.appendChild(div)
    })
}

const loadDataByCountryName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryData(data[0]))
    // console.log(url);
}

const displayCountryData = country => {
    console.log(country)
    const countryDiv = document.getElementById('country-detailed')
    countryDiv.innerHTML = `
    <p>Population: ${country.population}</p>
    <img width="300px" scr="${country.flags}">`
}